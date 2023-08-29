import Image from "next/image";
import ColorPicker from "./components/colorPicker";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center mt-10 font-bold text-4xl underline underline-offset-8">
        Color Picker 
      </div>
      <ColorPicker />
    </div>
  );
}
