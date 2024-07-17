import { NavLink } from "../Typography";

export const Navbar = () => {
  return (
    <div className="flex flex-row gap-5 items-center mr-[70px]">
      <NavLink href="/nouveaute">Nouveauté</NavLink>
      <NavLink href="/produit">Nos produit</NavLink>
      <NavLink href="/promotions">Promotions</NavLink>
      <NavLink href="/service">Services</NavLink>
    </div>
  );
};
