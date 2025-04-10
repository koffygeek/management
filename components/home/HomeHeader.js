import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeHeader = () => {
  return (
    <div>
      <div>
        <div>
          <h3>
            Trouver des <span>freelanceurs talentueux</span> avec une bonne
            reputation
          </h3>
          <div>
            <div>
              <input />
            </div>
            <div>
              <button>Recherche d'emplois</button>
            </div>
          </div>
          <div>
            <Link href={"/"}>Mobile dev</Link>
            <Link href={"/"}>Web dev</Link>
            <Link href={"/"}>Comptabilité</Link>
            <Link href={"/"}>Marketing digital</Link>
            <Link href={"/"}>Gestion de projet</Link>
            <Link href={"/"}>UX/UI</Link>
          </div>
        </div>
        <div>
          <Image
            src={"/svg/job-search-search-svgrepo-com.svg"}
            alt="header"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
