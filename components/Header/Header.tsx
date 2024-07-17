import { SearchBar } from "../Form";
import { Action } from "./Action";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <>
      <div className="bg-black w-full p-2 text-center">
        <p className="text-white text-sm">
          💻 Promotions exclusives - jusqu&lsquo;à 50% de réduction sur une
          sélection d&lsquo;articles ! 💻 Livraison rapide & support client 24/7
          !
        </p>
      </div>
      <div className="flex items-center justify-center mx-auto bg-white rounded-full px-10 pb-[18px] py-[14px] mt-5 shadow-lg w-fit">
        <Logo />
        <Navbar />
        <SearchBar />
        <Action />
      </div>
    </>
  );
};
