// api/memo/[id].ts - Public memo fetch endpoint
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const memoId = params.id;

  // For demo, return a sample response
  // In production, this would fetch from R2/Convex
  return NextResponse.json({
    id: memoId,
    title: "Sample Memo",
    transcript: "This is a sample memo transcript. In production, this would be fetched from your R2 bucket.",
    audioUrl: "https://example.com/audio.m4a",
    duration: 45.2,
    createdAt: new Date().toISOString(),
    tags: ["sample"],
    note: "This is a demo response. Configure your R2 and Convex to enable real memos.",
  });
}
