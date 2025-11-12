import React from "react";

interface FishProps {
    size?: number;
    top?: string;
    speed?: number; // in seconds
    direction?: "left" | "right";
}

const Fish: React.FC<FishProps> = ({
                                       size = 40,
                                       top = "20%",
                                       speed = 10,
                                       direction = "right",
                                   }) => {
    const animationName = direction === "right" ? "swimRight" : "swimLeft";

    return (
        <div
            className="absolute"
            style={{
                top,
                width: size,
                height: size / 2,
                backgroundImage:
                    "url('https://www.anglingdirect.co.uk/media/species_guide/species/image/a/t/atlantic-bluefin-tuna-thunnus-thynnus.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                animation: `${animationName} ${speed}s linear infinite`,
            }}
        />
    );
};

export {Fish}

export default function App() {
    return (
        <div className="relative w-screen h-screen bg-blue-500 overflow-hidden">
            <Fish top="10%" speed={12} direction="right" />
            <Fish top="40%" speed={18} direction="left" />
            <Fish top="70%" speed={10} direction="right" />

            <h1 className="text-white text-center text-4xl pt-24">
                AquaTech Mission 104
            </h1>
        </div>
    );
}