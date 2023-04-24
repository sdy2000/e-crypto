const IconButton = ({ value }) => {
  return (
    <button
      className="flex justify-center items-center text-2xl lg:text-3xl
     rounded-full w-10 h-10 text-t hover:text-p duration-300"
    >
      {value}
    </button>
  );
};
export default IconButton;
