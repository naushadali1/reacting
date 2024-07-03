import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
// import Image from './assets/pic.jpg';
import Image2 from "./assets/pic2.png";

function App() {
  const data = [
    { name: "One love", image: Image2, artist: "ALi", added: false },
    {
      name: "One togther",
      image:
        "https://plus.unsplash.com/premium_photo-1673002094146-f14d57d563b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
      artist: "Muhammad",
      added: false,
    },
    {
      name: "Aqqa",
      image:
        "https://images.unsplash.com/photo-1718744765813-a6c9388e3a75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
      artist: "abdia",
      added: false,
    },
    {
      name: "malanag",
      image:
        "https://images.unsplash.com/photo-1718919591308-331854adac35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
      artist: "Hassan",
      added: false,
    },
  ];

  const [songData, setSongData] = useState(data);
  const handleClick = (Index) => {
    setSongData((prev) => {
      return prev.map((elem, itemIndex) => {
        if (itemIndex === Index) {
          return { ...elem, added: !elem.added };
        } else {
          return elem;
        }
      });
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-200 ">
        <Navbar data={songData} />
        <div className="px-20 flex gap-10 mt-10 flex-wrap">
          {songData.map((obj, index) => (
            <Card
              data={obj}
              key={index}
              index={index}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
