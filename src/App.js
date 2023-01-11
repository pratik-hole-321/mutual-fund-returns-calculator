import "./App.css";
import React, { useState } from "react";
import MonthlyInvest from "./components/MonthlyInvest";
import Header from "./components/Header";
import ExpectedReturnRate from "./components/ExpectedReturnRate";
import TimePeriod from "./components/TimePeriod";
import DoughnutChart from "./components/DoughnutChart";

function App() {
  const [invest, setInvest] = useState(25000);
  const [returns, setReturns] = useState(12);
  const [year, setYear] = useState(10);

  const fetchInvest = (invest) => {
    setInvest(invest);
  };
  const fetchReturns = (returns) => {
    setReturns(returns);
  };
  const fetchPeriod = (years) => {
    setYear(years);
  };

  let expectedReturnPerMonth = returns / (12 * 100);
  let totalMonth = 12 * year;
  let totalValue =
    invest *
    (((1 + expectedReturnPerMonth) ** totalMonth - 1) /
      expectedReturnPerMonth) *
    (1 + expectedReturnPerMonth);
  let investedAmount = invest * totalMonth;
  let estReturns = totalValue - investedAmount;

  return (
    <>
      {/* <h3>Monthly Investment - {invest}</h3>
      <h3>Expected Returns - {returns}</h3>
      <h3>Time Period - {year}</h3>
      <h3>Invested Amount - {investedAmount}</h3>
      <h3>Estimated Returns - {estReturns}</h3>
      <h3>Total Value - {totalValue}</h3> */}
      <div className="container-fluid">
        <div className="container mt-3 border border-primary rounded">
          <h1 className="d-flex justify-content-center fs-3 pt-2">
            Mutual Fund Returns Calculator
          </h1>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col m-2">
                  <Header />
                </div>
              </div>

              <div className="row">
                <div className="col m-3">
                  <MonthlyInvest handle={fetchInvest} />
                </div>
              </div>
              <div className="row">
                <div className="col m-3">
                  <ExpectedReturnRate handleReturns={fetchReturns} />
                </div>
              </div>
              <div className="row">
                <div className="col m-3">
                  <TimePeriod handleYear={fetchPeriod} />
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between m-2">
                  <span className="fs-5">Invested amount</span>
                  <span className="fs-5">
                    {investedAmount.toLocaleString("en-IN", {
                      maximumFractionDigits: 0,
                      style: "currency",
                      currency: "INR",
                    })}
                  </span>
                </div>
                <div className="d-flex justify-content-between m-2">
                  <span className="fs-5">Est. returns</span>
                  <span className="fs-5">
                    {estReturns.toLocaleString("en-IN", {
                      maximumFractionDigits: 0,
                      style: "currency",
                      currency: "INR",
                    }) + ".00"}
                  </span>
                </div>
                <div className="d-flex justify-content-between m-2">
                  <h4>Total value</h4>
                  <h4>
                    {totalValue.toLocaleString("en-IN", {
                      maximumFractionDigits: 0,
                      style: "currency",
                      currency: "INR",
                    }) + ".00"}
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 d-md-flex mt-4 justify-content-center"
              style={{ height: "400px" }}
            >
              <DoughnutChart data1={investedAmount} data2={estReturns} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
