import Balance from "../bank_features/Balance";
import MoneyMovesContainer from "../bank_features/MoneyMovesContainer";

function BankContent() {
  return (
    <main className="app">
      <Balance />
      <MoneyMovesContainer />
    </main>
  );
}

export default BankContent;
