import { IoSearch } from "react-icons/io5";

const FilterController = ({
  selected,
  setSearchValue,
  searchValue,
  options,
  selectedOptin,
  setSelectedOption,
}) => {
  return (
    <section>
      <div className="container pb-8 flex items-center justify-between gap-[30px]">
        {/* filter */}
        <div className="flex items-center py-[15px] px-[18px] rounded-[10px] border bg-white ">
          <div className="flex items-center gap-[30px]">
            <a
              className={`${
                selected === "pizza"
                  ? "border border-primary hover:bg-primary hover:text-white hover:border hover:border-primary py-1 px-7 rounded-[10px]"
                  : "border border-transparent hover:rounded-[10px] hover:py-1 hover:px-7  hover:border-primary"
              } transition-all duration-200`}
              href="#pizza"
            >
              Pizza
            </a>
            <a
              className={`${
                selected === "softDrinks"
                  ? "border border-primary hover:bg-primary hover:text-white hover:border hover:border-primary py-1 px-7 rounded-[10px]"
                  : "border border-transparent hover:rounded-[10px] hover:py-1 hover:px-7  hover:border-primary"
              } transition-all duration-200`}
              href="#softDrinks"
            >
              SoftDrinks
            </a>
            <a
              className={`${
                selected === "Sauces"
                  ? "border border-primary hover:bg-primary hover:text-white hover:border hover:border-primary py-1 px-7 rounded-[10px]"
                  : "border border-transparent hover:rounded-[10px] hover:py-1 hover:px-7  hover:border-primary"
              } transition-all duration-200`}
              href="#Sauces"
            >
              Sauces
            </a>
          </div>
        </div>

        {/* search */}
        <div className="w-full outline-none py-[15px] px-[18px] rounded-[10px] border flex items-center gap-3 bg-white">
          <IoSearch />
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            className="w-full outline-none"
            type="text"
          />
        </div>

        {/* select */}
        <div className="flex items-center py-[15px] px-[18px] rounded-[10px] border bg-white ">
          <select
            className="bg-white"
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option selected={selectedOptin === "all"} value="All">
              All
            </option>
            {options?.map((option) => (
              <option
                selected={selectedOptin === option}
                key={option}
                value={option}
              >
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default FilterController;
