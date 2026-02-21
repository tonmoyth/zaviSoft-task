import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/revalidate/categories
 * On-demand revalidation endpoint for categories
 *
 * Optional query param: ?secret=<REVALIDATE_SECRET>
 *
 * Usage:
 * curl -X POST "http://localhost:3000/api/revalidate/categories?secret=your-secret"
 */
export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const secret = searchParams.get("secret");

  // Validate secret (use environment variable for security)
  const validSecret = process.env.REVALIDATE_SECRET || "default-secret";
  if (secret !== validSecret) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  try {
    revalidateTag("categories");
    return NextResponse.json(
      {
        revalidated: true,
        message: "Categories cache revalidated successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to revalidate categories cache" },
      { status: 500 },
    );
  }
}
