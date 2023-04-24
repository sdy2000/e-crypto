import React from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { IconButton } from "..";
import { useStateTheme } from "../../store/hooks/useStateContext";

const ThemeButton = ({ size = 25 }) => {
  const { theme, setTheme } = useStateTheme();

  const chengeTheme = () => {
    setTheme({
      theme: theme.theme === "dark" ? "light" : "dark",
    });
  };

  return theme.theme === "light" ? (
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
