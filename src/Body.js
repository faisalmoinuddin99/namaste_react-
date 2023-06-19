import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  console.log("Body called");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0749777&lng=72.88477790000002&page_type=DESKTOP_WEB_LISTING"
    );

    const dataToJson = await data.json();

    console.log(dataToJson.data.cards[2].data.data.cards);
    // Optional Chaining
    setListOfRestaurant(dataToJson?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurant(dataToJson?.data?.cards[2]?.data?.data?.cards);
  };

  // Conditional Rendering
  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer />;
  // }

  // Conditional Rendering using Ternary Operator
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-bar"
          value={searchRestaurant}
          onChange={(e) => setSearchRestaurant(e.target.value)}
        />
        <button
          className="btn-search"
          onClick={() => {
            console.log(searchRestaurant);

            const afterSearchRestaurant = listOfRestaurant.filter((res) =>
              res.data.name
                .toLowerCase()
                .includes(searchRestaurant.toLowerCase())
            );

            setFilterRestaurant(afterSearchRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter-btn">
        <button
          onClick={() => {
            const filterList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );

            setFilterRestaurant(filterList);
          }}
        >
          Filter By Avg
        </button>
      </div>

      <div className="restaurant-container">
        {/* {console.log(listOfRestaurant[0].data.avgRating)} */}
        {
          // config driven Ui
          // not using keys (not acceptable) <<<<<< index as key <<<<<<<<<<<<<<<<<<< unique id (best practice)
          filterRestaurant.map((restaurant) => (
            <Link
              key={restaurant.data.id}
              to={"/restaurants/" + restaurant.data.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        }
      </div>
      {/* <div className="side-practice">
        {listOfFootballers.map((player) => (
          <SidePractice key={player.id} data={player} />
        ))}
      </div> */}
    </div>
  );
};

export default Body;
