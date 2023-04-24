import { useState } from "react";
import { CustomButton1, IconButton } from "../../components";
import { BsChevronDown } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

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
      <div className="flex flex-col md:flex-row gap-3 px-3">
        <CustomButton1
          value="Create an account"
          bgColor="bg-blue hover:bg-lblue"
        />
        <CustomButton1
          value="Log in"
          bgColor="bg-t hover:bg-las text-black dark:text-gray-200 dark:hover:bg-lfp"
        />
      </div>
    </nav>
  );
};
export default HeaderHiddenBar;
