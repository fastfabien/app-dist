import { CircleHelp, ShoppingBag, User } from "lucide-react";
import { NavLink } from "../Typography";

export const Action = () => {
  return (
    <div className="flex flex-row gap-5">
      <NavLink classname="flex flex-col gap-2 items-center" href="#">
        <User />
        <span className="font-normal text-sm leading-normal">Compte</span>
      </NavLink>
      <NavLink href="#" classname="flex flex-col gap-2 items-center">
        <ShoppingBag />
        <span className="font-normal text-sm leading-normal">Panier</span>
      </NavLink>
      <NavLink href="#" classname="flex flex-col gap-2 items-center">
        <CircleHelp />
        <span className="font-normal text-sm leading-normal">Aides</span>
      </NavLink>
    </div>
  );
};
