import { IoArrowForward } from "react-icons/io5";

export const Button = ({ title, hasIcon, hasBottomMargin }) => {
  return (
    <div
      className={`flex items-center bg-[#3A3A3A] px-8 py-2 text-white rounded-3xl max-w-56 ${
        hasBottomMargin ? "mb-40" : ""
      }`}
    >
      <button className={hasIcon ? `mr-8` : ""}>{title}</button>
      {hasIcon && <IoArrowForward />}
    </div>
  );
};
