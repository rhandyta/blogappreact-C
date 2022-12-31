import React from "react";

const Textarea = ({ children, ...props }) => {
    return (
        <textarea
            {...props}
            rows="5"
            className="border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-400 transition duration-300 px-2 text-md"
        >
            {children}
        </textarea>
    );
};

export default Textarea;
