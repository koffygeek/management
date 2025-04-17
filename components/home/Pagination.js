import Link from "next/link";
import React from "react";

const Pagination = () => {
  return (
    <div className="lg:w-[90%] w-[95%] xl:w-[80%] mx-auto mb-10 flex justify-center items-center ">
      <div>
        <div className="flex items-center space-x-10 ">
          <button className="flex items-center space-x-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-[#91d327]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                />
              </svg>
            </span>
            <Link href="" className="lg:block hidden text-[#83d327] font-bold ">
              Precedent
            </Link>
          </button>
          <ul className="rounded-full px-3 flex justify-center items-center space-x-4 bg-[#83d32730] ">
            <li>
              <Link href="/">1</Link>
            </li>
            <li>
              <Link href="/">2</Link>
            </li>
            <li>
              <Link href="/">3</Link>
            </li>
            <li>
              <Link href="/">4</Link>
            </li>
            <li>
              <Link href="/">5</Link>
            </li>
          </ul>
          <button className="flex items-center space-x-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#91d327]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <Link href="" className="lg:block hidden text-[#83d327] font-bold">Suivant</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
