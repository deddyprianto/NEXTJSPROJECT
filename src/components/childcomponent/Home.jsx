import React from "react";
import Gradient from "rgt";
import {
  Diamond,
  Donut,
  SquareDonut,
  CircleGrid,
  Circle,
} from "react-awesome-shapes";

const Home = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center mt-10">
        <h1 className="text-5xl lg:text-6xl text-center  text-[#C3DAFE] ">
          Find Your Match <br />
          <span className="text-6xl lg:text-8xl font-bold">
            <Gradient dir="left-to-right" from="#7063E4" to="#E4436E">
              Favorite Football{" "}
            </Gradient>
          </span>{" "}
          <br />
          Schedule here
        </h1>
        <Circle
          color="#FCC289"
          size={["50px", "150px", "180px", "180px"]}
          zIndex={2}
          left={["-7%", "10%", "10%", "-7%"]}
          top={["10%", "10%", "10%", "30%"]}
        />
        <Diamond
          color="#FCB472"
          size={["10px", "100px", "100px", "50px"]}
          zIndex={2}
          left={["5%", "10%", "10%", "5%"]}
          top={["5%", "15%", "40%", "10%"]}
        />
        <Diamond
          color="#FCB472"
          size={["30px", "60px", "60px", "60px"]}
          zIndex={2}
          right={["5%", "20%", "20%", "1%"]}
          bottom={["5%", "15%", "30%", "12%"]}
        />
        <Donut
          color="#C084FC"
          size={["100px", "100px", "100px", "150px"]}
          width="20px"
          zIndex={2}
          left={["-15%", "26%", "30%", "-5%"]}
          bottom={["0", "1%", "1%", "5%"]}
        />
        <Circle
          color="#F58AC2"
          size={["40px", "150px", "180px", "180px"]}
          zIndex={2}
          right="0%"
          bottom={["15%", "4%", "30%", "20%"]}
        />
        <CircleGrid
          right="0%"
          top="10%"
          position="absolute"
          color="#C3DAFE"
          size={["70px", "150px", "180px", "180px"]}
          zIndex={2}
        />
      </div>
      <div className="w-full flex justify-center  items-center h-1/2">
        <button className="rounded-lg text-gray-50 w-32 h-10 bg-sky-500">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Home;
