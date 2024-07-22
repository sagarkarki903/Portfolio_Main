import { useState } from "react";

export default function Buttons() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <button onClick={() => setIsOpen(!isOpen)} className="bg-rose-500">
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>
      <div
        className={`h-screen w-full bg-green-800 flex justify-center fixed top-0 md:hidden origin-top duration-500 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col justify-center gap-y-4">
          <li>About</li>
          <li>Experiences</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div> */}
    </>
  );
}
