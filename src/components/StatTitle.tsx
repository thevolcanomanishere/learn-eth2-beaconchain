import React from "react";

interface IStatTitle {
  title: string;
}

const StatTitle = ({ title }: IStatTitle) => {
  return <h3 className="underline">{title}</h3>;
};

export default StatTitle;
