/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const TimePeriod = ({ handleYear }) => {
  const [period, setPeriod] = useState(10);

  useEffect(() => {
    handleYear(period);
  }, [period]);

  const eventHandler = (event) => {
    let value = event.target.value;

    // Prevent empty input or below min
    if (value === "" || +value < 1) {
      value = 1;
    }

    // Clamp to max
    if (+value > 30) {
      value = 30;
    }

    setPeriod(value);
  };

  return (
    <div className="monthly-range m-1 mb-3">
      <input
        type="range"
        className="form-range text-primary"
        min="1"
        max="30"
        step="1"
        value={+period}
        onChange={eventHandler}
        id="customRange2"
      />
      <div className="d-flex justify-content-between align-items-center">
        <label htmlFor="customRange2" className="form-label">
          Time Period
        </label>
        <input
          type="number"
          className="input-responsive"
          value={period}
          min="1"
          max="30"
          step="1"
          onChange={eventHandler}
        />
      </div>
    </div>
  );
};

export default TimePeriod;
