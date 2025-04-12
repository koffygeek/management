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

            <div
              onClick={isFreelanceHandler}
              className={`${
                isFreelance ? "bg-[#91d327]" : "bg-gray-300 "
              } relative cursor-pointer inline-block w-12 h-6 rounded-full `}
            >
              <span
                className={`${
                  isFreelance ? "translate-x-6" : " "
                } absolute w-6 h-6 bg-white rounded-full shadow-md transition-transform `}
              ></span>
            </div>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-[1rem] md:text-[1.2rem] font-bold ">
              Plein Emploi
            </span>
            <div className="relative inline-block w-12 h-6">
              <div
                onClick={isFullTimeHandler}
                className={`${
                  isFullTime ? "bg-[#91d327]" : "bg-gray-300 "
                } relative cursor-pointer inline-block w-12 h-6 rounded-full `}
              >
                <span
                  className={`${
                    isFullTime ? "translate-x-6" : " "
                  } absolute w-6 h-6 bg-white rounded-full shadow-md transition-transform `}
                ></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShortBar;
