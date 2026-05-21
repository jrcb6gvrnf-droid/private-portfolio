import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const configuredPassword = process.env.ADMIN_PASSWORD;

  if (!configuredPassword) {
    return NextResponse.json(
      { ok: false, error: "Admin password is not configured." },
      { status: 500 },
    );
  }

  const body = (await request.json().catch(() => null)) as { password?: unknown } | null;
  const submittedPassword = typeof body?.password === "string" ? body.password : "";

  if (submittedPassword !== configuredPassword) {
    return NextResponse.json(
      { ok: false, error: "That password does not match the Version 1 admin gate." },
      { status: 401 },
    );
  }

  return NextResponse.json({ ok: true });
}
