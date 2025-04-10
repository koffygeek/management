import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeHeader = () => {
  return (
    <div className="w-[90%] xl:w-[80%] mx-auto py-5 ">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-10 width-full">
        <div className="w-full lg:basis-1/2 lg:order-1 order-2 flex flex-col space-y-10">
          <h3 className="text-[2rem] w-full lg:text-[2.5rem] font-semibold text-[#1a1a1a]">
            Trouver des{" "}
            <span className="text-[#91d327] ">
              freelanceurs <br /> talentueux
            </span>{" "}
            avec une bonne reputation
          </h3>
          <div className="w-[90%] relative flex items-center rounded-full justify-between bg-white ">
            <div className="p-[0.60rem] ">
              <input
                placeholder="Rechercher ici"
                className="outline-none w-full p-2 "
              />
            </div>
            <div className="absolute -right-10 top-0 ">
              <button className="bg-[#83d327] lg:py-4 lg:px-6 text-[1rem] p-4 rounded-full text-white lg:text-[1.2rem] ">
                Recherche d'emplois
              </button>
            </div>
          </div>
          <div className="grid gap-3 categorie-grid ">
            <Link
              href={"/"}
              className="shadow-md border-2 border-[#414174] p-2 rounded-full text-center text-[1.1rem] "
            >
              Mobile dev
            </Link>
            <Link
              href={"/"}
              className="shadow-md border-2 border-[#414174] p-2 rounded-full text-center text-[1.1rem] "
            >
              Web dev
            </Link>
            <Link
              href={"/"}
              className="shadow-md border-2 border-[#414174] p-2 rounded-full text-center text-[1.1rem]"
            >
              Comptabilité
            </Link>
            <Link
              href={"/"}
              className="shadow-md border-2 border-[#414174] p-2 rounded-full text-center text-[1.1rem] "
            >
              Marketing digital
            </Link>
            <Link
              href={"/"}
              className="shadow-md border-2 border-[#414174] p-2 rounded-full text-center text-[1.1rem] "
            >
              Gestion de projet
            </Link>
            <Link
              href={"/"}
              className="shadow-md border-2 border-[#414174] p-2 rounded-full text-center text-[1.1rem]"
            >
              UX/UI
            </Link>
          </div>
        </div>
        <div className="lg:order-2 order-1">
          <Image
            src={"/svg/job-search-search-svgrepo-com.svg"}
            alt="header"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
