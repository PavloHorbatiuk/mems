"use client";
import FormCategory, { FormType } from "@/components/Form/FormCategory";
import { Names, Routs } from "@/constants";
import axios from "axios";
import { useRouter } from "next/navigation";

const CreateCategory = () => {
  const router = useRouter();

  const CreateCategory = async (values: FormType) => {
    try {
      const response = await axios.post("/api/category/new", {
        category: values.category,
        check: values.check,
      });

      if (response.status == 201) router.push(Routs.HOME);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <FormCategory type={Names.CREATE} handleSubmit={CreateCategory} />
    </>
  );
};

export default CreateCategory;
