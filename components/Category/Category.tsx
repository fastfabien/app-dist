import { Category, CategoryProps } from "@/Types";
import { Subcategory } from "./Subcategory";

export const Categories = ({ category }: CategoryProps) => {
  return (
    <div className="flex flex-col gap-4 relative w-fit">
      {category.map((cat: Category, index: number) => (
        <Subcategory
          category_name={cat.category_name}
          link={cat.link}
          subcategories={cat.subcategories}
          key={index}
        />
      ))}
    </div>
  );
};
