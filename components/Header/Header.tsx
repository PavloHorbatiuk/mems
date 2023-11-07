import Label from "@/assets/icons/Logo.svg";
import { Routs } from "@/constants";
import Link from "next/link";
import { ChangeEvent } from "react";

interface IProps {
  value: string;
  onChange: (value: string) => void;
  className: string;
}

function Header({ value, onChange, className }: IProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.target?.value);
  return (
    <div className="py-5 border-b border-solid border-grey-line">
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex">
          <Link href={Routs.HOME}>
            <Label />
          </Link>
          <span className="pl-2 font-bold text-3xl text-white">Mems</span>
        </div>
        <form>
          <input
            value={value}
            onChange={handleChange}
            className={className}
            placeholder="Search"
            type="search"
          />
        </form>
      </div>
    </div>
  );
}

export default Header;
