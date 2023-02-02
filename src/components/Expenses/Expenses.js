import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredItems = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <li>
      <div className="expenses">
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpensesChart expenses={filteredItems} />
          <ExpensesList expenses={filteredItems} />
        </Card>
      </div>
    </li>
  );
};

export default Expenses;
