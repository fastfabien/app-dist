"use client";

import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="border border-body rounded-full py-2 px-3 flex flex-row gap-2 w-fit justify-between mr-[70px] bg-transparent"
    >
      <input
        type="search"
        placeholder="product name"
        className="border-none text-sm outline-none w-4/5 placeholder:capitalize bg-none"
        style={{ backgroundColor: "transparent" }}
      />
      <button className="w-fit">
        <Search />
      </button>
    </form>
  );
};
