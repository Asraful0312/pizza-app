import SingleItem from "./SingleItem";
import FilterController from "./FilterController";
import { softDrinks } from "../../data/data";
import { useState } from "react";

const options = ["alcohol", "Non alcohol"];

const SoftDrinks = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedOptin, setSelectedOption] = useState("All");

  const drinksData = softDrinks
    ?.filter((item) =>
      selectedOptin === "All"
        ? true
        : item?.type?.toLowerCase().replace(" ", "-") ===
          selectedOptin.toLowerCase().replace(" ", "-")
    )
    .filter((item) =>
      item?.name.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <section id="softDrinks" className="pt-[65px] bg-[#FBF8F7]">
      <FilterController
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        selected="softDrinks"
        options={options}
        selectedOptin={selectedOptin}
        setSelectedOption={setSelectedOption}
      />
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {drinksData.length === 0 && (
          <p className="text-gray-500 text-center w-full">No Item Found!</p>
        )}
        {drinksData?.map((data) => (
          <SingleItem type="softDrink" key={data?.id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default SoftDrinks;
