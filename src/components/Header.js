import React from "react";

const Header = () => {
  return (
    <>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          defaultChecked
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <label
          className="form-check-label fs-5 fw-bolder"
          htmlFor="inlineRadio1"
          defaultChecked="true"
        >
          SIP
        </label>
      </div>
    </>
  );
};

export default Header;
