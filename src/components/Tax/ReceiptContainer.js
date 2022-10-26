import TaxCalculator from "./TaxCalculator";
import data from "../../data.json";
import { MainContainer } from "./ReceiptContainer.styled";

const ReceiptContainer = () => {
  return (
    <MainContainer>
      {data &&
        data.map((item) => {
          return <TaxCalculator key={item.id} item={item} />;
        })}
    </MainContainer>
  );
};

export default ReceiptContainer;
