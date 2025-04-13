import Image from "next/image";
import React from "react";

const JobTemplate = () => {
  return (
    <div className="w-full p-4 mx-auto bg-white shadow-lg rounded-[0.8rem] ">
      <div>
        <Image
          src = {"/public/svg/user2.svg"}
          alt="user1"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default JobTemplate;
