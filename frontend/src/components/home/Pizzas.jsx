import SingleItem from "./SingleItem";
import FilterController from "./FilterController";
import { pizzas } from "../../data/data";
import { useState } from "react";

const options = ["vegeterian", "Non vegeterian"];

export const Pizzas = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedOptin, setSelectedOption] = useState("All");

  const pizzaData = pizzas
    ?.filter((item) =>
      selectedOptin === "All"
        ? true
        : item?.type?.toLowerCase().replace(" ", "-") ===
          selectedOptin?.toLowerCase().replace(" ", "-")
    )
    .filter((item) =>
      item?.name.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <section id="pizza" className="pt-[65px] bg-[#FBF8F7]">
      <FilterController
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        selected="pizza"
        options={options}
        selectedOptin={selectedOptin}
        setSelectedOption={setSelectedOption}
      />
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {pizzaData.length === 0 && (
          <p className="text-gray-500 text-center w-full">No Item Found!</p>
        )}
        {pizzaData?.map((data) => (
          <SingleItem type="pizza" key={data?.id} data={data} />
        ))}
      </div>
    </section>
  );
};
