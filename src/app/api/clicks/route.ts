import { NextResponse } from "next/server";
import { getDb, isMongoConfigured } from "@/lib/mongodb";

export async function GET() {
  if (!isMongoConfigured()) {
    return NextResponse.json({ counts: {} });
  }

  const db = await getDb();
  const docs = await db
    .collection("clicks")
    .find({}, { projection: { _id: 0, linkId: 1, count: 1 } })
    .toArray();

  const counts = Object.fromEntries(
    docs.map((doc) => [doc.linkId as string, (doc.count as number) ?? 0])
  );

  return NextResponse.json({ counts });
}

export async function POST(request: Request) {
  const { linkId } = (await request.json()) as { linkId?: string };

  if (!linkId) {
    return NextResponse.json({ error: "linkId is required" }, { status: 400 });
  }

  if (!isMongoConfigured()) {
    console.warn("MONGODB_URI가 설정되지 않아 클릭 수를 기록하지 않습니다.");
    return NextResponse.json({ ok: false, recorded: false });
  }

  const db = await getDb();
  const result = await db
    .collection("clicks")
    .findOneAndUpdate(
      { linkId },
      { $inc: { count: 1 }, $set: { updatedAt: new Date() } },
      { upsert: true, returnDocument: "after" }
    );

  return NextResponse.json({ ok: true, recorded: true, count: result?.count ?? 0 });
}
