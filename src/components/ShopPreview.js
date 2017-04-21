import React from 'react';

export default class ShopPreview extends React.Component {
  render() {
    return (
      <div>
        <img src={`/img/${this.props.img}`}/>
        <p>{this.props.name}</p>
        <p>{this.props.shopType}</p>
      </div>
    );
  }
}
