import React from 'react';

export default class ProductPriceContainer extends React.Component {
  
  constructor(props) {
    super(props);
  }

    render(){
        return(
            <>
                <div className="product_price_container mdl-cell--4-col-phone">
                    <span className="product_price">{this.props.currency}{this.props.product_selling_price}</span>
                    <span className="discounted_price">{this.props.currency}{this.props.product_mrp}</span>
                    <span className="discount_percent">({this.props.product_discount_percent}% off)</span>
                </div>
                <div className="product_price_container mdl-cell--4-col-phone">
                    Or <span className="pink_color">$632.67</span> x 3 Interest Free Payments 
                </div>
            </>
        )
    }
}