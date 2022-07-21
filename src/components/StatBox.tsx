import React from "react";
import StatTitle from "./StatTitle";

interface IStatBox {
  children: JSX.Element | JSX.Element[];
  extraClasses?: string;
}

const StatBox: React.FC<IStatBox> = ({ children, extraClasses }: IStatBox) => {
  const classes = `flex flex-col h-full border-2 rounded-lg shadow-xl mb-10 ${extraClasses}`;
  return <div className={classes}>{children}</div>;
};

export default StatBox;
