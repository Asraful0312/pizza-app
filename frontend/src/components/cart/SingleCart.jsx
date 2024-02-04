import { useEffect, useState } from "react";

const SingleCart = ({ data, setCartItems, cartItems }) => {
  const { id, name, size, price, image, quantity, totalPrice } = data || {};
  const [totalQuantity, setTotalQuantity] = useState(quantity);
  const [updatedPrice, setUpdatedPrice] = useState(price);

  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    const updateQunatity = (_value, id) => {
      const newCartItems = cartItems.map((item) => {
        if (item?.id === id) {
          return {
            ...item,
            quantity: Number(_value),
            totalPrice: _value * item?.price,
          };
        } else {
          return item;
        }
      });
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    };
    if (Number(totalQuantity) !== quantity) {
      updateQunatity(Number(totalQuantity), id, updatedPrice);
    }
    setCartItems(cartItems);
  }, [
    cartItems,
    id,
    price,
    quantity,
    setCartItems,
    totalQuantity,
    updatedPrice,
  ]);

  useEffect(() => {
    if (totalPrice !== price) {
      setUpdatedPrice(totalQuantity * price);
    }
  }, [price, totalPrice, totalQuantity]);

  return (
    <div className="flex items-center justify-between  py-4 border-b">
      <div className="flex gap-3 items-center">
        <img width="100px" src={`/images/${image}`} alt="cartImage" />
        <div>
          <h1>{name}</h1>
          <p className="text-sm text-gray-400">
            <span>Classic</span> |{" "}
            <span>
              {size === "S"
                ? "Small"
                : size === "M"
                ? "Medium"
                : size === "L"
                ? "Large"
                : size}
            </span>
          </p>
          <h1>${price}</h1>
        </div>
      </div>
      <div className="flex justify-between gap-3 w-[30%]">
        <div className=" ">
          <input
            onChange={(e) => setTotalQuantity(parseInt(e.target.value, 10))}
            className="w-16 rounded-md bg-grey px-3 py-2"
            type="number"
            value={totalQuantity}
            min="1"
          />
        </div>
        <h1 className="text-xl cursor-pointer">X</h1>
      </div>
      <div>
        <h1>${updatedPrice}</h1>
      </div>
    </div>
  );
};

export default SingleCart;
