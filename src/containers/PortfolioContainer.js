import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.portfolioStocks.map(stock => <Stock key={stock.id} compName={stock.name} price={stock.price} getStocks={this.props.getStocks}/>)
            //render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
