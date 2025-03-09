import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("Counter")
    return savedCount ? JSON.parse(savedCount) : 0
    
  });

  useEffect(()=> {
    localStorage.setItem("Counter", JSON.stringify(count))
  },[count])
  return (
    <div className="flex gap-3 text-2xl">
      <button
        className="w-[40px] h-[40px] flex focus:outline-red-600  hover:border-red-600 justify-center items-center border-[1px] border-zinc-300 rounded-full hover:cursor-pointer"
        onClick={() => setCount(prevState => prevState > 0 ? prevState - 1 : prevState)}
      >
        -
      </button>
      <p>{count}</p>
      <button
        className="w-[40px] h-[40px] flex focus:outline-green-600 hover:border-green-600 justify-center items-center border-[1px] border-zinc-300 rounded-full hover:cursor-pointer"
        onClick={() => setCount(prevState => prevState + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
