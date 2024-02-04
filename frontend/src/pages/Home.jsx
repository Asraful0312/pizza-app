import Hero from "../components/home/Hero";
import { Pizzas } from "../components/home/Pizzas";
import SoftDrinks from "../components/home/SoftDrinks";
import Sauces from "../components/home/Sauces";

export const Home = () => {
  return (
    <section>
      <Hero />
      <Pizzas />
      <SoftDrinks />
      <Sauces />
    </section>
  );
};
