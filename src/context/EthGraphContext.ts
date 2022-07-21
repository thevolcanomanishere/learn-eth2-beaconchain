import { createContext } from "react";

export interface IEthGraphContext {
  graphInfo: any;
}

const EthGraphContext = createContext<IEthGraphContext | undefined>(
  {} as IEthGraphContext
);

export default EthGraphContext;
