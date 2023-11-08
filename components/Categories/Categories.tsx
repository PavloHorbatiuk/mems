"use client";
import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { CategoryCardList } from "./CategoryList";
import { FormType } from "../Form/FormCategory";
import Header from "../Header/Header";
import Link from "next/link";
import { API, Routes } from "@/constants";
import Plus from "@/assets/icons/plus.svg";
import ConfirmModal from "../UI/Modal/ConfirmModal";

export interface ModalState {
  isOpen: boolean;
  confirm: boolean;
  id?: string;
}
type Timeout = ReturnType<typeof setTimeout>;
enum ModalText {
  "TITLE" = "Delete the Category?",
  "BODY" = 'All templates in the category will be moved to the category "Other" ',
}

function Categories() {
  const [categories, setCategories] = useState<FormType[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [searchTimeout, setSearchTimeout] = useState<Timeout | undefined>(
    undefined
  );
  const [searchedResults, setSearchedResults] = useState<FormType[]>([]);
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    confirm: false,
    id: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();

  const searchCategories = (search: string) => {
    const regex = new RegExp(search, "i");
    return categories.filter((item) => regex.test(item.category));
  };

  const handleSearchChange = (value: string) => {
    clearTimeout(timeRef.current);
    setSearchText(value);
    timeRef.current = setSearchTimeout(
      setTimeout(() => {
        const searchResult = searchCategories(value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const onDelete = (category: FormType) => {
    setModalState((prev) => ({
      ...prev,
      isOpen: true,
      id: category._id || "",
    }));
  };

  const fetChDelete = useCallback(async () => {
    try {
      setIsLoading(true);
      if (modalState.id) {
        await axios.delete(`${API.GET_CATEGORY}/${modalState.id.toString()}`);
        const filteredCategories = categories.filter(
          (item) => item._id !== modalState.id
        );
        setCategories(filteredCategories);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setModalState((prev) => ({
        ...prev,
        isOpen: false,
        confirm: false,
        id: "",
      }));
    }
  }, [categories, modalState.id]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(API.GET_CATEGORY);
        const { data } = await response;
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
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
        <Link className="btn" href={Routes.CREATE_CATEGORY}>
          <div className=" flex items-center justify-center">
            <Plus />
            <span className="pl-2">Create category</span>
          </div>
        </Link>
        <CategoryCardList
          data={
            searchText && searchText.length > 0 ? searchedResults : categories
          }
          handleDelete={onDelete}
          isLoading={isLoading}
        />
        <ConfirmModal
          isOpen={modalState.isOpen}
          setModalState={setModalState}
          title={ModalText.TITLE}
          bodyText={ModalText.BODY}
          setConfirm={fetChDelete}
        />
      </div>
    </>
  );
}

export default Categories;
