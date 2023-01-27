import Head from "next/head";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import logo from "../public/Pictures/Brindavan_Logo-220x68.png";
import Bg1 from "../public/Pictures/Home-About-Us-Image-1024x1024.webp";
import Bg2 from "../public/Pictures/COPPER-SCRAP-8.jpg";
import Service1 from "../public/Pictures/ALUMINUM-SCRAP-SERVICE-1024x718.jpg";
import Service2 from "../public/Pictures//CAST-IRON-SCRAP-SERVICE.jpg";
import Service3 from "../public/Pictures/BRASS-SCRAP-SERVICE.jpg";
import Service4 from "../public/Pictures/MOTOR-SCRAP-SERVICE-1024x717.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shreeji Industries</title>
        <meta name="description" content="Shreeji Industries" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        <div className="relative">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            swipeable={true}
            showStatus={false}
            showThumbs={false}
            transitionTime={1000}
            autoPlay={true}
            interval={6000}
          >
            <div className="bg-[url('/Pictures/Home-Banner-2.jpg')] h-[38rem] bg-no-repeat bg-cover bg-center	">
              <div className="bg-black/60  font-semibold	pt-[calc(22rem-1.2rem)] h-full text-4xl text-white">
                ALUMINUM, COPPER, BRASS & MOTOR SCRAP
              </div>
            </div>
            <div className="bg-[url('/Pictures/Brass-Scrap-Import-Export-4.jpg')] h-[38rem] bg-no-repeat bg-cover bg-center	">
              <div className="bg-black/60  font-semibold	pt-[calc(22rem-1.2rem)] h-full text-4xl text-white">
                BRASS SCRAP
              </div>
            </div>
            <div className="bg-[url('/Pictures/Banner-2-Import-Export.jpg')] h-[38rem] bg-no-repeat bg-cover bg-center	">
              <div className="bg-black/60  font-semibold	pt-[calc(22rem-1.2rem)] h-full text-4xl text-white">
                SCRAP IMPORTER & EXPORTER
              </div>
            </div>
          </Carousel>
          <div className="absolute top-0 w-full">
            <div className="flex items-center px-4 lg:px-[calc(15%+15px)] text-white  h-10">
              <div className="flex-none">Tel: +91 87581 26699</div>
              <div className="flex-auto"></div>
              <div className="flex-none hidden md:block ">
                We are into the import & Export since 1983
              </div>
              <div className="flex-auto"></div>
              <div className="flex-none mr-5 ml-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="27px"
                  height="27px"
                  className="hover:fill-red-700 fill-gray-300	 "
                >
                  <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                </svg>
              </div>
              <div className="flex-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="27px"
                  height="27px"
                  className="hover:fill-red-700 fill-gray-300	 "
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center space-x-3 py-4 px-4 lg:mx-[15%] bg-white lg:rounded-md ">
              <div className="flex-none hover:bg-red-700 max-w-[180px]">
                <Image src={logo} />
              </div>
              <div className="flex-auto"></div>
              <div className="flex-none hidden lg:block hover:text-red-700">
                Home
              </div>
              <div className="flex-none hidden lg:block hover:text-red-700">
                About
              </div>
              <div className="flex-none hidden lg:block hover:text-red-700">
                Scrap Products
              </div>
              <div className="flex-none hidden lg:block hover:text-red-700">
                Contact Us
              </div>
              <div className="flex-auto"></div>
              <div className="flex-none hidden lg:block">
                <button className="bg-red-700 text-white p-3 rounded-md">
                  QUICK CONTACT
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="relative">
            <Image
              src={Bg1}
              className=" hover:-translate-y-1 transition-transform	duration-300 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
            />
          </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:space-x-24 lg:space-x-20 lg:p-20 xl:p-24 p-4">
          <div className="hidden lg:block">
            <div className="relative">
              <Image
                src={Bg1}
                className=" hover:-translate-y-1 transition-transform	duration-300 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
              />
              <Image
                src={Bg2}
                className="h-72 w-fit absolute bottom-[-25%] left-[50%] hover:-translate-y-1 transition-transform	duration-300 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
              />
            </div>
            <div className="h-36"></div>
          </div>
          <div>
            <p className="text-lg	font-bold text-red-700">About Company</p>
            <p className="text-3xl lg:text-4xl xl:pr-[15%] my-3 font-bold text-[#131d3b]">
              Our Real Commitment Reaches Beyond Expectation
            </p>
            <p className="text-slate-700 my-3">
              Brindavan EXIM Trading Company Buyers in All Grades of FERROUS &
              NON FERROUS METAL SCRAP.
            </p>
            <p className="text-slate-700">
              We Are the Leading IMPORTER, Supplier and Wholesaler of the
              Aluminum Scrap, Cast Iron Scrap, Discarded and Non Serviceable
              Motor Scrap, HMS 1 & 2 And Many More; These Products Are Available
              at Market Leading Rates. We Import Products from Indian Ocean,
              Middle East, South East Asia and Australia Pacific – Oceania
              Region, United States (USA), Europe, West-South Africa to India.
            </p>
            <button className="bg-red-700 text-white p-3 rounded-md my-8">
              Read More
            </button>
          </div>
        </div>
        <div className="bg-[#171717] mt-14 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 md:px-[10%] translate-y-[-12.5%]  md:translate-y-[-25%] text-center  lg:translate-y-[-50%]	">
            <div className="bg-red-700 text-white p-10">
              <p className="font-semibold text-3xl">25+</p>
              <p>Agent Offices Worldwide</p>
            </div>
            <div className="bg-[#fafafa]  p-10">
              <p className="font-semibold text-3xl">10</p>
              <p>Warehouse & Operations</p>
            </div>
            <div className="bg-[#131d3b] text-white  p-10">
              <p className="font-semibold text-3xl">300+</p>
              <p>Satisfied Clients</p>
            </div>
            <div className="bg-red-700 text-white  p-10">
              <p className="font-semibold text-3xl">5+</p>
              <p>Awards & Recognitions</p>
            </div>
          </div>
          <p className="text-red-700 font-semibold text-center">Our Services</p>
          <p className="text-3xl text-white font-semibold text-center pb-4">
            We Provide Superior Services
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-20 md:px-[10%] gap-4 md:gap-6 text-white">
            <div>
              <Image
                src={Service1}
                className=" hover:-translate-y-1 transition-transform	duration-300 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
              />
              <p className="font-medium py-2 px-[7%]">Aluminum Scrap</p>
              <p className="px-[7%]">
                We offer Industrial Scraps of fine grade to the national and
                international market
              </p>
              <button className="text-red-700 px-[7%] my-4">Read More</button>
            </div>
            <div>
              <Image
                src={Service2}
                className=" hover:-translate-y-1 transition-transform	duration-300 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
              />
              <p className="font-medium py-2 px-[7%]">Cast Iron Scrap</p>
              <p className="px-[7%]">
                Imported Cast Iron Scrap, suitable for use in Automobile,
                Machinery etc
              </p>
              <button className="text-red-700 px-[7%] my-4">Read More</button>
            </div>
            <div>
              <Image
                src={Service3}
                className=" hover:-translate-y-1 transition-transform	duration-300 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
              />
              <p className="font-medium py-2 px-[7%]">Brass & Copper Scrap</p>
              <p className="px-[7%]">
                Importing and Exporting Brass & Copper Scrap from the
                well-renowned dealers
              </p>
              <button className="text-red-700 px-[7%] my-4">Read More</button>
            </div>
            <div>
              <Image
                src={Service4}
                className=" hover:-translate-y-1 transition-transform	duration-300 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
              />
              <p className="font-medium py-2 px-[7%]">Discarded Motor Scrap</p>
              <p className="px-[7%]">
                Motor Scraps, is highly demand both in the local and
                international markets
              </p>
              <button className="text-red-700 px-[7%] my-4">Read More</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
