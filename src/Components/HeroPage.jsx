import React, { useState } from "react";
import Header from "./Header";
import { motion } from "framer-motion";

function HeroPage() {
  const home_page_logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 3.2,
        delay: 0.5,
        ease: "easeInOut",
        type: "spring",
        bounce: 0.5,
      },
    },
  };

  const socialsVaiants = {
    hidden: {
      x: "100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 2.3,
        duration: 2.5,
        ease: "easeInOut",
        type: "spring",
        bounce: 0.5,
      },
    },
  };

  return (
    <div className="hero_section_container flex flex-col justify-center items-center px-[30px] pb-[20px] gap-[40px] sticky top-0 z-[10] ">
      <div className="nav_bar w-full  z-[10] ">
        <Header />
      </div>
      <div className="home_page flex flex-col justify-center items-center gap-[40px] ">
        <motion.div
          variants={home_page_logoVariants}
          animate="visible"
          initial="hidden"
          className="home_page_logo w-full flex justify-center items-center h-full max-h-[410px]"
        >
          <img
            className="md:max-w-[48em] max-w-[350px] w-full "
            src="./Beings Web Assets/logo-beings.png"
            alt=""
          />
        </motion.div>
        <motion.div
          variants={socialsVaiants}
          initial="hidden"
          animate="visible"
          className="socials flex gap-[20px] sm:gap-[30px] justify-center font-bold items-center mb-[10px]"
        >
          <button className="flex gap-[8px] justify-center items-center social_links discord px-[20px] py-[10px] border-[2px] border-[white] rounded-[30px] ">
            <h1 className=" hidden sm:block font-[500] text-[16px] ">
              Discord
            </h1>
            <svg
              width="31"
              height="25"
              viewBox="0 0 71 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                  fill="#ffffff"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="71" height="55" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button className="flex gap-[8px] justify-center items-center social_links twitter px-[20px] py-[10px] border-[2px] border-[white]  rounded-[30px] ">
            <h1 className=" hidden sm:block font-[500] text-[16px] ">
              Twitter
            </h1>
            <svg
              width="31"
              height="30"
              viewBox="0 0 61 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M53.1426 17.9519C53.1657 18.4799 53.1657 18.9839 53.1657 19.5119C53.1889 35.5199 41.4277 54 19.9196 54C13.576 54 7.34809 52.104 2 48.552C2.92608 48.672 3.85215 48.72 4.77823 48.72C10.0337 48.72 15.1503 46.896 19.2945 43.512C14.2937 43.416 9.8948 40.032 8.36678 35.0879C10.1263 35.4479 11.9322 35.3759 13.6454 34.8719C8.20471 33.7679 4.29204 28.7999 4.26889 23.0159C4.26889 22.9679 4.26889 22.9199 4.26889 22.8719C5.88952 23.8079 7.71852 24.3359 9.57067 24.3839C4.4541 20.8319 2.85662 13.7519 5.95898 8.20785C11.909 15.7919 20.6604 20.3759 30.0601 20.8799C29.1109 16.6799 30.4074 12.2639 33.4403 9.28786C38.1401 4.70384 45.5487 4.94384 49.9939 9.81586C52.6101 9.28786 55.1336 8.27985 57.4257 6.86385C56.5459 9.67186 54.7169 12.0479 52.2859 13.5599C54.6011 13.2719 56.87 12.6239 59 11.6639C57.4257 14.1119 55.4346 16.2239 53.1426 17.9519Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="flex gap-[8px] justify-center items-center social_links opensea px-[20px] py-[10px] border-[2px] border-[white] rounded-[30px] ">
            <h1 className=" hidden sm:block font-[500] text-[16px] ">
              Opensea
            </h1>
            <svg
              width="30"
              height="30"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.69523 33.7176L3.88972 33.3985L16.5315 11.8066C16.726 11.4875 17.115 11.4875 17.3095 11.9129C19.4489 17.1248 21.1993 23.5066 20.4213 27.5485C20.0324 29.2503 19.0599 31.484 17.893 33.5049C17.7957 33.824 17.6012 34.1431 17.4068 34.3558C17.3095 34.4622 17.2123 34.5686 17.0178 34.5686H3.98697C3.69523 34.4622 3.50074 34.0367 3.69523 33.7176Z"
                fill="white"
              />
              <path
                d="M60 37.7594V41.163C60 41.3758 59.9028 41.4821 59.7083 41.5885C58.7358 42.0139 55.3322 43.7158 53.9708 45.8431C50.3728 51.2676 47.6499 59.0323 41.6207 59.0323H16.2399C7.29335 59.0323 0 51.0549 0 41.163V40.8439C0 40.6312 0.194491 40.4185 0.38898 40.4185H14.684C14.9757 40.4185 15.1702 40.7376 15.1702 40.9503C15.0729 41.9076 15.2674 42.9712 15.6564 43.9285C16.5316 45.8431 18.282 46.9067 20.1297 46.9067H27.1313V40.9503H20.2269C19.8379 40.9503 19.6434 40.5248 19.8379 40.2057C19.9352 40.0994 20.0324 39.993 20.1297 39.7803C20.8104 38.7166 21.6856 37.2275 22.658 35.4193C23.3387 34.2493 23.9222 32.8666 24.4084 31.5902C24.5057 31.3775 24.6029 31.1648 24.7002 30.8457C24.7974 30.4202 24.9919 29.9948 25.0891 29.6757C25.1864 29.3566 25.2836 29.0375 25.3809 28.7184C25.5754 27.6548 25.6726 26.4847 25.6726 25.2084C25.6726 24.7829 25.6726 24.2511 25.5754 23.7193C25.5754 23.1874 25.4781 22.6556 25.4781 22.1238C25.4781 21.6983 25.3809 21.1665 25.2836 20.7411C25.1864 19.9965 25.0891 19.3583 24.8946 18.6138L24.7974 18.401C24.7002 17.9756 24.6029 17.4438 24.4084 17.0183C24.0194 15.5292 23.5332 14.0401 23.047 12.7637C22.8525 12.2319 22.658 11.7001 22.4635 11.1683C22.1718 10.4237 21.8801 9.67916 21.5883 9.04098C21.4911 8.72188 21.2966 8.50915 21.1993 8.19006C21.1021 7.87096 20.9076 7.55186 20.8104 7.23277C20.7131 7.02004 20.6159 6.80732 20.5186 6.59459L19.6434 4.89275C19.5462 4.68003 19.7407 4.36094 19.9352 4.4673L25.2836 6.06277L25.9643 6.27549L26.7423 6.48822L27.034 6.59459V3.08456C27.034 1.38273 28.2982 0 29.7569 0C30.5348 0 31.2156 0.31908 31.7018 0.850902C32.188 1.38272 32.4797 2.12728 32.4797 2.97819V8.08369L33.0632 8.29641C33.0632 8.29641 33.1605 8.29642 33.1605 8.40278C33.2577 8.50915 33.4522 8.72188 33.7439 8.93461C33.9384 9.14733 34.1329 9.36007 34.4246 9.5728C34.9109 9.99826 35.5916 10.6364 36.2723 11.2746C36.4668 11.4873 36.6613 11.5937 36.7585 11.8064C37.6337 12.6574 38.6062 13.721 39.5786 14.891C39.8703 15.2101 40.0648 15.5292 40.3566 15.8483C40.6483 16.1674 40.8428 16.5928 41.1345 16.9119C41.4262 17.3374 41.8152 17.8692 42.107 18.2947C42.2042 18.5074 42.3987 18.7201 42.496 19.0392C42.8849 19.6774 43.1767 20.3156 43.5656 20.9538C43.6629 21.2729 43.8574 21.592 43.9546 21.9111C44.3436 22.762 44.6353 23.6129 44.7326 24.5702C44.8298 24.7829 44.8298 24.9956 44.8298 25.102C44.9271 25.3147 44.9271 25.6338 44.9271 25.9529C45.0243 26.9102 44.9271 27.7611 44.8298 28.7184C44.7326 29.1439 44.6353 29.4629 44.5381 29.8884C44.4408 30.2075 44.3436 30.633 44.1491 31.0584C43.8574 31.803 43.4684 32.5475 43.0794 33.2921C42.9822 33.5048 42.7877 33.8239 42.5932 34.143C42.3987 34.4621 42.2042 34.6748 42.107 34.9939C41.9125 35.313 41.6207 35.6321 41.4263 35.9512C41.2318 36.2703 41.0373 36.5894 40.7455 36.9085C40.4538 37.3339 40.0648 37.7594 39.7731 38.1848C39.5786 38.3976 39.3841 38.7166 39.0924 38.9294C38.8979 39.1421 38.7034 39.4612 38.4117 39.6739C38.1199 39.993 37.8282 40.3121 37.5365 40.5248L36.953 41.0567C36.8557 41.163 36.7585 41.163 36.6613 41.163H32.3825V47.1194H37.7309C38.8979 47.1194 40.0648 46.694 40.94 45.8431C41.2318 45.524 42.5932 44.2476 44.2463 42.333C44.3436 42.2267 44.3436 42.2267 44.4408 42.2267L59.222 37.5466C59.8055 37.2275 60 37.4403 60 37.7594Z"
                fill="white"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroPage;
