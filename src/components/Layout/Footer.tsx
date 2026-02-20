import { Facebook, Instagram, Twitter } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className=" lg:px-15 px-4  ">
      <div>
        {/* Newsletter Section */}
        <div className="bg-[#4A69E2] lg:flex   z-0 relative -bottom-30 lg:-bottom-50  text-white rounded-[48px]  p-8 md:p-20 mb-12 h-[400px] lg:h-[545px] shadow-sm">
          <div>
            <h2 className="text-2xl  md:text-3xl lg:text-[48px] font-semibold  mb-2">
              JOIN OUR KICKSPLUS <br /> CLUB & GET 15% OFF
            </h2>
            <p className="text-white mb-4">
              Sign up for free! Join the community.
            </p>
            <div className="flex flex-col text-white sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Email address"
                className=" text-white"
              />
              <Button type="submit">SUBMIT</Button>
            </div>
          </div>
          <div className="lg:ml-50 flex mt-8 lg:mt-0">
            {" "}
            <div className="relative">
              <h1
                className="uppercase font-bold  w-full text-center flex lg:justify-center lg:items-center"
                style={{
                  fontFamily: "'Rubik', sans-serif",
                  fontWeight: 600,
                  fontSize: "10vw", // viewport width proportional
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                <span style={{ color: "#FFFFFF" }}>KICKS </span>
              </h1>
            </div>
          </div>
        </div>

        {/* Links Grid */}

        <div className="relative bg-[#232321] h-[700px] lg:h-[600px] rounded-[48px] overflow-hidden p-6 lg:p-10 ">
          {/* BIG KICKS BACKGROUND TEXT */}
          <h1
            className="absolute bottom-[-40px]   lg:bottom-[-225px] left-1/2 -translate-x-1/2
               uppercase font-semibold text-white
               pointer-events-none select-none z-0"
            style={{
              fontFamily: "'Rubik', sans-serif",
              fontSize: "30vw",
              lineHeight: "100%",
            }}
          >
            KICKS
          </h1>

          {/* GRID CONTENT */}
          <div className="relative lg:h-[450px] z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-white">
            {/* About */}
            <div>
              <h3 className="text-[#FFA52F] text-xl font-semibold mb-4">
                About us
              </h3>
              <p className="text-sm leading-relaxed">
                We are the biggest hyperstore in the universe. We got you all
                cover with our exclusive collections and latest drops.
              </p>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-[#FFA52F] text-xl font-semibold mb-4">
                Categories
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-[#FFA52F] cursor-pointer">Runners</li>
                <li className="hover:text-[#FFA52F] cursor-pointer">
                  Sneakers
                </li>
                <li className="hover:text-[#FFA52F] cursor-pointer">
                  Basketball
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-[#FFA52F] text-xl font-semibold mb-4">
                Company
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-[#FFA52F] cursor-pointer">About</li>
                <li className="hover:text-[#FFA52F] cursor-pointer">Contact</li>
                <li className="hover:text-[#FFA52F] cursor-pointer">Blogs</li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-[#FFA52F] text-xl font-semibold mb-4">
                Follow us
              </h3>

              <ul className="flex gap-4">
                <li
                  className="w-10 h-10 flex items-center justify-center 
                             rounded-full bg-white/10 hover:bg-[#FFA52F] 
                             transition cursor-pointer"
                >
                  <Facebook className="w-4 h-4 text-white" />
                </li>

                <li
                  className="w-10 h-10 flex items-center justify-center 
                             rounded-full bg-white/10 hover:bg-[#FFA52F] 
                             transition cursor-pointer"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </li>

                <li
                  className="w-10 h-10 flex items-center justify-center 
                             rounded-full bg-white/10 hover:bg-[#FFA52F] 
                             transition cursor-pointer"
                >
                  <Twitter className="w-4 h-4 text-white" />
                </li>

                {/* TikTok SVG */}
                <li
                  className="w-10 h-10 flex items-center justify-center 
                             rounded-full bg-white/10 hover:bg-[#FFA52F] 
                             transition cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-1.89v8.126a6.003 6.003 0 1 1-5.19-5.95v2.057a3.944 3.944 0 1 0 2.944 3.812V0h2.246a4.78 4.78 0 0 0 3.77 4.63v2.056z" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12  text-center text-sm text-gray-500 mb-5">
          © All rights reserved
        </div>
      </div>
    </footer>
  );
}
