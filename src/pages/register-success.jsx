import { Footer, Header } from "../components";
import photo from "../assets/register.jpg";

export const RegisterSuccess = () => {
  return (
    <>
      <Header />
      <div className="flex-col bg-[#96cef3] pb-20">
        <h1 className="uppercase text-[#0F2A70] text-6xl text-center font-bold pt-16 pb-32">
          alarmbill
        </h1>
        <div className="flex justify-around items-center w-full">
          <h2 className="text-center font-extrabold text-3xl">
            Registro realizado con éxito!
          </h2>
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
