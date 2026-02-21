"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Review = {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  image: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "John Carter",
    avatar: "/images/avatar1.jpg",
    rating: 5,
    image: "/images/shoe1.png",
  },
  {
    id: 2,
    name: "Sophia Lee",
    avatar: "/images/avatar2.png",
    rating: 5,
    image: "/images/shoe2.png",
  },
  {
    id: 3,
    name: "Michael Ray",
    avatar: "/images/avatar3.png",
    rating: 5,
    image: "/images/shoe3.png",
  },
];

export default function ReviewsSection() {
  return (
    <section className="w-full pt-5 lg:pt-32">
      <div className=" mx-auto px-4 lg:px-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-4xl font-extrabold tracking-tight">REVIEWS</h2>

          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4"
          >
            SEE ALL
          </Button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="rounded-2xl p-0   overflow-hidden shadow-md bg-white border-0"
            >
              <CardContent className="px-0 h-[501px]">
                {/* Top Content */}
                <div className="flex items-start justify-between mb-3 p-8">
                  <div>
                    <h3 className="font-semibold text-2xl">Good Quality</h3>
                    <p className="text-6 text-muted-foreground mt-1">
                      I highly recommend shopping from this store
                    </p>

                    {/* Stars */}
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-orange-400 text-2xl">
                          ★
                        </span>
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">
                        5.0
                      </span>
                    </div>
                  </div>

                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      className="text-2xl object-cover"
                      src={review.avatar}
                    />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </div>

                {/* Image */}
                <div className="relative w-full h-full  overflow-hidden">
                  <Image
                    src={review.image}
                    alt="review"
                    fill
                    className="object-cover "
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
