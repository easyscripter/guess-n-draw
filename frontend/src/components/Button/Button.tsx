import classNames from "classnames";
import styles from "./Button.module.scss";
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  text: string;
  onClick: () => void;
  className?: string;
};
const Button = ({ text, onClick, className, ...props }: ButtonProps) => {
  return (
    <button
      className={classNames(styles.button, className)}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
