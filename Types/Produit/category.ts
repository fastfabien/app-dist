export interface Subcategory {
  name: string;
  link: string;
  subcategories: Subcategory[];
}

export interface Category {
  category_name: string;
  link: string;
  subcategories: Subcategory[];
}

export interface CategoryProps {
  category: Category[];
}

export interface SubSubcategoryProps {
  subcategory: Subcategory[];
}
