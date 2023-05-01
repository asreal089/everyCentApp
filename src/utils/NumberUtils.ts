
export default function formatMoney(number : number) :string{
    const fixedNumber = number.toFixed(2);
    const integerPart = fixedNumber.split('.')[0];
    const decimalPart = fixedNumber.split('.')[1];
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    return `$${formattedInteger}.${decimalPart}`;
}