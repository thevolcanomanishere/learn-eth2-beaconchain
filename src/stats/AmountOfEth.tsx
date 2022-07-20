import { useQuery, gql } from "urql";

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

export const AmountOfEth = () => {
  const [result, reexecuteQuery] = useQuery({
    query: GET_VALIDATORS,
  });

  const { data, fetching, error } = result;

  const validators = data?.ethereum2?.deposits[0]?.validators;
  console.log(validators);
  return (
    <div className="flex justify-center items-center">
      <h3>{validators}</h3>
    </div>
  );
};
