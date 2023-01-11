/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const TimePeriod = ({ handleYear }) => {
  const [period, setPeriod] = useState(10);
  useEffect(() => {
    handleYear(period);
  }, [period]);

  const eventHandler = (event) => {
    if (event.target.value >= 1 && event.target.value <= 30) {
      setPeriod(event.target.value);
    }
    if (event.target.value <= 1) {
      setPeriod(1);
    }
    if (event.target.value > 30) {
      setPeriod(30);
    }
  };

  return (
    <>
      <div className="monthly-range m-1 mb-3">
        <input
          type="range"
          className="form-range
                      text-primary"
          min="1"
          max="30"
          step="1"
          value={+period}
          onChange={(e) => eventHandler(e)}
          id="customRange2"
        />
        <div className=" d-flex justify-content-between align-items-center">
          <label htmlFor="customRange2" className="form-label">
            Time Period
          </label>
          <input
            type="number"
            className=" input-responsive"
            value={+period}
            min="1"
            max="30"
            step="1"
            onChange={(e) => eventHandler(e)}
            htmlFor="customRange2"
          />
        </div>
      </div>
    </>
  );
};

export default TimePeriod;
