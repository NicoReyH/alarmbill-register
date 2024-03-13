import { TbBellRingingFilled } from "react-icons/tb";
import { FaRegTrashAlt } from "react-icons/fa";
import { PiNotePencilDuotone } from "react-icons/pi";
import { Button } from "../button";

export const MainContent = () => {
  return (
    <div className={`bg-[#96cef3] items-center pb-20`}>
      <h1 className="uppercase text-[#0F2A70] text-6xl text-center font-bold pt-16 pb-32">
        alarmbill
      </h1>
      <div className="flex items-center justify-center mb-40">
        <Button title="Crear Alarma" hasIcon />
        <TbBellRingingFilled className="ml-10 h-12 w-12" />
      </div>
      <div className="flex items-center justify-center mb-40">
        <Button title="Editar Alarma" hasIcon />
        <PiNotePencilDuotone className="ml-10 h-12 w-12" />
      </div>
      <div className="flex items-center justify-center">
        <Button title="Eliminar Alarma" hasIcon />
        <FaRegTrashAlt className="ml-10 h-12 w-12" />
      </div>
    </div>
  );
};
