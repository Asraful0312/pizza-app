import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="bg-white pb-[144px]">
      <div className="container grid items-center grid-cols-1 md:grid-cols-2 gap-[60px]">
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-heading font-extrabold text-[64px] leading-[77px]">
            Get yummy pizza in <span className="text-primary">30 min</span>
          </h1>
          <p className="text-3xl">
            No need to pay if, order took <br /> more that 30 min
          </p>
          <div>
            <button className="flex border border-primary hover:bg-transparent transition-all duration-200 hover:text-dark items-center rounded-[20px] gap-4 text-3xl font-medium text-white py-5 px-7 bg-primary">
              Order Now{" "}
              <span>
                <FaArrowRightLong />
              </span>{" "}
            </button>
          </div>
        </div>
        <div>
          <img src="/images/pizza.png" alt="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
