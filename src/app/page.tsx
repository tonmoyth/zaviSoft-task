import DoItRight from "@/components/bannar/DoItRight";
import HeroImageSelector from "@/components/bannar/HeroImageSelector";
import ProductSection from "@/components/products/ProductSection";

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

export default function Home() {
  return (
    <div>
      <DoItRight></DoItRight>
      <HeroImageSelector images={images} />
      <ProductSection></ProductSection>
    </div>
  );
}
