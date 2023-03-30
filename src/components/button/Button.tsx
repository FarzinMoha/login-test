import { btnProps } from "../../types/Types";
import "./Button.scss";

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & btnProps
> = ({ width, color, addClass,children, ...props }) => {
  return (
    <button className={`btn ${addClass}`} style={{ width: `${width}px` }} {...props}>
      {children}
    </button>
  );
};

export default Button;
