import React from "react";
import { Link } from "react-router-dom";

const EmptyCartMsg = () => {
  return (
    <div className="errMsg" style={{ textAlign: "center" }}>
      <div className="emptyCart">
        <img
          src="./src/images/empty-bag.png"
          className="imgEmptyCart"
          alt="Empty Cart"
        />
        <div className="fw-bold">Hey, it feels so light!</div>
        <div className="emptyCart-description">
          There is nothing in your bag. Let's add some items.
        </div>
        <br />
        <Link to="/">
          <button type="button" className="btn btn-outline-info">
            Add Items
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCartMsg;
