import React from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useStateContext } from "../../../../../hooks";
import { IconButton } from "../../../../../components";

const ThemeButton = ({ size = 25 }) => {
  const { context, setContext } = useStateContext();

  const chengTheme = () => {
    setContext({
      theme: context.theme === "dark" ? "light" : "dark",
    });
  };

  return context.theme === "light" ? (
    <span onClick={chengTheme}>
      <IconButton value={<BsSunFill size={size} />} />
    </span>
  ) : (
    <span onClick={chengTheme}>
      <IconButton value={<BsMoonFill size={size} />} />
    </span>
  );
};

export default ThemeButton;
