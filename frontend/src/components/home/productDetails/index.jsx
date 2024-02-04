import { toppings } from "../../../data/data";
import Topping from "./Topping";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProductDetails = ({ setOpen, type, data }) => {
  const { description, image, metaInfo, name, price, id } = data || {};
  const [selectedTopping, setSelectedToppings] = useState([]);
  const [size, setSize] = useState("");
  const [totalPrice, setTotalPrice] = useState(price);
  const [validate, setValidate] = useState("");
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const allToppings = toppings?.filter((item) => item?.productType === type);

  //select toppings
  const handleSelect = (id) => {
    const alreadyHave = selectedTopping?.includes(id);
    if (alreadyHave) {
      const updatedToppings = selectedTopping?.filter(
        (topping) => topping !== id
      );
      setSelectedToppings(updatedToppings);
    } else {
      setSelectedToppings([...selectedTopping, id]);
    }
  };

  //calculate total price
  useEffect(() => {
    let updatedPrice = price;
    selectedTopping.forEach((id) => {
      toppings.map((item) => {
        if (item?.id === id) {
          updatedPrice += item?.price;
        }
      });
    });
    setTotalPrice(updatedPrice);
  }, [price, selectedTopping]);

  //add item to the cart

  const handleAddToCart = () => {
    const toppings = allToppings.filter((item) =>
      selectedTopping.includes(item?.id)
    );

    // const existingItem = cart?.find((item) => item?.id === id);

    // if (existingItem) {
    //   console.log(totalPrice, price);

    //   const newCartItems = cart?.map((item) => {
    //     if (item?.id === id && totalPrice !== price) {
    //       return {
    //         ...item,
    //         quantity: item?.quantity + 1,
    //       };
    //     } else {
    //       console.log("i", item);
    //       return {
    //         ...item,
    //         quantity: 1,
    //       };
    //     }
    //   });
    //   setCart(newCartItems);
    // } else {
    //   setCart([
    //     {
    //       ...data,
    //       price: totalPrice,
    //       size: size,
    //       quantity: 1,
    //       toppings,
    //     },
    //     ...cart,
    //   ]);
    // }
    console.log(selectedTopping);
    setCart([
      {
        ...data,
        price: totalPrice,
        size: size,
        quantity: 1,
        toppings,
      },
      ...cart,
    ]);
    toast.success("item added to cart");
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);
  console.log("add", cart);

  return (
    <div
      onClick={() => setOpen(false)}
      className="fixed w-full inset-0 h-screen flex items-center justify-center bg-black/10"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[10px] w-[400px]  md:w-[600px] lg:w-[800px]  xl:w-[900px]  grid grid-cols-1 md:grid-cols-2 overflow-hidden"
      >
        <div className="px-10 flex items-center justify-center h-full w-full">
          <img src={`/images/${image}`} alt="image" />
        </div>
        <div className="px-5 py-6 bg-[#F8F8F8]">
          <h1 className="font-bold">{name}</h1>
          <p className="text-dark text-xs mb-8">{description}</p>
          {validate && (
            <p className="text-red-500 text-xs mb-2">Pleasr Select a size!</p>
          )}
          {/* product szies */}
          <ul className="flex item-center gap-[10px] mb-10">
            {metaInfo?.map((item) => (
              <li
                key={item}
                onClick={() =>
                  setSize(size === item ? "" : item, setValidate(false))
                }
                className={`cursor-pointer rounded-lg text-sm bg-grey text-black flex items-center justify-center p-2 hover:bg-primary hover:text-white transition-all duration-200 ${
                  size === item ? "bg-primary text-white" : "bg-grey text-black"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
          {allToppings?.length > 0 && (
            <div className="">
              <h1>Extra toppings</h1>
              {/* topping cards */}
              <div className="mt-4 grid grid-cols-2 rounded-[10px] md:grid-cols-3 gap-3">
                {allToppings?.map((data) => (
                  <Topping
                    selected={selectedTopping?.includes(data?.id)}
                    handleSelect={handleSelect}
                    key={data?.id}
                    data={data}
                  />
                ))}
              </div>
            </div>
          )}
          <div className="flex items-center justify-between mt-8">
            <h1 className="text-heading font-bold">${totalPrice}</h1>
            {/* click on the plus icon set item to the cart */}
            <div
              onClick={() =>
                size === "" && type !== "sauces"
                  ? setValidate(true)
                  : handleAddToCart()
              }
              className="bg-primary p-2 flex cursor-pointer items-center justify-center rounded-full w-8 h-8"
            >
              <h1 className="text-white font-bold text-lg">+</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
