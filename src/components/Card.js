import React from "react";

function Card({ children }) {
    return (
        <div className="border shadow-md rounded-md mb-5 p-5">{children}</div>
    );
}

function Title({ children }) {
    return <h1 className="font-semibold text-slate-800 text-xl">{children}</h1>;
}

function Content({ children }) {
    return (
        <>
            <p className="font-thin text-sm text-slate-500">3 minutes later</p>
            <p className="text-slate-600 font-normal py-3">{children}</p>
            <p className="text-sm">
                Author by:
                <span className="underline hover:cursor-pointer"> Taylor</span>
            </p>
        </>
    );
}

Card.Title = Title;
Card.Content = Content;

export default Card;
