const fixedDate = (date) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};

export default fixedDate;
