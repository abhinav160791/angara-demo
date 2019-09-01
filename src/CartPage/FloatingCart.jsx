import React from 'react';

export default class FloatingCart extends React.Component {
  
    constructor(props){
        super(props);
        this.closeFloatingCart = this.closeFloatingCart.bind(this);
    }

    closeFloatingCart(){
        this.props.closeCart();
    }
    
    render(){
        return(
            <div className={this.props.show_cart?'flex-center floating_cart_wrapper':'flex-center floating_cart_wrapper none'}>
                <div className="floating_cart_container width-100-percent mdl-cell--4-col-phone padding-15">
                    <span className="close_btn" onClick={this.closeFloatingCart}>X CLOSE</span>
                    <h5 className="m-l-10">Item(s) in your cart</h5>
                    <div className="name">
                        <span className="prop_name"> Product Name: </span><span className="prop_value">{this.props.name}</span>
                    </div>
                    <div className="carat">
                        <span className="prop_name">Carat Weight: </span><span className="prop_value">{this.props.weight}</span>
                    </div>
                    <div className="stone">
                        <span className="prop_name">Stone Quality: </span><span className="prop_value">{this.props.quality}</span>
                    </div>
                    <div className="metal">
                        <span className="prop_name">Metal Type: </span><span className="prop_value">{this.props.metal}</span>
                    </div>
                    <div className="size">
                        <span className="prop_name">Ring Size: </span><span className="prop_value">{this.props.size}</span>
                    </div>
                    <button class="add_to_cart_btn variant_details_container mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect width-100-percent">
                        MAKE PAYMENT
                    </button>
                </div>
            </div>
        )
    }
}