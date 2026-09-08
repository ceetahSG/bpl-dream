import Shadow from "../assets/bg-shadow.png";
import CricketLogo from "../assets/banner-main.png";

const Banner = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#111111] container mx-auto my-10">
      {/* Shadow image */}
      <img
        src={Shadow}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center py-12">
        <img src={CricketLogo} alt="Cricket" />

        <h1 className="text-3xl font-bold text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        <p className="text-gray-400">Beyond Boundaries Beyond Limits</p>

        <button className="mt-5 rounded-xl bg-lime-400 px-6 py-3 font-bold">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
