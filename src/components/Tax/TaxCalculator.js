import {
  ReceiptContainer,
  ReceiptBody,
  ReceiptTitle,
  Items,
} from "./TaxCalculator.styled";

const TaxCalculator = ({ item }) => {
  let notTaxable = ["book", "chocolate", "pills", "chocolates"];
  let splitted = [];
  let value;
  let total = 0;
  let taxedValue = 0;
  let sumValue = 0;
  let tax = 0;
  let newString = "";
  let today = new Date().toLocaleDateString();

  const calculateTax = (str) => {
    splitted = str.split(" ");
    value = parseFloat(splitted.slice(-1));

    if (
      splitted.some((p) => notTaxable.includes(p)) === false &&
      splitted.includes("imported")
    ) {
      taxedValue = value + value * 0.15;
    } else if (splitted.some((p) => notTaxable.includes(p)) === false) {
      taxedValue = value + value * 0.1;
    } else if (splitted.includes("imported")) {
      taxedValue = value + value * 0.05;
    } else {
      taxedValue = value;
    }
    taxedValue = Number(
      (Math.round((taxedValue + Number.EPSILON) * 100) / 100).toFixed(2)
    );

    total += taxedValue;
    sumValue += value;
    tax = Number(Math.round((total - sumValue) * 20) / 20).toFixed(2);
  };

  const removeValue = (str) => {
    let lastIndex = str.lastIndexOf(" ");
    newString = str.substring(0, lastIndex);
  };

  return (
    <ReceiptContainer>
      <ReceiptTitle>Itemis AG</ReceiptTitle>
      <ReceiptTitle>
        Niederlassung Lünen Am Brambusch 15 44536 Lünen
      </ReceiptTitle>
      <ReceiptBody>
        {item.input?.map((str) => {
          calculateTax(str);
          removeValue(str);
          return (
            <div>
              <Items>{newString}</Items>
              <Items>{taxedValue}</Items>
            </div>
          );
        })}
        <Items>Tax: {tax}</Items>
        <Items>Total: {total}</Items>
      </ReceiptBody>
      <footer>{today}</footer>
    </ReceiptContainer>
  );
};

export default TaxCalculator;
