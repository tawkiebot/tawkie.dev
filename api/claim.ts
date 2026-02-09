// api/claim.ts - Next.js API route for claim URLs
import { NextRequest, NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function POST(request: NextRequest) {
  try {
    const { payload } = await request.json();
    
    // Create claim
    const result = await convex.mutation("claims:create", { payload });
    
    return NextResponse.json({
      success: true,
      token: result.token,
      url: result.url,
      expiresAt: result.expiresAt,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create claim" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json(
      { error: "Missing token" },
      { status: 400 }
    );
  }

  try {
    const result = await convex.query("claims:status", { token });

    if (!result.exists) {
      return NextResponse.json(
        { error: "claim_not_found", message: "Invalid claim link" },
        { status: 404 }
      );
    }

    if (result.expired) {
      return NextResponse.json(
        { error: "claim_expired", message: "This claim link has expired" },
        { status: 410 }
      );
    }

    if (result.used) {
      return NextResponse.json(
        { error: "claim_used", message: "This link was already used" },
        { status: 410 }
      );
    }

    // Claim is valid - user should use it
    return NextResponse.json({
      valid: true,
      expiresAt: result.expiresAt,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to validate claim" },
      { status: 500 }
    );
  }
}
