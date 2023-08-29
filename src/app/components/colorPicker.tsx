"use client";
import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("");
  const [text, setText] = useState("");

  return (
    <div
      className="w-full h-screen duration-200 mt-5 "
      style={{ background: color  }}
    > <span className="flex justify-center items-center text-3xl md:text-7xl font-serif font-bold pt-10 md:pt-24 text-white">{text}</span>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-400 px-3 py-2 rounded-3xl">
          <button
          
            onClick={() => {setColor("Red"), setText("Red")}}
            
            className="outline-none px-4 py-1 rounded-full shadow-md text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => {setColor("Green"), setText("Green")}}
            className="outline-none px-4 py-1 rounded-full shadow-md text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => {setColor("Blue"), setText("Blue")}}
            className="outline-none px-4 py-1 rounded-full shadow-md text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => {setColor("Olive"), setText("Olive")}}
            className="outline-none px-4 py-1 rounded-full shadow-md text-white"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
          onClick={()=>{setColor("Gray"), setText("Gray")}}
            className="outline-none px-4 py-1 rounded-full shadow-md text-white"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
              onClick={() => {setColor("Yellow"), setText("Yellow")}}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => {setColor("Pink"), setText("Pink")}}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => {setColor("Purple"), setText("Purple")}}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={() => {setColor("Lavender"), setText("Lavender")}}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "lavender" }}
            >
              Lavender
            </button>
            <button
              onClick={() => {setColor("White"), setText("White")}}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "white" }}
            >
              White
            </button>
            <button
              onClick={() => {setColor("Black"), setText("Black")}}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
