import { FC } from "react";

interface InputsConfig {
  id: string;
  title: string;
  name: string;
  label?: string;
}

interface InputsProps {
  inputs: InputsConfig[];
}

const Inputs: FC<InputsProps> = ({ inputs }) => {
  return (
    <div className="flex flex-col gap-6">
      {inputs.map((input) => (
        <div key={input.id} className="flex flex-col gap-2">
          {input.label && (
            <label
              htmlFor={input.id}
              className="text-sm font-medium text-[var(--color-text)] px-3"
            >
              {input.label}
            </label>
          )}
          <input
            id={input.id}
            name={input.name}
            type="text"
            placeholder={input.title}
            className="px-4 py-2 rounded-md bg-[var(--foreground)] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[var(--bg-button)] text-[var(--color-text)] placeholder-gray-400 transition"
          />
        </div>
      ))}
    </div>
  );
};

export default Inputs;