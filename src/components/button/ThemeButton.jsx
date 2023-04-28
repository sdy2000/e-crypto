import React from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { IconButton } from "..";
import { useStateContext } from "../../store";

const ThemeButton = ({ size = 25 }) => {
  const { context, setContext } = useStateContext();

  const chengeTheme = () => {
    setContext({
      theme: context.theme === "dark" ? "light" : "dark",
    });
  };

  return context.theme === "light" ? (
    <span onClick={chengeTheme}>
      <IconButton value={<BsSunFill size={size} />} />
    </span>
  ) : (
    <span onClick={chengeTheme}>
      <IconButton value={<BsMoonFill size={size} />} />
    </span>
  );
};

export default ThemeButton;
