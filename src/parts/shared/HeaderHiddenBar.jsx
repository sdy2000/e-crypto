import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { AiOutlineCaretDown } from "react-icons/ai";
import { HiCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  CustomButton1,
  CustomButton2,
  IconButton,
  SocialBox,
  ThemeButton,
} from "../../components";

const categores = [
  {
    id: 1,
    category: "Database",
    subCategores: ["MS SQL Server", "Mongo DB", "My SQL Server", "Apache"],
  },
  {
    id: 2,
    category: "Web Development",
    subCategores: ["React.js", "Node.js", ".Net Core", "Jango"],
  },
  {
    id: 3,
    category: "Mobile Development",
    subCategores: ["React Nativ", "Zamarin", "Katlin", "Java"],
  },
  {
    id: 4,
    category: "Language",
    subCategores: ["C#", "JavaScript", "Phayton", "Java"],
  },
  {
    id: 5,
    category: "SEO",
  },
];

const HeaderHiddenBar = ({ isOpenList, setIsOpenList }) => {
  const [clickStates, setClickStates] = useState({});

  const handleOnClick = (id) => {
    if (clickStates[id] === true) {
      setClickStates({
        [id]: false,
      });
    } else {
      setClickStates({
        [id]: true,
      });
    }
  };

  return (
    <nav
      className={`hidden-nav fixed inset-0 bg-lbp dark:bg-dbp py-5 px-3 overflow-auto
                     overscroll-contain z-30 xl:hidden
                     ${
                       !isOpenList
                         ? "-translate-x-[100%] invisible"
                         : "translate-x-[0] visible"
                     }`}
    >
      <div className="container flex justify-between border-b dark:border-das pb-3">
        <div className="flex justify-start items-center gap-1">
          <img
            className="w-8 h-8 md:w-10 md:h-10"
            src="/assets/e-icon.png"
            alt="E icon"
          />
          <span className="text-p text-xl md:text-2xl font-bold">Crypto</span>
        </div>
        <IconButton
          value={
            <IoMdClose size={40} onClick={() => setIsOpenList(!isOpenList)} />
          }
        />
      </div>
      <ul className="hidden-bar flex flex-col justify-center items-start gap-2 text-lfp dark:text-dfp">
        {categores.map((cat) => (
          <li onClick={() => handleOnClick(cat.id)} key={cat.id} id={cat.id}>
            <Link to="#">
              {cat.category} {cat.subCategores && <BsChevronDown />}
            </Link>
            {cat.subCategores && (
              <ul
                className={`${
                  !clickStates[cat.id]
                    ? "translate-y-[100%] hidden"
                    : "translate-y-[0] visible"
                } hidden-sub-bar`}
              >
                {cat.subCategores.map((subCat, idx) => (
                  <li key={idx}>
                    <Link to="/#">{subCat}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="flex flex-col md:flex-row gap-3 px-3 my-8">
        <CustomButton1
          to={"#"}
          value="Create an account"
          style="bg-blue hover:bg-lblue"
        />
        <CustomButton1
          to={"#"}
          value="Log in"
          style="bg-t hover:bg-las text-lfp dark:text-gray-200 dark:hover:bg-lfp"
        />
      </div>
      <div className="flex justify-center items-center gap-3 px-4">
        <CustomButton2
          to={"#"}
          value="English"
          icon2={<AiOutlineCaretDown />}
        />
        <CustomButton2
          to={"#"}
          value="USD"
          icon1={<HiCurrencyDollar size={20} className="text-green-500" />}
          icon2={<AiOutlineCaretDown />}
        />
        <CustomButton2
          to={"#"}
          value={<ThemeButton size={20} />}
          style="w-auto py-[2px]"
        />
      </div>
      <div className="mt-12 border-b dark:border-das pb-8 w-full">
        <ul className="flex justify-center items-center gap-2 flex-wrap max-w-xs text-s text-sm font-semibold mx-auto ">
          <li>
            <Link to="#">Desclaimer</Link>
          </li>
          <li>.</li>
          <li>
            <Link to="#">Request From</Link>
          </li>
          <li>.</li>
          <li>
            <Link to="#">Terms of Use</Link>
          </li>
          <li>
            <Link to="#">Privacy</Link>
          </li>
          <li>.</li>
          <li>
            <Link to="#">About</Link>
          </li>
        </ul>
      </div>
      <div className="mt-12 w-full">
        <SocialBox styles={"hidden-bar-social"} />
      </div>
    </nav>
  );
};
export default HeaderHiddenBar;
