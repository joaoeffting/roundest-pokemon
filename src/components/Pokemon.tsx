import React from "react";
import Image from "next/image";

const Pokemon = ({
  imageSrc,
  alt,
  name,
}: {
  imageSrc: string;
  alt: string;
  name: string;
}) => {
  return (
    <div className="w-64 h-64 flex flex-col">
      <Image
        src={imageSrc}
        alt={alt}
        layout="responsive"
        width={96}
        height={96}
        className="w-full"
      />
      <div className="text-xl text-center capitalize mt-[-2rem]">{name}</div>
    </div>
  );
};

export default Pokemon;
