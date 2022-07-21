import { gql, useQuery } from "urql";
import StatBox from "../components/StatBox";
import StatTitle from "../components/StatTitle";
import { makeReadable } from "../utils";

const ACTIVE_VALIDATORS = gql`
  {
    ethereum2 {
      deposits {
        validators: count(uniq: validators)
      }
    }
  }
`;

export const Validators = () => {
  const [result, reexecuteQuery] = useQuery({
    query: ACTIVE_VALIDATORS,
  });
  const { data, fetching, error } = result;

  const validators = data?.ethereum2?.deposits[0]?.validators
    ? makeReadable(data?.ethereum2?.deposits[0]?.validators.toString())
    : "Fetching";
  return (
    <StatBox>
      <StatTitle title="Active Validators" />
      <div className="m-auto">
        <p className="text-3xl font-bold">{validators}</p>
      </div>
    </StatBox>
  );
};
