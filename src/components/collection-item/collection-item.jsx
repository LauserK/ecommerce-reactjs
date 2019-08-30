import React from "react";
import "./collection-item.scss";

import "../custom-button/custom-button";
import { CustomButton } from "../custom-button/custom-button";

export const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton inverted> add to cart</CustomButton>
  </div>
);
