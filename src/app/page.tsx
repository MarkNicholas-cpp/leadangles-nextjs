"use client";
import { useRef } from "react";
import Image from 'next/image';
import { Slide } from "./interfaces/slide";
import Carousel from "./Utils/Carousel";
import GradientButton from "./Utils/GradientButton";
import ThemeContainer from "./Utils/ThemeContainer";


function Home() {
  const slides: Slide[] = [
    {
      carouselText:
        "One of LeadAngel’s biggest benefits is its all-in-one software-first approach to admin, legal and tax services.",
      carouselSubtitle: "Cindy Bi, GP, CapitalX",
      img: "https://images.unsplash.com/photo-1542396601-dca920ea2807",
    },
    {
      carouselText:
        "...it was crucial to get moving quickly and LeadAngle enabled a seamless launch.",
      carouselSubtitle: "Nichole Wischoff, GP, Wischoff Ventures",
      img: "https://images.unsplash.com/photo-1542370285-b8eb8317691c",
    },
    {
      carouselText:
        "No other platform combines the power, flexibility, reach, and network effects.",
      carouselSubtitle: "Lenny Rachitsky, GP",
      img: "https://images.unsplash.com/photo-1542397284385-6010376c5337",
    },
  ];
  const eleref = useRef<HTMLParagraphElement>(null);
  const eleref2 = useRef<HTMLDivElement>(null);
  return (
    <>
      <ThemeContainer
        genClasses="py-32 mb-3 transition-all duration-500 ease-in-out"
        darkTheme="bg-white text-primary"
        lightTheme="bg-primary text-white"
        elementRef={eleref}
        observerOptions={{
          root: null,
          rootMargin: "0px",
          threshold: 0,
        }}
      >
        <div className="md:h-[calc(100vh-96px)] flex items-start md:items-center justify-start p-10 pb-0 md:pt-0 lg:w-3/4 ">
          <div className="flex flex-col gap-4 items-start md:gap-8">
            <GradientButton content={"Explore our 2023 Year in Review"} />
            <p className="text-6xl md:text-8xl lg:text-8xl dark:text-purple-100 font-angel">
              Welcome to Lead Angle&apos;s Investment Platform
            </p>
            <p className="text-md md:text-xl dark:text-purple-100 font-angel">
              Here at Lead Angels we focus on markets where technology,
              innovation, and capital can unlock long-term value and drive
              economic growth.
            </p>
            <a
              href="/About"
              className="border border-white p-3 px-4 rounded-md bg-white dark:text-primary"
            >
              Know About Us
            </a>
          </div>
        </div>

        <div className="py-3">
          <div className="flex items-center justify-center w-full">
            <div className="mb-10">
              <p className="text-2xl text-center mb-10">
                Better together. Lead Angels partners with industry leaders.
              </p>
              <div className="px-10">
                <GradientButton
                  content={
                    "Our premier partnership program assembles top professionals to deliver comprehensive expertise & support"
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-10">
          <p className="text-lg mb-16" ref={eleref}>Software for Venture & Private Equity</p>
          <p className="text-4xl md:text-6xl mb-5 md:mb-10 text-angel">
            Our software suite amplifies opportunity for venture and private
            equity firms, regardless of stage or provider.
          </p>
        </div>
        <div className="menu-bar px-10 py-5 grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-b border-gray-200 ">
          <div className="menu-card">
            <p className="font-normal mb-3 font-primary text-xl">
              Attractive Investors
            </p>
            <div className="flex items-center justify-center p-3 bg-gray-200">
              <Image src="/svgs/ActiveInvestors.svg" alt="Active Investors" width={64} height={64} layout="responsive" />
            </div>
            <div className="menu-desc my-2 font-normal font-primary">
              A branded, secure doc sharing experience for your LPs.
            </div>
            <button className="bg-primary p-3 text-bold text-white rounded-md">
              Learn More
            </button>
          </div>
          <div className="menu-card">
            <p className="font-normal mb-3 font-primary text-xl">
              Engage investors
            </p>
            <div className="flex items-center justify-center p-3 bg-gray-200">
              <Image src="/svgs/EngageInvestors.svg" alt="Engage Investors" width={64} height={64} layout="responsive" />
            </div>
            <div className="menu-desc my-2 font-normal font-primary">
              A bespoke portal experience to engage your investors.
            </div>
            <button className="bg-primary p-3 text-bold text-white rounded-md">
              Explore Investor Portal
            </button>
          </div>
          <div className="menu-card">
            <p className="font-normal mb-3 font-primary text-xl">
              Seamless onboarding
            </p>
            <div className="flex items-center justify-center p-3 bg-gray-200">
              <Image src="/svgs/SeamlessOnboarding.svg" alt="Seamless Onboarding" width={64} height={64} layout="responsive" />
            </div>
            <div className="menu-desc my-2 font-normal font-primary">
              Intelligent investor onboarding for private markets.
            </div>
            <button className="bg-primary p-3 text-bold text-white rounded-md">
              Explore Transact
            </button>
          </div>
          <div className="menu-card">
            <p className="font-normal mb-3 font-primary text-xl">
              Optimize portfolio
            </p>
            <div className="flex items-center justify-center p-3 bg-gray-200">
              <Image src="/svgs/OptimizePortfolio.svg" alt="Optimize Portfolio" width={64} height={64} layout="responsive" />
            </div>
            <div className="menu-desc my-2 font-normal font-primary">
              AI-powered portfolio analyzer, driven by your inbox.
            </div>
            <button className="bg-primary p-3 text-bold text-white rounded-md">
              Explore Relay
            </button>
          </div>
          <div className="menu-card">
            <p className="font-normal mb-3 font-primary text-xl">
              Manage equity
            </p>
            <div className="flex items-center justify-center p-3 bg-gray-200">
              <Image src="/svgs/ManageEquity.svg" alt="Manage Equity" width={64} height={64} layout="responsive" />
            </div>
            <div className="menu-desc my-2 font-normal font-primary">
              Cap table management for high-growth companies.
            </div>
            <button className="bg-primary p-3 text-bold text-white rounded-md">
              Explore Equity
            </button>
          </div>
        </div>
        <div className="p-10">
          <div className="bg-[#cdeed3]">
            <div className="flex flex-col md:flex-row">
              <div className="left p-8 md:p-16 flex-1 flex gap-3 flex-col justify-around">
                <p className="text-[1.5rem] md:text-3xl text-[#544a2e]">
                  Full Service Fund Management
                </p>
                <p className="text-justify md:text-lg text-[#544a2e]">
                  LeadAngles full service offerings provides access to 50+
                  services that remove friction from fund management for venture
                  funds, rolling funds, and syndicates.
                </p>
                <a href="#" className="text-md underline text-[#544a2e]">
                  Explore Our Funds and Syndicate Offerings
                </a>
              </div>
              <div className="right flex-1 ml-10 md:ml-0">
                <Image
                  src="/full-service.webp"
                  alt="Full Service Fund Management"
                  width={828}
                  height={550}
                />
              </div>
            </div>
          </div>
        </div>
      </ThemeContainer>

      <div className="h-screen md:h-[calc(100vh-100px)] box-border">
        <Carousel
          slides={slides}
          autoSlideInterval={5000}
          title="Testimonials"
        />
      </div>
      <div className="h-screen bg-fixed bg-logo bg-contain bg-no-repeat bg-center"></div>
    </>
  );
}
export default Home;
