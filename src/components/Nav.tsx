import { FaCoins } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Nav = ({ coin }: { coin: number }) => {
  return (
    <nav>
      <div className="container mx-auto flex justify-between">
        <img src={Logo} alt="logo" />
        <ul className="flex gap-4 items-center">
          <li>Home</li>
          <li>Fixture</li>
          <li>Players</li>
          <li>Schedule</li>
          <button className="rounded-xl border px-5 py-2 flex items-center gap-2">
            {" "}
            {coin} <FaCoins />{" "}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
