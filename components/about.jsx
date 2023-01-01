import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col items-center justify-between bg-[#292b2e] lg:mx-20 mx-5 my-20 rounded-[50px] shadow-2xl py-10 px-5">
        <Image src={"/about.png"} width={350} height={350} />
        <div className="flex flex-col lg:w-1/2 text-center lg:text-left">
          <h1 className="text-[#30FBEF] lg:text-[40px] text-[30px] lg:mt-0 mt-10 font-bold">
            We are a high-level <br /> data storage bank
          </h1>
          <p className="text-white text-[18px] w-[90%]">
            The place to store various data that you can access at any time
            through the internet and where you can carry it. <br /> This very
            flexible storage area has a high level of security. To enter into
            your own data you must enter the password that you created when you
            registered in this Data Warehouse.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
