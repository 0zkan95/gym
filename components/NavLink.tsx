import { SelectedPage } from "@/shared/types";
import Link from "next/link";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavLink = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  
  const handleClick = () => {
    setSelectedPage(lowerCasePage);
  };
  
  return (
    <Link
      href={`#${lowerCasePage}`}
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
      onClick={handleClick}
    >
      {page}
    </Link>
  );
};

export default NavLink; 