import React from "react";
import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";

function Youtube() {
  // const [isLoading, setLoading] = useState(true);
  // const [youtube , setYoutube] = useState(false)

  // // Simulate loading with a delay
  // useEffect(() => {

  //    if(setLoading === true){
  //     setYoutube(false)
  //    } else if(setLoading === false){
  //     setYoutube(true)
  //    }
  //  // Adjust the delay as needed

  // }, []);

  return (
    <div className=" h-auto">
      <div>
        <div className="w-auto h-auto">
          <h2 className=" font-mono mb-3 mx-6 bg-gray-700 text-white p-10   text-left text-[20px] mt-9  sm:text-center lg:text-4xl">
            SOME OF OUR YOUTUBE SERMONS
          </h2>
        </div>
        <div className="lg:m-[10rem] sm:m-[5rem] m-10">
          <div className="elfsight-app-82dac7dc-ec9a-4eaa-bb66-3b7624d2fc1c w-[15rem] mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default Youtube;
