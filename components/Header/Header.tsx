import Label from "@/assets/icons/Logo.svg";

function Header() {
  return (
    <div className="py-5 border-b border-solid border-grey-line">
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex">
          <Label />
          <span className="pl-2 font-bold text-3xl text-white">Mems</span>
        </div>
        <div>
          <input placeholder="Search" type="search" />
        </div>
      </div>
    </div>
  );
}

export default Header;
