import MoneyMove from "./MoneyMove";

function MoneyMovesContainer() {
  const testMoneyMoves = [200, 450, -400, 3000, -650, -130, 70, 1300];
  return (
    <div className="movements">
      {testMoneyMoves.map((transaction, i) => (
        <MoneyMove key={i} value={transaction} />
      ))}
    </div>
  );
}

export default MoneyMovesContainer;
