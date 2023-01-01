import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col justify-around mt-10 items-center text-center">
        <Image src={"/logo.png"} width={140} height={60} />
        <div className="flex flex-row lg:text-[16px] text-[10px] justify-between text-white items-center">
          <Link className="text-[#30FBEF] mx-4" href={"/"}>
            About
          </Link>
          <Link className="mx-4" href={"/"}>
            Help
          </Link>
          <Link className="mx-4" href={"/"}>
            Features
          </Link>
          <Link className="mx-4" href={"/"}>
            Signup
          </Link>
          <button className="flex flex-row items-center text-[#30FBEF] px-2 rounded-[50px] py-3 shadow">
            Request a demo{" "}
            <Image
              src={"/right-arrow.png"}
              width={20}
              height={20}
              className="ml-2"
            />{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
