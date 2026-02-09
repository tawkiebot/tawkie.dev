// api/memo/[id].ts - Public memo fetch endpoint
import { NextRequest, NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const memoId = params.id;
    
    // Try to fetch from Convex first
    try {
      const memo = await convex.query("memos:getById", { memoId });
      
      if (memo) {
        return NextResponse.json({
          id: memo.id,
          title: memo.title,
          transcript: memo.transcript,
          audioUrl: memo.audioUrl,
          duration: memo.duration,
          createdAt: memo.createdAt,
          tags: memo.tags,
        });
      }
    } catch {
      // Convex might not be set up, continue to CDN fallback
    }

    // Fallback: try CDN direct URL format
    // Format: https://tawkie.dev/api/memo/memo_abc123.json
    const cdnUrl = `https://tawkie.dev/api/memo/${memoId}.json`;
    
    return NextResponse.json({
      id: memoId,
      error: "Memo not found in database",
      fallbackUrl: cdnUrl,
    }, { status: 404 });

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch memo" },
      { status: 500 }
    );
  }
}
