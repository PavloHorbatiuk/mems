import Category from "@/models/category";
import { connectToDB } from "@/utils/database";
import { NextRequest } from "next/server";

export const POST = async (req: Request | NextRequest) => {
  const { category, check } = await req.json();

  try {
    await connectToDB();
    const newCategory = new Category({
      category,
      check,
    });

    await newCategory.save();

    return new Response(JSON.stringify(newCategory), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new category", { status: 500 });
  }
};
