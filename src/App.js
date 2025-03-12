import React, { useState } from "react";


export default function MyButton() {
  

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  

  function reset(){
    setCount1(0);
    setCount2(0);
    setCount3(0);
    setCount4(0);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">

    <button
      onClick={()=>setCount1(count1 + 1)}
      className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-purple-600 rounded-full shadow-md transition-all duration-300 hover:bg-purple-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
    >
      {count1} 
      سُبْحَانَ اللَّهِ
    </button>
    <button
      onClick={()=>setCount2(count2 + 1)}
      className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-purple-600 rounded-full shadow-md transition-all duration-300 hover:bg-purple-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
    >
      {count2} 
      الْحَمْدُ لِلَّهِ
    </button>
    <button
      onClick={()=>setCount3(count3 + 1)}
      className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-purple-600 rounded-full shadow-md transition-all duration-300 hover:bg-purple-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
    >
      {count3} 
      لَا إِلٰهَ إِلَّا اللَّهُ
    </button>
    <button
      onClick={()=>setCount4(count4 + 1)}
      className="mt-6  px-6 py-3 text-lg font-semibold text-white bg-purple-600 rounded-full shadow-md transition-all duration-300 hover:bg-purple-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
    >
      {count4} 
      اللَّهُ أَكْبَرُ
    </button>
    <button onClick={reset}
    className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-red-600 rounded-full shadow-md transition-all duration-300 hover:bg-red-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
    > return to 0 </button>
    </div>
  );
}


// Render the App

