function MoneyMove({ value }) {
  const transactionType = value < 0 ? "withdrawal" : "deposit";
  return (
    <div className="movements__row">
      <div className={`movements__type movements__type--${transactionType}`}>
        {`1 ${transactionType}`}
      </div>
      <div className="movements__date">24/01/2037</div>
      <div className="movements__value">{`${
        value < 0 ? `-$${Math.abs(value).toFixed(2)}` : `$${value.toFixed(2)}`
      }`}</div>
    </div>
  );
}

export default MoneyMove;
