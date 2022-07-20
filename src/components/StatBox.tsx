import React from "react";
import StatTitle from "./StatTitle";

interface IStatBox {
  children: JSX.Element | JSX.Element[];
}

const StatBox: React.FC<any> = ({ children }: IStatBox) => {
  return <div className="w-[300px] h-[300px] border">{children}</div>;
};

export default StatBox;
