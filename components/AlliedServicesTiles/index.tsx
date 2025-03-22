import React from "react";

interface AlliedServiceTileProps {
  Icon: React.ElementType;
  name: string;
  className?: string;
}

const AlliedServiceTile: React.FC<AlliedServiceTileProps> = ({
  name,
  Icon,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center w-[30vw] h-24 min-w-fit gap-8 my-4 p-4 md:w-[50vw] sm:w-[90vw]  bg-white/3 shadow-lg rounded-lg cursor-pointer
            transition-all hover:scale-105 ${className}`}
    >
      <div className="text-4xl">
        <Icon />
      </div>

      <h2 className="text-xl font-semibold">{name}</h2>
    </div>
  );
};

export default AlliedServiceTile;
