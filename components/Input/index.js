import React from "react";

const Input = React.forwardRef(
  ({ label, name, error, inputClasses, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        {label && (
          <label htmlFor={name} className="ml-1 mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          name={name}
          className={`rounded-2xl h-12 ${
            error ? "border-red-500" : ""
          } ${inputClasses}`}
          type="text"
          {...props}
        />
        {error && <span className="text-red-500">{error.message}</span>}
      </div>
    );
  }
);

export default Input;
