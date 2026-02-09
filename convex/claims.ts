// convex/claims.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { nanoid } from "nanoid";

// Create a new claim (returns token)
export const create = mutation({
  args: {
    payload: v.string(),  // Encrypted config JSON
    expiresInMs: v.optional(v.number()),  // Default: 5 minutes
  },
  handler: async (ctx, args) => {
    const token = nanoid(16);
    const now = Date.now();
    const expiresAt = now + (args.expiresInMs ?? 5 * 60 * 1000); // 5 min default

    await ctx.db.insert("claims", {
      token,
      payload: args.payload,
      createdAt: now,
      expiresAt,
    });

    return {
      token,
      url: `https://tawkie.dev/claim/${token}`,
      expiresAt,
    };
  },
});

// Validate and use a claim (returns payload, marks as used)
export const consume = mutation({
  args: { token: v.string() },
  handler: async (ctx, args) => {
    const claim = await ctx.db
      .query("claims")
      .filter((q) => q.eq(q.field("token"), args.token))
      .first();

    if (!claim) {
      throw new Error("claim_not_found");
    }

    if (Date.now() > claim.expiresAt) {
      throw new Error("claim_expired");
    }

    if (claim.usedAt) {
      throw new Error("claim_already_used");
    }

    // Mark as used
    await ctx.db.patch(claim._id, { usedAt: Date.now() });

    return {
      payload: claim.payload,
      usedAt: claim.usedAt,
    };
  },
});

// Get claim status (without consuming)
export const status = query({
  args: { token: v.string() },
  handler: async (ctx, args) => {
    const claim = await ctx.db
      .query("claims")
      .filter((q) => q.eq(q.field("token"), args.token))
      .first();

    if (!claim) {
      return { exists: false };
    }

    return {
      exists: true,
      expired: Date.now() > claim.expiresAt,
      used: !!claim.usedAt,
      expiresAt: claim.expiresAt,
    };
  },
});

// Cleanup expired claims (run periodically)
export const cleanup = mutation({
  handler: async (ctx) => {
    const claims = await ctx.db.query("claims").collect();
    const now = Date.now();
    
    for (const claim of claims) {
      if (claim.expiresAt < now && !claim.usedAt) {
        await ctx.db.delete(claim._id);
      }
    }
  },
});
