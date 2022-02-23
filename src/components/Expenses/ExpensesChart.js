import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const monthsfunc = (monthnum) => {
    return {
      label: new Date(2019, monthnum).toLocaleString("pt-BR", { month: "short" }),
      value: 0,
    }
  }
  const expenseData = [...Array(12).keys()].map(monthsfunc);
  props.expenses.forEach((e) => {
    expenseData[e.date.getMonth()].value += e.amount;
  });
  return <Chart dataPoints={expenseData}></Chart>;
};
export default ExpensesChart;
