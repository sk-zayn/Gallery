import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=24`,
    );
    setUserData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
      getData()
  }, [index])


  let printUserData =<h3 className=" text-center text-gray-300 text-sm">Loading....</h3>;

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="rounded-2xl overflow-hidden  h-46 w-52">
            <img
              className="h-full w-full object-cover "
              src={elem.download_url}
              alt=""
            />
          </div>
          <h3 className="pt-2 pb-5 font-semibold text-center">{elem.author}</h3>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="p-4 h-screen overflow-auto  bg-black text-white ">
      <div className="flex flex-wrap gap-4 pl-11 pt-8">{printUserData}</div>
      <div className="flex justify-center items-center gap-5 p-4">
        <button className="bg-amber-400 text-black rounded px-4 py-2 text-sm cursor-pointer active:scale-95  font-semibold"
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
          }

        }}
        >Prev</button>
        <div>page {index}</div>

        <button className="bg-amber-400 text-black rounded px-4 py-2 text-sm cursor-pointer active:scale-95  font-semibold"
        onClick={()=>{
            setIndex(index+1)
        }}
        >Next</button>
      </div>
    </div>
  );
};

export default App;
