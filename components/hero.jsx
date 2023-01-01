import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col lg:mx-20 mx-5 my-20 justify-between">
        <div className="flex flex-col lg:w-1/2 items-start justify-between">
          <h1 className="text-[#30FBEF] lg:text-[70px] text-[50px] leading-[88px] font-bold">
            Save your data <br /> Storage here.
          </h1>
          <p className="text-[18px] leading-[28px] text-white">
            Insignia is a data storage area that has been tested for security,
            so you can store your data here safely but not be afraid of being
            stolen by others.
          </p>
          <button className="px-10 py-3 rounded-full shadow-xl border-inherit text-white">
            Learn more
          </button>
        </div>
        <Image src={"/hero-banner.png"} width={400} height={400} />
      </div>
    </>
  );
};

export default Hero;
