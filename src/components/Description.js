import React from "react";
import telegram from '../assets/images/telegram (1).png'
import facebook from '../assets/images/facebook.png'
import youtube from "../assets/images/youtube (1).png";
import tiktok from '../assets/images/tiktok (1).png'


import "../index.css";
function Description() {
  return (
    <div className="container m-auto">
      <div className="grid grid-cols-1  lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 md:space-x-2 md:text-lg space-y-8 justify-center fontstyle text-lg my-10 ">
        <div className="text-white lg:w-[95%] lg:mx-2  h-auto ">
          <div className="p-[1rem]  lg:my-8  rounded-xl  ">
            <span className="flex  lg:w-auto justify-center lg:mb-10   font-bold">
              <h2 className="my-4 lg:text-4xl text-slate-950 font-bold">
                ABOUT PASTOR KINFEGEBREL MATHEWOS
              </h2>
            </span>
            <p className="lg:text-lg text-sm space-y-[5px] fontstyle  text-[#1d2434]">
              Apostle Guillermo Maldonado is the senior pastor and founder of
              King Jesus International Ministry (KJM) in Miami, Florida, based
              on the Word of God, the resurrection of Jesus Christ, the moving
              of the Holy Spirit, prayer, and worship. The building of kingdom
              leaders and the visible manifestations of God’s supernatural power
              distinguish this ministry. KJM is a multicultural church,
              considered one of the fastest-growing in the United States, with a
              membership that exceeds 25 thousand people, including the main
              church in Miami, its branches, daughter churches, and online
              church. Amid a visitation, Apostle Maldonado received the specific
              assignment to bring the supernatural power of God to this
              generation, and he fulfilled this task around the world. He is the
              spiritual father to more than 450 churches in 70 countries,
              including the United States, Latin America, Europe, Africa, Asia,
              and New Zealand, which form the Supernatural Global Network (SGN),
              representing more than 706,000 people speaking 16 languages. He is
              also the founder of King Jesus University (KJU).{" "}
            </p>
            <p className="lg:text-lg text-sm  text-[#1d2434]">
              Apostle Guillermo Maldonado is the senior pastor and founder of
              King Jesus International Ministry (KJM) in Miami, Florida, based
              on the Word of God, the resurrection of Jesus Christ, the moving
              of the Holy Spirit, prayer, and worship. The building of kingdom
              leaders and the visible manifestations of God’s supernatural power
              distinguish this ministry. KJM is a multicultural church,
              considered one of the fastest-growing in the United States, with a
              membership that exceeds 25 thousand people, including the main
              church in Miami, its branches, daughter churches, and online
              church. Amid a visitation, Apostle Maldonado received the specific
              assignment to bring the supernatural power of God to this
              generation, and he fulfilled this task around the world. He is the
              spiritual father to more than 450 churches in 70 countries,
              including the United States, Latin America, Europe, Africa, Asia,
              and New Zealand, which form the Supernatural Global Network (SGN),
              representing more than 706,000 people speaking 16 languages. He is
              also the founder of King Jesus University (KJU).{" "}
            </p>
              <p className="lg:text-lg text-sm  text-[#1d2434]">
              Apostle Guillermo Maldonado is the senior pastor and founder of
              King Jesus International Ministry (KJM) in Miami, Florida, based
              on the Word of God, the resurrection of Jesus Christ, the moving
              of the Holy Spirit, prayer, and worship. The building of kingdom
              leaders and the visible manifestations of God’s supernatural power
              distinguish this ministry. KJM is a multicultural church,
              considered one of the fastest-growing in the United States, with a
              membership that exceeds 25 thousand people, including the main
              church in Miami, its branches, daughter churches, and online
              church. Amid a visitation, Apostle Maldonado received the specific
              assignment to bring the supernatural power of God to this
              generation, and he fulfilled this task around the world. He is the
              spiritual father to more than 450 churches in 70 countries,
              including the United States, Latin America, Europe, Africa, Asia,
              and New Zealand, which form the Supernatural Global Network (SGN),
              representing more than 706,000 people speaking 16 languages. He is
              also the founder of King Jesus University (KJU).{" "}
            </p>
          </div>
          <div className="p-[1rem] lg:my-24  bg-white  rounded-xl lg:h-[28rem] lg:w-[95%] ">
            <iframe
              src="https://www.youtube.com/embed/eR8LLUxArWU" // Replace with your desired YouTube video's embed URL
              width="900"
              height="500"
              title="Embedded YouTube Video"
              className="lg:-my-20 lg:mx-28 md:p-5 "
            ></iframe>
          </div>
          <div>
            <div className=" flex flex-col items-center w-full">
              <div className="bg-black lg:p-4 rounded-lg">
                <button type="button" className=" text-white  cursor-pointer font-bold">Send Invitation</button>
              </div>
              <div className="flex justify-center lg:gap-8 lg:p-16 w-auto ">
                <a href="https://youtube.com/@penieltv-addis2025?si=EL26reQGscleg55T" target="_black" rel="noreferrer">
                <div className="lg:w-10 lg:h-10">
                  <img src={youtube} alt="" />
                </div>
                </a>
                <a href="https://t.me/Kinfegabriell" target="_blank" rel="noreferrer">
                 <div className="lg:w-10 lg:h-10">
                  <img src={telegram} alt="" />
                </div>
                </a>
                <a href="https://www.tiktok.com/@penielchurchtv" target="_blank" rel="noreferrer">
                 <div className="lg:w-10 lg:h-10">
                  <img src={tiktok} alt="" />
                </div>
                </a>
                <a href="https://facebook.com/Wokape/?ref=bookmarks" target="_blank" rel="noreferrer">
                <div className="lg:w-10 lg:h-10">
                  <img src={facebook} alt="" />
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
