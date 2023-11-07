import Category from "@/models/category";
import { connectToDB } from "@/utils/database";

export const POST = async (req) => {
  const { category, check } = await req.json();
  console.log(req, "req");
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
