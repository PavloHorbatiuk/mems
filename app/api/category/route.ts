import { connectToDB } from "@/utils/database";
import Category from "@/models/category";

export const GET = async (request: Promise<void>) => {
  try {
    await connectToDB();

    const categories = await Category.find({});

    return new Response(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all categories", { status: 500 });
  }
};
