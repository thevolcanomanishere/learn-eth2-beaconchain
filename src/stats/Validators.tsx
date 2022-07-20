import { useQuery, gql } from "urql";
import StatBox from "../components/StatBox";
import StatTitle from "../components/StatTitle";

const GET_VALIDATORS = gql`
  {
    ethereum2 {
      deposits {
        count
        amount
        validators: count(uniq: validators)
      }
    }
  }
`;

export const Validators = () => {
  const [result, reexecuteQuery] = useQuery({
    query: GET_VALIDATORS,
  });

  const { data, fetching, error } = result;

  const validators = data?.ethereum2?.deposits[0]?.validators;
  console.log(validators);
  return (
    <StatBox>
      <StatTitle title="Number Of Active Validators" />
      <p className="text-3xl font-bold">{validators}</p>
    </StatBox>
  );
};
