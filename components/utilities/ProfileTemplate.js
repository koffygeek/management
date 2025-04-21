import Link from "next/link";
import React from "react";
import Image from "next/image";

const ProfileTemplate = () => {
  return (
    <Link
      href={"/details/profil/id"}
      className="p-6 bg-white shadow-lg rounded-[0.8rem] flex flex-col items-center "
    >
      <Image
        src={"/Images/users/userprofile.png"}
        alt="image"
        width={100}
        height={100}
        className=" rounded-full "
      />
      <span className="mx-2 bg-[#83d327] rounded-full px-6 py-2 text-[1rem] text-white ">
        Disponible
      </span>
      <h4 className="text-[1.2rem] font-bold py-2 ">Yvan Grébé</h4>
      <span className="text-[1rem] opacity-70 ">UX/UI Design</span>
      <div className="flex items-center py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-red-600"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-red-600"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-red-600"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-red-600"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-[1.2rem] font-bold px-1 ">4.9</span>
      </div>
      <div className="flex items-center space-x-1">
        <Image
          src={"/Images/svg/money-bag-svgrepo-com.svg"}
          alt="image"
          width={22}
          height={22}
          className=""
        />
        <div className=" flex items-center">
          <h4 className="text-[1rem] font-bold md:text-[1.2rem]  ">
            12 000 € - 19 000 €
          </h4>
          <span className="text-[0.9rem] md:text-[1rem] opacity-70 ">
            /par mois
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <Image
          src={"Images/svg/location1.svg"}
          alt="image"
          width={22}
          height={22}
          className=""
        />

        <h4 className="text-[1rem] font-bold  ">
          Abidjan, Plateau
        </h4>
      </div>
    </Link>
  );
};

export default ProfileTemplate;
