const checkTheme = (existing) => {
  const root = window.document.documentElement;
  const isDark = existing === "dark";

  root.classList.remove(isDark ? "light" : "dark");
  root.classList.add(existing);
};

export default checkTheme;
