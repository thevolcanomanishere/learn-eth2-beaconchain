import axios from "axios";

const ETH_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

export const getPriceOfEth = async () => {
  const result = await axios.get(
    `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`
  );
  return result.data.ethereum.usd;
};

export const makeReadable = (value: string | number) => {
  value = value.toString();
  if (!value.includes(".")) return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const seperateStringByDecimal = value.split(".");
  const formattedAmount = seperateStringByDecimal[0].replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );
  return formattedAmount + "." + seperateStringByDecimal[1];
};
