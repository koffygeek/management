import { useState } from "react";

const ShortBar = () => {
  const [isFullTime, setIsFullTime] = useState(false);
  const [isFreelance, setIsFreelance] = useState(true);

  const isFullTimeHandler = () => {
    setIsFullTime(!isFullTime);
  };

  const isFreelanceHandler = () => {
    setIsFreelance(!isFreelance);
  };
  return (
    <div className="w-full bg-[#fcfcfc] ">
      <div className="py-10 w-[95%] lg:w-[90%] xl:w-[80%] mx-auto flex justify-center items-end md:justify-end  ">
        <ul className="flex space-x-5 items-center">
          <li className="flex items-center space-x-2">
            <span className="text-[1rem] md:text-[1.2rem] font-bold ">
              Freelance
            </span>
            <div className="relative inline-block w-12 h-6">
              <div onClick={isFreelanceHandler} className="relative cursor-pointer inline-block w-12 h-6 rounded-full bg-[#91d327]  "> <span className="absolute w-6 h-6 bg-white rounded-full shadow-md "></span>  </div>
            </div>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-[1rem] md:text-[1.2rem] font-bold ">
              Plein Emploi
            </span>
            <div className="relative inline-block w-12 h-6">
              <div></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShortBar;
