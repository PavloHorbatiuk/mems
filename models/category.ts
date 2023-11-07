import { Schema, model, models } from "mongoose";

const CategorySchema = new Schema({
  category: { type: String, required: [true, "Category is required."] },
  check: {
    type: Boolean,
    required: [true, "Tag is required"],
  },
});

const Category = models.Category || model("Category", CategorySchema);

export default Category;
