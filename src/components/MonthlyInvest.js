import React, { useState, useEffect } from "react";

const MonthlyInvest = ({ handle }) => {
  const [invest, setInvest] = useState(25000);

  useEffect(() => {
    handle(invest);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invest]);

  const eventHandler = (event) => {
    setInvest(event.target.value);
    if (+event.target.value > 100000) {
      setInvest(100000);
    }
  };

  return (
    <>
      <div className="monthly-range m-1 mb-3">
        <input
          type="range"
          className="form-range
                      text-primary "
          min="500"
          max="100000"
          step="500"
          value={+invest}
          onChange={(e) => eventHandler(e)}
          id="customRange2"
        />
        <div className=" d-flex justify-content-between align-items-center">
          <label htmlFor="customRange2" className="form-label">
            Monthly Investment
          </label>
          <input
            type="text"
            className="input-responsive"
            value={invest}
            onChange={(e) => eventHandler(e)}
          />
        </div>
      </div>
    </>
  );
};

export default MonthlyInvest;
