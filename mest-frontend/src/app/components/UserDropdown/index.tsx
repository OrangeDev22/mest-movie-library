"use client";
import React, { useState, useRef } from "react";
import { getUserDropdownItems } from "./utils";
import Link from "next/link";

type UserDropdownProps = {
  children: React.ReactNode;
};

function UserDropdown({ children }: UserDropdownProps) {
  const items = getUserDropdownItems();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => setIsOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div onClick={handleToggleDropdown} className="cursor-pointer">
        {children}
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
          <ul className="py-2">
            {items.map((item, index) => (
              <Link
                key={index}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                  item.className || "text-gray-700"
                }`}
                href={item.url}
                onClick={() => setIsOpen(false)}
              >
                {item.text}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserDropdown;
