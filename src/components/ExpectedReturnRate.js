import React, { useState, useEffect } from "react";

const ExpectedReturnRate = ({ handleReturns }) => {
  const [returns, setReturns] = useState(12);
  useEffect(() => {
    handleReturns(returns);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [returns]);

  const eventHandler = (event) => {
    console.log(event);
    setReturns(event.target.value);
    // setReturns(event.target.value);
    // if (event.target.value >= 0.1 && event.target.value <= 30) {
    //   setReturns(event.target.value);
    // }
    // if (event.target.value < 0.1) {
    //   setReturns(0.1);
    // }
    if (event.target.value > 30) {
      setReturns(30);
    }
  };

  return (
    <>
      <div className="monthly-range m-1 mb-3">
        <input
          type="range"
          className="form-range
                      text-primary"
          min="0"
          max="30"
          step="0.1"
          value={+returns}
          onChange={(e) => eventHandler(e)}
          id="customRange2"
        />
        <div className=" d-flex justify-content-between align-items-center">
          <label htmlFor="customRange2" className="form-label">
            Expected Returns
          </label>

          <input
            type="text"
            value={returns}
            className="input-responsive"
            onChange={(e) => eventHandler(e)}
          />
        </div>
      </div>
    </>
  );
};

export default ExpectedReturnRate;
