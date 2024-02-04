const Topping = ({ data, handleSelect, selected }) => {
  const { id, productType, image, name, price } = data || {};

  return (
    <div
      onClick={() => handleSelect(id)}
      className={`flex justify-center flex-col gap-1 bg-white rounded-[10px] items-center py-2 relative cursor-pointer border ${
        selected ? "border-primary" : "border-transparent"
      }`}
    >
      <img className="md:w-16" src={`/images/${image}`} alt="topping" />
      <span className="text-sm">{name}</span>
      <h1>${price}</h1>
      {selected && (
        <img
          className="absolute right-1 top-1"
          src="/images/icons/check.svg"
          alt=""
        />
      )}
    </div>
  );
};

export default Topping;
