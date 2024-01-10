import { useEffect, useState } from "react";
import CoffeeCard from "../../../Components/CoffeeCard/CoffeeCard";

const AllCoffee = () => {
  const [coffees, setCoffee] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/coffee")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCoffee(data);
      });
  }, []);
  return (
    <div>
      <div className="text-center">
        <h4>--- Sip & Savor ---</h4>
        <h2 className="text-2xl font-bold font-rancho">Our Popular Products</h2>
        <button className="font-rancho   bg-[#E3B577] border-2 mt-2 border-black rounded-md p-1">
          Add Coffee
        </button>
      </div>
      <div className="grid md:grid-cols-2  space-y-6   mt-7 m-10  ">
        {coffees &&
          coffees?.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              setCoffee={setCoffee}
              coffee={coffee}
              coffees={coffees}
            ></CoffeeCard>
          ))}
      </div>
    </div>
  );
};

export default AllCoffee;
