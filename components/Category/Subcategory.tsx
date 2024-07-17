"use client";
import { Category } from "@/Types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SubSubCategory } from "./SubSubCategory";

export const Subcategory = ({
  category_name,
  link,
  subcategories,
}: Category) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <Link
      href={link}
      className="cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex justify-between items-center w-fit">
        <span>{category_name}</span>
        <ChevronRight width={20} height={20} />
      </div>
      {isHover && <SubSubCategory subcategory={subcategories} />}
    </Link>
  );
};
