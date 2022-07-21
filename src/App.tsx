import reactLogo from "./assets/react.svg";
import "./App.css";
import StatBox from "./components/StatBox";
import React from "react";
import { createClient, Provider } from "urql";
import Stats from "./stats";

const client = createClient({
  url: "https://graphql.bitquery.io/",
  fetchOptions: () => {
    return {
      headers: {
        "X-API-Key": import.meta.env.VITE_QUERY,
      },
    };
  },
});

const App = () => {
  return (
    <Provider value={client}>
      <div className="flex-row justify-center">
        <h1 className="text-3xl font-bold">Ethereum Beacon Chain Stats 📊</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-5">
          {Stats.map((stat, index) => (
            <div key={index}>{React.createElement(stat)}</div>
          ))}
        </div>
      </div>
    </Provider>
  );
};

export default App;
