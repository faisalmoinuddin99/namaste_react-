import { useEffect, useState } from "react";

const useFetchRestaurant = () => {
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

    console.log(dataToJson?.data?.cards[2]?.data?.data?.cards);
    // Optional Chaining
    setListOfRestaurant(dataToJson?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurant(dataToJson?.data?.cards[2]?.data?.data?.cards);
  };

  return {
    listOfRestaurant,
    setListOfRestaurant,
    searchRestaurant,
    setSearchRestaurant,
    filterRestaurant,
    setFilterRestaurant,
  };
};

export default useFetchRestaurant;
