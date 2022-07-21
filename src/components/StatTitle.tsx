import React from "react";

interface IStatTitle {
  title: string;
}

const StatTitle = ({ title }: IStatTitle) => {
  return <h3 className="text-xl m-2 border-b">{title}</h3>;
};

export default StatTitle;
