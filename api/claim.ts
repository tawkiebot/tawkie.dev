// api/claim.ts - Simple claim endpoint
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { payload } = await request.json();
    
    // Generate a simple token
    const token = Array.from(crypto.getRandomValues(new Uint8Array(16)))
      .map(b => b.toString(16).padStart(2, '0')).join('');
    
    // Return the claim URL
    return NextResponse.json({
      success: true,
      token,
      url: `https://tawkie.dev/claim/${token}`,
      expiresAt: Date.now() + 5 * 60 * 1000, // 5 minutes
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

  // For demo, just return that the claim would be valid
  return NextResponse.json({
    valid: true,
    expiresAt: Date.now() + 5 * 60 * 1000,
  });
}
