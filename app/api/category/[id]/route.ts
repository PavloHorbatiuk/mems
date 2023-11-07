import Category from "@/models/category";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const category = await Category.findById(params.id);
    if (!category) return new Response("Category not found", { status: 404 });

    return new Response(JSON.stringify(category), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all categories", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    await Category.findByIdAndDelete(params.id);
    return new Response("Category deleted successfully", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch all categories", { status: 500 });
  }
};
