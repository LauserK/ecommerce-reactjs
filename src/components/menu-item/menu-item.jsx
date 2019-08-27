import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.scss";
export const MenuItem = withRouter(
  ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="content">
        <h2 className="title">{title.toUpperCase()}</h2>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
);
