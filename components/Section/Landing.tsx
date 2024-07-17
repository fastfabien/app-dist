import { category } from "@/utils";
import { Categories } from "../Category/Category";

export const Landing = () => {
  return (
    <div className="flex pt-[70px] px-32">
      <Categories category={category} />
    </div>
  );
};
