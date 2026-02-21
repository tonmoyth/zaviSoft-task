import { getCategories } from "@/Action/categories.action";
import DoItRight from "@/components/bannar/DoItRight";
import HeroImageSelector from "@/components/bannar/HeroImageSelector";
import Categories from "@/components/categories/Categories";
import ProductSection from "@/components/products/ProductSection";
import Reviews from "@/components/review/Review";
export const fakeCategories = [
  {
    id: "1",
    name: "Lifestyle Shoes",
    image: "/categories/lifestyle.png",
  },
  {
    id: "2",
    name: "Basketball Shoes",
    image: "/categories/basketball.png",
  },
  {
    id: "3",
    name: "Running Shoes",
    image: "/categories/running.png",
  },
  {
    id: "4",
    name: "Training Shoes",
    image: "/categories/training.png",
  },
];

const images = [
  {
    id: "image1",
    src: "/images/hero1.jpg",
    title: "Nike Air Max",
    description: "Nike introducing the new air max for everyone's comfort",
  },
  {
    id: "image2",
    src: "/images/hero2.jpg",
    title: "Power Run",
    description: "Built for performance",
  },
];

export default async function Home() {
  const categoriesResponse = await getCategories();

  return (
    <div>
      <DoItRight></DoItRight>
      <HeroImageSelector images={images} />
      <ProductSection></ProductSection>
      <Categories categories={categoriesResponse}></Categories>
      <Reviews></Reviews>
    </div>
  );
}
