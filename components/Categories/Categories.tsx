"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { CategoryCardList } from "./CategoryList";
import { FormType } from "../Form/FormCategory";
import Header from "../Header/Header";
import Link from "next/link";
import { Routs } from "@/constants";
import Plus from "@/assets/icons/plus.svg";

type Timeout = ReturnType<typeof setTimeout>;

function Categories() {
  const [categories, setCategories] = useState<FormType[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [searchTimeout, setSearchTimeout] = useState<Timeout | undefined>(
    undefined
  );
  const [searchedResults, setSearchedResults] = useState<FormType[]>([]);

  const searchCategories = (search: string) => {
    const regex = new RegExp(search, "i");
    return categories.filter((item) => regex.test(item.category));
  };

  const handleSearchChange = (value: string) => {
    clearTimeout(searchTimeout);
    setSearchText(value);
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = searchCategories(value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleDelete = async (category: FormType) => {
    console.log(category, "category");
    const hasConfirmed = confirm(
      "Are you sure you want to delete this category"
    );

    if (hasConfirmed) {
      try {
        if (category._id) {
          await axios.delete(`/api/category/${category._id.toString()}`);
          const filteredCategories = categories.filter(
            (item) => item._id !== category._id
          );
          setCategories(filteredCategories);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get("/api/category");
      const { data } = await response;
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <>
      <Header
        value={searchText}
        onChange={handleSearchChange}
        className="field"
      />
      <div className="flex  flex-col items-center justify-between pt-10">
        <Link className="btn" href={Routs.CREATE_CATEGORY}>
          <div className=" flex items-center justify-center">
            <Plus />
            <span className="pl-2">Create category</span>
          </div>
        </Link>
        <CategoryCardList
          data={
            searchText && searchText.length > 0 ? searchedResults : categories
          }
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default Categories;
