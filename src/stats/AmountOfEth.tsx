import { useEffect, useMemo, useState } from "react";
import { useQuery, gql } from "urql";
import StatBox from "../components/StatBox";
import StatTitle from "../components/StatTitle";
import { getPriceOfEth, makeReadable } from "../utils";

const GET_ETH = gql`
  {
    ethereum2 {
      deposits {
        amount
      }
    }
  }
`;

export const AmountOfEth = () => {
  const [result, reexecuteQuery] = useQuery({
    query: GET_ETH,
  });
  const { data, fetching, error } = result;
  const [ethInDollars, setEthInDollars] = useState<string>("Fetching");

  const amount = data?.ethereum2?.deposits[0]?.amount
    ? makeReadable(data?.ethereum2?.deposits[0]?.amount.toString())
    : "Fetching";

  useEffect(() => {
    (async () => {
      const price = await getPriceOfEth();
      const ethInDollars = `$${(data?.ethereum2?.deposits[0]?.amount * price)
        .toFixed(2)
        .toString()}`;
      const readable = makeReadable(ethInDollars);
      setEthInDollars(readable);
    })();
  }, [data]);
  return (
    <StatBox>
      <StatTitle title="ETH deposited" />
      <div className="m-auto">
        <p className="text-3xl font-bold">{amount}</p>
      </div>
    </StatBox>
  );
};
