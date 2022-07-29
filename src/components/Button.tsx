import React from "react";

const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button
      type="button"
      className="mt-10 py-2.5 px-5 mr-2 mb-2 text-sm font-medium bg-gray-800 focus:outline-none rounded-lg border hover:bg-gray-700  focus:z-10 focus:ring-4"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
