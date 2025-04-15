import React, { useState, useEffect } from "react";

const MonthlyInvest = ({ handle }) => {
  const [invest, setInvest] = useState(25000);

  useEffect(() => {
    handle(invest);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invest]);

  const eventHandler = (event) => {
    let value = event.target.value;

    // Prevent empty or below-minimum value
    if (value === "" || +value < 500) {
      value = 500;
    }

    // Clamp to max 100000
    if (+value > 100000) {
      value = 100000;
    }

    setInvest(value);
  };

  return (
    <div className="monthly-range m-1 mb-3">
      <input
        type="range"
        className="form-range text-primary"
        min="500"
        max="100000"
        step="500"
        value={+invest}
        onChange={eventHandler}
        id="customRange2"
      />
      <div className="d-flex justify-content-between align-items-center">
        <label htmlFor="customRange2" className="form-label">
          Monthly Investment
        </label>
        <input
          type="number"
          min="500"
          max="100000"
          step="500"
          className="input-responsive"
          value={invest}
          onChange={eventHandler}
        />
      </div>
    </div>
  );
};

export default MonthlyInvest;
