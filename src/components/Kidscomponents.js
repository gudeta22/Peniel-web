import React from "react";
import person1 from "../assets/images/kids.jpg";
import person2 from "../assets/images/kids2.jpg";
import person5 from '../assets/images/kidsnew.jpg';
import person6 from '../assets/images/kids6.jpg';
import '../index.css';

function Kidscomponents() {
  const experties = [
    {
      id: 1,
      src: person1,
      name: "Purpose",
      role: `Spiritual purpose for kids: Nurturing a sense of wonder, values, compassion, and connection to a higher purpose for holistic well-being.`,
    },
    {
      id: 2,
      src: person2,
      name: "Purpose",
      role: `Spiritual purpose for kids: Nurturing a sense of wonder, values, compassion, and connection to a higher purpose for holistic well-being.`,
    },
    {
      id: 5,
      src: person5,
       name: "Purpose",
      role: `Spiritual purpose for kids: Nurturing a sense of wonder, values, compassion, and connection to a higher purpose for holistic well-being.`,
    },
    {
      id: 5,
      src: person6,
       name: "Purpose",
      role: `Spiritual purpose for kids: Nurturing a sense of wonder, values, compassion, and connection to a higher purpose for holistic well-being.`,
    },
  ];

  return (
    <div className="container m-auto mt-[2rem] sm:flex">
      <div className="sm:text-center ">
        <div className="sm:m-auto sm:w-[500px]">
          <div className="w-auto h-auto">
            <h2 className="font-mono mb-3 text-left text-[18px] mt-9 text-[#1d2434] sm:text-center lg:text-4xl ">
              NURTURING KIDS THE KINGDOM OF GOD
            </h2>
          </div>
        </div>

        <div className="lg:mx-10 sm:m-auto sm:w-[450px] items-start justify-center sm:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 lg:m-auto gap-[16px] md:w-[690px] lg:w-auto lg:my-14 md:my-14 m-auto lg:gap-10  ">
          {experties.map((expert, id) => (
            <div
              key={id}
              className="group lg:-mb-24 mb-10 rounded-lg relative overflow-hidden bg-cover"
            >
              <div className="lg:h-[25rem] w-auto relative">
                <img
                  src={expert.src}
                  alt={`img-${id}`}
                  className="w-full rounded-lg h-[20rem] object-cover transition duration-500 hover:tra"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-black bg-opacity-50 text-white text-center h-[20rem]">
                  <div>
                    <h3 className="text-3xl font-mono  font-semibold">{expert.name}</h3>
                    <p className="text-2xl">{expert.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Kidscomponents;
