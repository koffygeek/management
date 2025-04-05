import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-[80%] m-auto">
      <div>
        <div>
          <Link href={"/"}>E-Jobs</Link>
        </div>
        <div>
          <ul>
            <li>
              <Link href={"/"}>Accueil</Link>
            </li>
            <li>
              <Link href={"/"}>Emploi</Link>
            </li>
            <li>
              <Link href={"/"}>Profil</Link>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input placeholder="Rechercher..."></input>
            </li>
          </ul>
          <ul>
            <li>
              <Link href={"/"}>Connexion</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
