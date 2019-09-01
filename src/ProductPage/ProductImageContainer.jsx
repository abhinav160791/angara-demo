import React from 'react';

export default class ProductImageContainer extends React.Component {
  
  constructor(props) {
    super(props);
  }

    render(){
        return(
            <>
            <div className="product_name mdl-cell--4-col-phone">
                {this.props.product_name}
            </div>
            <div className="product_img_container mdl-cell--4-col-phone">
                <img className="width-100-percent" src={this.props.product_img}/>
            </div>
            </>
        )
    }
}