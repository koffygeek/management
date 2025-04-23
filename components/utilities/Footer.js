import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#59911a] py-10 ">
      <div className="w-[80%] mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <div className=" ">
          <h4 className="font-bold text-white text-[1.2rem] ">E-JOBS</h4>
          <span className="text-[#fff] ">
            Trouvez des experts indépendants pour tous vos besoins
            professionnels
          </span>
        </div>
        <div className=" ">
          <h4 className="font-bold text-white text-[1.2rem] ">Catégories</h4>
          <ul className="text-[#fff] flex flex-col py-2 space-x-2">
            <li>
              <Link href="/" className="block py-1">
                Mobile developpeur
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-1">
                AWS
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-1">
                Développeur Web
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-1">
                Comptabilité
              </Link>
            </li>
          </ul>
        </div>
        <div className=" ">
          <h4 className="font-bold text-white text-[1.2rem] ">Communauté</h4>
          <ul className="text-[#fff] flex flex-col py-2 space-x-2">
            <li>
              <Link href="/" className="block py-1">
                Discord
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-1">
                Partenaire
              </Link>
            </li>
          </ul>
        </div>
        <div className=" ">
          <h4 className="font-bold text-white text-[1.2rem] ">Support</h4>
          <ul className="text-[#fff] flex flex-col py-2 space-x-2">
            <li>
              <Link href="/" className="block py-1">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-1">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-1">
                Nous rejoindre
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
