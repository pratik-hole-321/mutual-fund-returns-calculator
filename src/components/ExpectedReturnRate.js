import React, { useState, useEffect } from "react";

const ExpectedReturnRate = ({ handleReturns }) => {
  const [returns, setReturns] = useState(12);

  useEffect(() => {
    handleReturns(returns);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [returns]);

  const eventHandler = (event) => {
    let value = event.target.value;

    // Prevent empty input
    if (value === "" || parseFloat(value) < 1) {
      value = 1;
    }

    // Limit to max 30
    if (parseFloat(value) > 30) {
      value = 30;
    }

    setReturns(value);
  };

  return (
    <div className="monthly-range m-1 mb-3">
      <input
        type="range"
        className="form-range text-primary"
        min="1"
        max="30"
        step="1"
        value={returns}
        onChange={eventHandler}
        id="customRange2"
      />
      <div className="d-flex justify-content-between align-items-center">
        <label htmlFor="customRange2" className="form-label">
          Expected Returns
        </label>
        <input
          type="number"
          min="1"
          max="30"
          step="1"
          value={returns}
          className="input-responsive"
          onChange={eventHandler}
        />
      </div>
    </div>
  );
};

export default ExpectedReturnRate;
