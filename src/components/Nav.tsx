import { FaCoins } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Nav = ({ coin }: { coin: number }) => {
  return (
    <nav className="px-4 py-3 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
        <img className="h-10 w-auto sm:h-12" src={Logo} alt="logo" />
        <ul className="flex flex-wrap items-center justify-end gap-x-3 gap-y-2 text-sm sm:gap-5 sm:text-base">
          <li>Home</li>
          <li>Fixture</li>
          <li>Players</li>
          <li>Schedule</li>
          <button className="flex items-center gap-2 rounded-xl border px-3 py-2 sm:px-5">
            {" "}
            {coin} <FaCoins />{" "}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
