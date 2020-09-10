import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div
            className="col-10 mt-2 ml-sm-5
                    ml-md-auto col-sm-8 text-capitalize text-right"
          >
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase
                        mb-3 px-5"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </Link>
            <h5>
              <span className="text-title">
                Subtotal : <span>$ {cartSubTotal}</span>
              </span>
            </h5>
            <h5>
              <span className="text-title">
                Tax : <span>$ {cartTax}</span>
              </span>
            </h5>
            <h5>
              <span className="text-title">
                Total : <span>$ {cartTotal}</span>
              </span>
            </h5>
            <Link to="/">
              <button
                className="btn btn-primary text-uppercase
                        mb-3 px-5"
                onClick={() => clearCart()}
              >
                Proceed for Payment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
