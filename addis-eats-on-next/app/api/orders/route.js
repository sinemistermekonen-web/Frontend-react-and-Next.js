import { NextResponse } from "next/server";
import { processOrder } from "../../../lib/orders";

export async function POST(request) {
  let body;
  try { body = await request.json(); }
  catch { return NextResponse.json({ error: "Request body must be valid JSON." }, { status: 400 }); }

  const result = processOrder(body);
  if (!result.ok) {
    const status = result.status === 500 ? 500 : 422;
    return NextResponse.json({ error: "Please correct the order details.", details: result.errors }, { status });
  }
  return NextResponse.json({ message: "Order validated successfully. This demo does not save orders.", order: result.order }, { status: 200 });
}
