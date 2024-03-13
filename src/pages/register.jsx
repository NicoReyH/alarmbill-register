import { Footer, Header } from "../components";
import photo from "../assets/register.jpg";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <>
      <Header />
      <div className="flex-col bg-[#96cef3] pb-20">
        <h1 className="uppercase text-[#0F2A70] text-6xl text-center font-bold pt-16 pb-32">
          alarmbill
        </h1>
        <div className="flex justify-around items-center">
          <div className="bg-[#AAA9F2] py-10 px-10 rounded-xl">
            <h2 className="text-center font-bold text-2xl">
              Registro AlarmBill
            </h2>
            <input
              type="text"
              name=""
              id=""
              placeholder="e-mail:"
              className="mb-5 block bg-transparent placeholder-black border-b-2 border-black w-44 h-10"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Contraseña:"
              className="mb-5 block bg-transparent placeholder-black border-b-2 border-black w-44 h-10"
            />
            <Link
              to="/register-success"
              className="bg-[#3A3A3A] px-8 py-2 text-white rounded-3xl"
            >
              Registrarse
            </Link>
          </div>
          <img src={photo} alt="photo" className="w-96 h-auto" />
        </div>
        <p className="text-center mt-40 ">
          Paga tus cuentas a tiempo, sin estres y sin filas!
        </p>
      </div>
      <Footer />
    </>
  );
};
