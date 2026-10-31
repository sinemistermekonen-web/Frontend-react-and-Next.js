
import { NextResponse } from "next/server";
import { dishes } from "../../../lib/dishes";

export function GET() {
  return NextResponse.json({ dishes });
}
