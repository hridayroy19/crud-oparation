import { Toaster } from "react-hot-toast";
import "./App.css";
import AddData from "./componets/AddData";
import Tabil from "./componets/Tabil";
import Get from "./componets/Get";

function App() {
  return (
    <>
      <h1 className="text-3xl text-center mt-4 font-mono uppercase text-[#381b50]">
        hello caurd oparation
      </h1>

      <div className=" mt-11 w-[1000px] mx-auto ">
        <AddData></AddData>
        <Toaster />
        <Tabil></Tabil>
        <Get></Get>
        
      </div>
    </>
  );
}

export default App;
