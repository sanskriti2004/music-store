import React from "react";
import Card from "./Card";
import { useState } from "react";

const Shop = () => {
  const [count, setCount] = useState(0);
  const checkedButtonStyle =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold box-border py-2 px-4 rounded-4xl";
  const uncheckedButtonStyle =
    "border-blue-100 border-2 px-4 py-2 rounded-4xl box-border hover:border-blue-500";
  return (
    <div>
      <div className="flex items-center justify-center  p-5 m-5 space-x-5">
        <button className={checkedButtonStyle}>All</button>
        <button className={uncheckedButtonStyle}>Pop</button>
        <button className={uncheckedButtonStyle}>Hip-Hop</button>
        <button className={uncheckedButtonStyle}>Jazz</button>
        <button className={uncheckedButtonStyle}>Rock</button>
        <button className={uncheckedButtonStyle}>R&B</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        <Card
          source="./src/assets/ariana-grande-my-everything.webp"
          album="My Everything"
          artist="Ariana Grande"
          genre="Pop"
          price="Rs 1999"
          count={count}
          increment={() => setCount(count + 1)}
          decrement={() => setCount(count - 1)}
        />
        <Card
          source="./src/assets/adele-25.webp"
          album="25"
          artist="Adele"
          genre="Pop"
          price="Rs 1999"
          count={count}
          increment={() => setCount(count + 1)}
          decrement={() => setCount(count - 1)}
        />

        <Card
          source="./src/assets/flower-boy-tylerthecreator.webp"
          album="Flower Boy"
          artist="Tyler the Creator"
          genre="Pop"
          price="Rs 1999"
          count={count}
          increment={() => setCount(count + 1)}
          decrement={() => setCount(count - 1)}
        />
        <Card
          source="./src/assets/Guns-N-Roses-Appetite-for-Destruction.webp"
          album="Appetite for Destruction"
          artist="Guns N Roses"
          genre="Rock"
          price="Rs 1999"
          count={count}
          increment={() => setCount(count + 1)}
          decrement={() => setCount(count - 1)}
        />
        <Card
          source="./src/assets/head-hunters-herbiehancock.webp"
          album="Head Hunters"
          artist="Herbie Hancock"
          genre="Jazz"
          price="Rs 1999"
          count={count}
          increment={() => setCount(count + 1)}
          decrement={() => setCount(count - 1)}
        />
        <Card
          source="./src/assets/highway-to-hell-ACDC.webp"
          album="Highway to Hell"
          artist="AC/DC"
          genre="Rock"
          price="Rs 1999"
          count={count}
          increment={() => setCount(count + 1)}
          decrement={() => setCount(count - 1)}
        />
        <Card
          source="./src/assets/kind-of-blue-milesdavis.webp"
          album="Kind of Blue"
          artist="Miles Davis"
          genre="Jazz"
          price="Rs 1999"
          count={count}
          increment={() => setCount(count + 1)}
          decrement={() => setCount(count - 1)}
        />
        <Card
          source="./src/assets/lana-del-rey-ultraviolence.webp"
          album="Ultraviolence"
          artist="Lana Del Rey"
          genre="Pop"
          price="Rs 1999"
          count={count}
          increment={() => setCount(count + 1)}
          decrement={() => setCount(count - 1)}
        />
        <Card
          source="./src/assets/take-care-drake-drake.webp"
          album="Take Care Drake"
          artist="Drake"
          genre="Hip-Hop"
          price="Rs 1999"
          count={count}
          increment={() => setCount(count + 1)}
          decrement={() => setCount(count - 1)}
        />
        <Card
          source="./src/assets/the-college-dropout-kanye.webp"
          album="The College Dropout"
          artist="Ye"
          genre="Hip-Hop"
          price="Rs 1999"
          count={count}
          increment={() => setCount(count + 1)}
          decrement={() => setCount(count - 1)}
        />
        <Card
          source="./src/assets/the-marchall-mathers-eminem.webp"
          album="The Marshall Mathers LP"
          artist="Eminem"
          genre="Hip-Hop"
          price="Rs 1999"
          count={count}
          increment={() => setCount(count + 1)}
          decrement={() => setCount(count - 1)}
        />
        <Card
          source="./src/assets/Van-Halen-Van-Halen-1978.webp"
          album="Van Halen"
          artist="Van Halen"
          genre="Rock"
          price="Rs 1999"
          count={count}
          increment={() => setCount(count + 1)}
          decrement={() => setCount(count - 1)}
        />
        <Card
          source="./src/assets/weeknd-starboy.webp"
          album="Starboy"
          artist="The Weeknd"
          genre="Pop"
          price="Rs 1999"
          count={count}
          increment={() => setCount(count + 1)}
          decrement={() => setCount(count - 1)}
        />
        <Card
          source="./src/assets/yeezus-kanye.webp"
          album="Yeezus"
          artist="Ye"
          genre="Hip-Hop"
          price="Rs 1999"
          count={count}
          increment={() => setCount(count + 1)}
          decrement={() => setCount(count - 1)}
        />
        <Card
          source="./src/assets/daft-punk-random-access-memories.webp"
          album="Random Access Memories"
          artist="Daft Punk"
          genre="Pop"
          price="Rs 1999"
          count={count}
          increment={() => setCount(count + 1)}
          decrement={() => setCount(count - 1)}
        />
      </div>
    </div>
  );
};

export default Shop;
