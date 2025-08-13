"use client";
import Link from "next/link";
import { ReactNode, useState } from "react";

interface IButton {
  loaderType?: "loader" | "white-loader" | "brown-loader";
  text: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
  link?: any;
  className?: string;
  iconClassName?: string;
}

export default function Button({
  loaderType = "loader",
  text,
  loading = false,
  disabled = false,
  onClick,
  icon,
  type = "submit",
  className = "bg-white w-full text-white rounded-sm py-2 px-4  font-bold cursor-pointer",
  link,
  iconClassName,
}: IButton) {
  const [linkLoading, setLinkLoading] = useState<any>(false);
  return (
    <>
      {link ? (
        <Link
          onClick={() => setLinkLoading(true)}
          href={link}
          className={` hover:scale-105  capitalize whitespace-nowrap font-bold transition-all duration-500 p-2   flex items-center justify-center gap-2 ${className}`}
        >
          {icon}

          {text}
          {(loading || linkLoading) && <p className={`${loaderType} ml-2`}></p>}
        </Link>
      ) : (
        <button
          type={type}
          disabled={loading || disabled}
          onClick={onClick}
          className={` ${className} hover:scale-105 whitespace-nowrap  transition-all duration-500     flex items-center justify-center gap-2 `}
        >
          <p className={iconClassName}>{icon}</p>
          {text}
          {loading && <p className={`${loaderType} text-white ml-2`}></p>}{" "}
        </button>
      )}
    </>
  );
}
