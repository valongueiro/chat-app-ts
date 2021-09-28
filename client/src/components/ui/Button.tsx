import React from "react";
import classes from "./Button.module.css";

type ButtonProps = {
  type?: "text" | "submit";
  label: string;
  icon: any;
  onButtonClick?: () => void;
};

const Button: React.FC<ButtonProps> = (props) => {
  const onClickHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (props.onButtonClick) {
      props.onButtonClick();
    }
  };

  return (
    <button type="submit" className={classes.button} onClick={onClickHandler}>
      {props.label} {props.icon}
    </button>
  );
};

export default Button;
