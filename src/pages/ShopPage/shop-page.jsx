import React, { Component } from "react";
import SHOP_DATA from "./shopdata";

import { CollectionPreview } from "../../components/collection-preview/collection-preview";

class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview
            key={id}
            {...otherCollectionProps}
          ></CollectionPreview>
        ))}
      </div>
    );
  }
}

export default ShopPage;
