import React, { useState } from "react";
import Card from "./Card";

const Shop = () => {
  const [genres, setGenres] = useState([
    ["All", true],
    ["Pop", false],
    ["Hip-Hop", false],
    ["Jazz", false],
    ["Rock", false],
  ]);

  const [counts, setCounts] = useState(Array(15).fill(0)); // Adjust count array size

  const checked =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-4xl";
  const unChecked =
    "border-blue-100 border-2 px-4 py-2 rounded-4xl hover:border-blue-500";

  const setGenre = (selectedGenre) => {
    setGenres((prevGenres) =>
      prevGenres.map(([name]) => [name, name === selectedGenre])
    );
  };

  const increment = (index) => {
    setCounts((prev) => {
      const newCounts = [...prev];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  const decrement = (index) => {
    setCounts((prev) => {
      const newCounts = [...prev];
      newCounts[index] = Math.max(0, newCounts[index] - 1);
      return newCounts;
    });
  };

  const info = [
    {
      source: "./src/assets/ariana-grande-my-everything.webp",
      album: "My Everything",
      artist: "Ariana Grande",
      genre: "Pop",
      price: "Rs 1999",
    },
    {
      source: "./src/assets/adele-25.webp",
      album: "25",
      artist: "Adele",
      genre: "Pop",
      price: "Rs 1999",
    },
    {
      source: "./src/assets/flower-boy-tylerthecreator.webp",
      album: "Flower Boy",
      artist: "Tyler the Creator",
      genre: "Hip-Hop",
      price: "Rs 1999",
    },
    {
      source: "./src/assets/Guns-N-Roses-Appetite-for-Destruction.webp",
      album: "Appetite for Destruction",
      artist: "Guns N Roses",
      genre: "Rock",
      price: "Rs 1999",
    },
    {
      source: "./src/assets/head-hunters-herbiehancock.webp",
      album: "Head Hunters",
      artist: "Herbie Hancock",
      genre: "Jazz",
      price: "Rs 1999",
    },
    {
      source: "./src/assets/highway-to-hell-ACDC.webp",
      album: "Highway to Hell",
      artist: "AC/DC",
      genre: "Rock",
      price: "Rs 1999",
    },
    {
      source: "./src/assets/kind-of-blue-milesdavis.webp",
      album: "Kind of Blue",
      artist: "Miles Davis",
      genre: "Jazz",
      price: "Rs 1999",
    },
    {
      source: "./src/assets/lana-del-rey-ultraviolence.webp",
      album: "Ultraviolence",
      artist: "Lana Del Rey",
      genre: "Pop",
      price: "Rs 1999",
    },
    {
      source: "./src/assets/take-care-drake-drake.webp",
      album: "Take Care",
      artist: "Drake",
      genre: "Hip-Hop",
      price: "Rs 1999",
    },
    {
      source: "./src/assets/the-college-dropout-kanye.webp",
      album: "The College Dropout",
      artist: "Ye",
      genre: "Hip-Hop",
      price: "Rs 1999",
    },
    {
      source: "./src/assets/the-marchall-mathers-eminem.webp",
      album: "The Marshall Mathers LP",
      artist: "Eminem",
      genre: "Hip-Hop",
      price: "Rs 1999",
    },
    {
      source: "./src/assets/Van-Halen-Van-Halen-1978.webp",
      album: "Van Halen",
      artist: "Van Halen",
      genre: "Rock",
      price: "Rs 1999",
    },
    {
      source: "./src/assets/weeknd-starboy.webp",
      album: "Starboy",
      artist: "The Weeknd",
      genre: "Pop",
      price: "Rs 1999",
    },
    {
      source: "./src/assets/yeezus-kanye.webp",
      album: "Yeezus",
      artist: "Ye",
      genre: "Hip-Hop",
      price: "Rs 1999",
    },
    {
      source: "./src/assets/daft-punk-random-access-memories.webp",
      album: "Random Access Memories",
      artist: "Daft Punk",
      genre: "Pop",
      price: "Rs 1999",
    },
  ];

  const selectedGenre = genres.find(([_, isChecked]) => isChecked)[0];
  const filteredInfo =
    selectedGenre === "All"
      ? info
      : info.filter((item) => item.genre === selectedGenre);

  return (
    <div>
      <div className="flex items-center justify-center p-5 m-5 space-x-5">
        {genres.map(([name, isChecked]) => (
          <button
            onClick={() => setGenre(name)}
            key={name}
            className={isChecked ? checked : unChecked}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredInfo.map((item, index) => (
          <Card
            key={item.album}
            source={item.source}
            album={item.album}
            artist={item.artist}
            genre={item.genre}
            price={item.price}
            count={counts[index]}
            increment={() => increment(index)}
            decrement={() => decrement(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
