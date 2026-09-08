import Shadow from "../assets/bg-shadow.png";
import CricketLogo from "../assets/banner-main.png";

const Banner = () => {
  return (
    <div className="relative container mx-auto my-6 overflow-hidden rounded-2xl bg-[#111111] sm:my-10">
      {/* Shadow image */}
      <img
        src={Shadow}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 py-10 text-center sm:px-8 sm:py-12">
        <img className="w-40 sm:w-52" src={CricketLogo} alt="Cricket" />

        <h1 className="mt-5 max-w-3xl text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        <p className="mt-2 text-sm text-gray-400 sm:text-base">
          Beyond Boundaries Beyond Limits
        </p>

        <button className="mt-5 rounded-xl bg-lime-400 px-6 py-3 font-bold">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
