import { useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="space-y-6">
      <h2 className="text-2xl">All Caterogy</h2>
      {categories.map((category) => (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "block ml-4 font-medium text-xl bg-gray-200"
              : "block ml-4 font-medium text-xl"
          }
          key={category.id}
          to={`/category/${category.id}`}
        >
          {category.name}
        </NavLink>
      ))}

      <div className="space-y-3">
        <div className="flex flex-col max-w-lg space-y-6 overflow-hidden ">
          <div>
            <img src={img1} alt="" className="mb-4 dark:bg-gray-500" />
            <h2 className="mb-1 text-xl font-semibold">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
          </div>
          <div className="flex flex-wrap gap-14">
            <h2 className="font-medium text-lg">Sports</h2>
            <div className="flex items-center space-x-2 text-base dark:text-gray-600">
              <div className="text-lg"><CiCalendar /></div>
              <p>Jan 4, 2022</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-lg space-y-6 overflow-hidden ">
          <div>
            <img src={img2} alt="" className="mb-4 dark:bg-gray-500" />
            <h2 className="mb-1 text-xl font-semibold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
          </div>
          <div className="flex flex-wrap  gap-14">
            <h2 className="font-medium text-lg">Sports</h2>
            <div className="flex items-center space-x-2 text-base dark:text-gray-600">
              <div className="text-lg"><CiCalendar /></div>
              <p>Jan 4, 2022</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-lg space-y-6 overflow-hidden ">
          <div>
            <img src={img3} alt="" className="mb-4 dark:bg-gray-500" />
            <h2 className="mb-1 text-xl font-semibold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
          </div>
          <div className="flex flex-wrap  gap-14">
            <h2 className="font-medium text-lg">Sports</h2>
            <div className="flex items-center space-x-2 text-base dark:text-gray-600">
              <div className="text-lg"><CiCalendar /></div>
              <p>Jan 4, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
