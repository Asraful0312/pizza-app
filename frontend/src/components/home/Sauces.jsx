import SingleItem from "./SingleItem";
import FilterController from "./FilterController";
import { sauces } from "../../data/data";
import { useState } from "react";

const options = ["spicy", "non spicy"];

const Sauces = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedOptin, setSelectedOption] = useState("All");

  const saucesData = sauces
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
    <section id="Sauces" className="pt-[65px] bg-[#FBF8F7]">
      <FilterController
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        options={options}
        selectedOptin={selectedOptin}
        setSelectedOption={setSelectedOption}
        selected="Sauces"
      />
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {saucesData.length === 0 && (
          <p className="text-gray-500 text-center w-full">No Item Found!</p>
        )}
        {saucesData?.map((data) => (
          <SingleItem type="sauces" key={data?.id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Sauces;
