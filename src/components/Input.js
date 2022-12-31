import React, { forwardRef } from "react";

const Input = forwardRef(({ children, type = "text", ...props }, ref) => {
    return (
        <input
            ref={ref}
            {...props}
            type={type}
            className="border border-slate-200 rounded-lg shadow-sm w-full focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-400 transition duration-300 px-2 text-md"
        >
            {children}
        </input>
    );
});

export default Input;
