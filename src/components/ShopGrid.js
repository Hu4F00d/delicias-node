import React from 'react';
import ShopPreview from './ShopPreview';

export default class ShopGrid extends React.Component {
  render() {
    return (
      <div>
        {this.props.shops.map((shop) => {
          return <ShopPreview key={shop.id} {...shop}/>})
        }
      </div>
    );
  }
}
