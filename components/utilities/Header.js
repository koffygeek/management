import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-[80%] m-auto h-full py-3 relative">
      <div className="hidden lg:flex justify-between items-center">
        <div className="">
          <Link className="text-[1.8rem] font-bold " href={"/"}>
            E-Jobs
          </Link>
        </div>
        <div className="flex space-x-10 items-center text-[1.2rem] ">
          <ul className="flex space-x-5 items-center">
            <li className="opacity-60">
              <Link className="font-medium" href={"/"}>Accueil</Link>
            </li>
            <li className="opacity-60">
              <Link className="font-medium" href={"/"}>Emploi</Link>
            </li>
            <li className="opacity-60">
              <Link className="font-medium" href={"/"}>Profil</Link>
            </li>
            <li className="bg-white rounded-full items-center flex px-3 py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 opacity-50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input placeholder="Rechercher..." className="outline-none p-1 text-[1rem]  "></input>
            </li>
          </ul>
          <ul>
            <li>
              <Link className="text-white bg-[#83d327] px-4 py-2 rounded-full text-[1.2rem] " href={"/"}>Connexion</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
