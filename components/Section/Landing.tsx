import { category } from "@/utils";
import { Categories } from "../Category/Category";
import { PromotionCarousel } from "../Slide/PromotionCarousel";

export const Landing = () => {
  return (
    <div className="flex justify-between items-start pt-[70px] px-32">
      <Categories category={category} />
      <PromotionCarousel />
    </div>
  );
};
