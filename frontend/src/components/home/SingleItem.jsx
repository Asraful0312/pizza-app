import { useState } from "react";
import ProductDetails from "./productDetails";

const SingleItem = ({ data, type }) => {
  const { description, image, metaInfo, name, price } = data || {};
  const [open, setOpen] = useState(false);
  const [quatity, setQuantity] = useState(0)

  return (
    <>
      <div className="px-8 py-4 bg-white rounded-lg">
        <img className="" src={`/images/${image}`} alt="image" />
        <h1 className="font-bold">{name}</h1>
        <p className="text-dark text-xs">{description}</p>
        <div className="mt-5 mb-6">
          <ul className="flex item-center gap-[10px]">
            {metaInfo &&
              metaInfo?.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer rounded-lg text-sm bg-grey text-black flex items-center justify-center p-2 hover:bg-primary hover:text-white transition-all duration-200 "
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-heading font-bold">${price}</h1>
          {/* click Plus icon to open the product details modal */}
          <div
            onClick={() => setOpen(true)}
            className="bg-primary p-2 flex cursor-pointer items-center justify-center rounded-full w-8 h-8"
          >
            <h1 className="text-white font-bold text-lg">+</h1>
          </div>
        </div>
      </div>
      {open && <ProductDetails quatity={quatity} setQuantity={setQuantity} data={data} type={type} setOpen={setOpen} />}
    </>
  );
};

export default SingleItem;
