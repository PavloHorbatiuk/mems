import { FormType } from "../Form/FormCategory";
import DeleteIcon from "@/assets/icons/delete.svg";
import Check from "@/assets/icons/check.svg";
import Checked from "@/assets/icons/checked.svg";

interface IProps {
  data: FormType;
  handleDelete?: () => void;
}

function CategoryCard({ data, handleDelete }: IProps) {
  const { _id, category: name, check } = data;
  return (
    <div className="category-list mt-2 " key={_id}>
      <span>{name}</span>
      <div className="flex">
        {check ? <Checked /> : <Check />}
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default CategoryCard;
