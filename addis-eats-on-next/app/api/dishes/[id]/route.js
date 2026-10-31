
import { NextResponse } from "next/server";
import { getDishById } from "../../../../lib/dishes";

export async function GET(_request, { params }) {
    const { id } = await params;

  if (!/^[1-9]\d*$/.test(id)) {
    return NextResponse.json(
      { error: "Invalid dish ID." },
      { status: 400 }
    );
  }

  const dish = getDishById(id);

  if (!dish) {
    return NextResponse.json(
      { error: "Dish not found." },
      { status: 404 }
    );
  }

  return NextResponse.json({ dish });
}
