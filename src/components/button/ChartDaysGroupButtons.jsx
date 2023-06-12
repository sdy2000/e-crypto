const ChartDaysGroupButtons = ({ days, setDays }) => {
  const chartDays = [
    {
      label: "24 Hours",
      value: 1,
    },
    {
      label: "30 Days",
      value: 30,
    },
    {
      label: "3 Months",
      value: 90,
    },
    {
      label: "1 Year",
      value: 365,
    },
  ];

  return (
    <div className="flex justify-center items-center gap-6 mt-8">
      {chartDays.map((day) => (
        <button
          className={`${
            day.value === days ? "bg-[#EEBC1D] text-black" : "text-s "
          } font-bold border-2 border-[#EEBC1D] rounded-lg shadow-lg px-6 py-1`}
          key={day.value}
          onClick={() => setDays(day.value)}
          selected={day.value === days}
        >
          {day.label}
        </button>
      ))}
    </div>
  );
};
export default ChartDaysGroupButtons;
