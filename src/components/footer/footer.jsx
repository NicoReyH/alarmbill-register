import { Button } from "../button";

export const Footer = () => {
  return (
    <footer className="bg-[#AAA9F2] text-[#3A3A3A] w-full px-20 py-8 flex justify-between items-center">
      <div>
        <p>Copyright Uniandes 2024</p>
      </div>
      <Button title="Volver al Menu" hasIcon={false} />
    </footer>
  );
};
