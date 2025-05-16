import React from "react";

interface ButtonConfig {
  id: string;
  title: string;
  name: string;
}

interface ButtonProps {
  buttons: ButtonConfig[];
  onSelect: (name: string) => void;
}

const Button: React.FC<ButtonProps> = ({ buttons, onSelect}) => {
  return (
    <div className="flex flex-wrap gap-4">
      {buttons.map((button) => (
        <button
          key={button.id}
          name={button.name}
          onClick={() => onSelect(button.name)}
          className="py-2 px-10 bg-[var(--bg-button)] hover:brightness-110 transition rounded-lg font-medium w-fit mx-auto sm:mx-0 hover:cursor-pointer"
          type="submit"
        >
          {button.title}
        </button>
      ))}
    </div>
  );
};

export default Button;
