import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import logo from "../../assets/Logo-Redondo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-[#AAA9F2] text-[#3A3A3A] font-bold w-full px-20 flex justify-between items-center">
      <img
        src={logo}
        alt="AlarmBill Logo"
        className="w-20 h-20 rounded-3xl my-1"
      />
      <div>
        <ul className="flex justify-around">
          <li className="mr-10">Inicio</li>
          <li className="mr-10">Alarmas</li>
          <li className="mr-10">Facturas</li>
          <li className="mr-10">Facturas</li>
          <li className="">Contacto</li>
        </ul>
      </div>
      <div className="flex items-center">
        <Link to="/register">Registrarse</Link>
        <div className="flex ml-5">
          <FaTwitter className="mr-2 text-white bg-[#3A3A3A] rounded-full p-2 w-7 h-7" />
          <FaInstagram className="mr-2 text-white bg-[#3A3A3A] rounded-full p-2 w-7 h-7" />
          <FaFacebookF className="text-white bg-[#3A3A3A] rounded-full p-2 w-7 h-7" />
        </div>
      </div>
    </header>
  );
};
