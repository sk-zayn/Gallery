import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=3&limit=30"
    );
    setUserData(response.data);
    console.log(response.data);
  };

  let printUserData = "Loading....";

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return<div className="rounded-2xl  h-50 w-50">
        <img className="h-full w-full object-cover rounded-2xl" src={elem.download_url} alt="" />
        </div>
      ;
    });
  }

  return (
    <div className="p-4 h-screen overflow-auto  bg-black text-white">
      <button
        className="bg-pink-400 p-4 active:scale-95 cursor-pointer rounded-2xl font-bold text-xl text-white"
        onClick={getData}
      >
        Get data
      </button>
      <div className="flex flex-wrap gap-4 ">
        {printUserData}
      </div>
    </div>
  );
};

export default App;
