// convex/memos.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Create a new memo
export const create = mutation({
  args: {
    id: v.string(),
    title: v.string(),
    transcript: v.string(),
    audioKey: v.string(),
    audioUrl: v.optional(v.string()),
    duration: v.number(),
    createdAt: v.string(),
    tags: v.optional(v.array(v.string())),
  },
  handler: async (ctx, args) => {
    const memoId = await ctx.db.insert("memos", {
      id: args.id,
      title: args.title,
      transcript: args.transcript,
      audioKey: args.audioKey,
      audioUrl: args.audioUrl,
      duration: args.duration,
      createdAt: args.createdAt,
      tags: args.tags,
    });
    return memoId;
  },
});

// Get memo by ID
export const getById = query({
  args: { memoId: v.string() },
  handler: async (ctx, args) => {
    const memo = await ctx.db
      .query("memos")
      .filter((q) => q.eq(q.field("id"), args.memoId))
      .first();
    return memo;
  },
});

// List memos (latest first)
export const list = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const memos = await ctx.db
      .query("memos")
      .withIndex("by_created")
      .order("desc")
      .take(args.limit ?? 50);
    return memos;
  },
});

// Search memos by transcript
export const search = query({
  args: { query: v.string() },
  handler: async (ctx, args) => {
    // Simple substring search - for production, use Convex search
    const allMemos = await ctx.db.query("memos").collect();
    return allMemos.filter((m) =>
      m.transcript.toLowerCase().includes(args.query.toLowerCase())
    );
  },
});
