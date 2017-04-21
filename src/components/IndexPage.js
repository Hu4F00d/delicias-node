import React from 'react';
import ShopGrid from './ShopGrid';

import shops from '../data/shops';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <ShopGrid shops={shops}/>
      </div>
    );
  }
}
