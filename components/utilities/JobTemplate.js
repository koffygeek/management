import Image from "next/image";
import React from "react";

const JobTemplate = () => {
  return (
    <div className="w-full space-y-3 hidden p-4 mx-auto bg-white shadow-lg rounded-[0.8rem] lg:grid lg:grid-cols-4  ">
      <div className="flex lg:justify-start lg:space-x-4 items-center ">
        <Image
          src="/public/svg/user-profile-svgrepo-com.svg"
          width={500}
          height={500}
          alt="user"
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h4 className="text-[1.2rem] font-bold ">Photographe pro</h4>
          <span className="text-[1rem] opacity-70 ">National geo</span>
        </div>
      </div>

      <div className="flex lg:space-x-3 lg:justify-center lg:items-center">
        <div className="bg-[#83d327] rounded-full p-4 ">
          <Image
            src="/public/svg/money-bag-svgrepo-com.svg"
            width={30}
            height={30}
            alt="bag"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-[1.2rem] font-bold ">12 000 € - 19 000 €</h4>
          <span className="text-[1rem] opacity-70 ">Par mois</span>
        </div>
      </div>

      <div className="flex lg:space-x-3 lg:justify-center lg:items-center">
        <div className="bg-[#83d327] rounded-full p-4 ">
          <Image
            src="/public/svg/money-bag-svgrepo-com.svg"
            width={30}
            height={30}
            alt="bg-mo"
            className="rounded-full"
          />
        </div>
          <div className="flex flex-col">
            <h4 className="text-[1.2rem] font-bold ">Abidjan - Plateau</h4>
            <span className="text-[1rem] opacity-70 ">Localité</span>
          </div>
      </div>
      <div className="lg:text-right">
        <button className="bg-[#83d327] rounded-full px-6 py-4 text-[1.1rem] text-white ">Postuler maintenant</button>
      </div>
    </div>
  );
};

export default JobTemplate;
