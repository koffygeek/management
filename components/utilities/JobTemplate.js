import React from "react";
import Image from "next/image";

const JobTemplate = () => {
  return (
    <div className="w-full space-y-3 hidden p-4 mx-auto bg-white shadow-lg rounded-[0.8rem] lg:grid lg:grid-cols-4  ">
      <div className="flex lg:justify-start lg:space-x-4 items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>

        <div className="flex flex-col">
          <h4 className="text-[1.2rem] font-bold ">Photographe pro</h4>
          <span className="text-[1rem] opacity-70 ">National geo</span>
        </div>
      </div>

      <div className="flex lg:space-x-3 lg:justify-center lg:items-center">
        <div className="bg-[#83d327] rounded-full p-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[1.2rem] font-bold ">12 000 € - 19 000 €</h4>
          <span className="text-[1rem] opacity-70 ">Par mois</span>
        </div>
      </div>

      <div className="flex lg:space-x-3 lg:justify-center lg:items-center">
        <div className="bg-[#83d327] rounded-full p-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[1.2rem] font-bold ">Abidjan - Plateau</h4>
          <span className="text-[1rem] opacity-70 ">Localité</span>
        </div>
      </div>
      <div className="lg:text-right">
        <button className="bg-[#83d327] rounded-full px-6 py-4 text-[1.1rem] text-white ">
          Postuler maintenant
        </button>
      </div>
    </div>
  );
};

export default JobTemplate;
