import React from "react";

import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-buttom/custom-buttom.components";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropDown;
