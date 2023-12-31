import { FormType } from "../Form/FormCategory";
import CategoryCard from "./CategoryCard";

interface IProps {
  data: FormType[];
  handleDelete: (mem: FormType) => void;
  isLoading: boolean;
}

export const CategoryCardList = ({ data, handleDelete, isLoading }: IProps) => {
  return (
    <>
      {data?.map((mem, index) => (
        <CategoryCard
          key={index}
          data={mem}
          handleDelete={() => handleDelete(mem)}
          isLoading={isLoading}
        />
      ))}
    </>
  );
};
