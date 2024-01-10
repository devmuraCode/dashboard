import { FC } from "react";

interface IButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}
const Button: FC<IButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="submit"
      className="w-full md:w-auto py-[13px] md:px-[145px] rounded-xl bg-white sides border-0 font-roboto font-medium text-[1.5rem] leading-label mt-28 md:mt-18"
    >
      {label}
    </button>
  );
};

export default Button;
