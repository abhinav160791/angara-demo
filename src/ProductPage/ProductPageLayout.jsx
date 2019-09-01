import React from 'react';
import ProductImageContainer from "./ProductImageContainer";
import SizeContainer from "./SizeContainer";
import ProductPriceContainer from "./ProductPriceContainer";
import ProductVariants from "./ProductVariants";
import FloatingCart from "../CartPage/FloatingCart";
var img_arr=['https://images-na.ssl-images-amazon.com/images/I/61cyirj%2B8oL._UY395_.jpg','https://images-na.ssl-images-amazon.com/images/I/61AT0qIeGjL._UY395_.jpg','https://images-na.ssl-images-amazon.com/images/I/71qANItZ36L._UY500_.jpg','https://images-na.ssl-images-amazon.com/images/I/61LG%2BiqQFTL._UY395_.jpg'];

export default class ProductPageLayout extends React.Component {
  
  constructor(props) {
        super(props);
        this.state={show_cart:'', size:'7.5', productData:{}, product_img:'https://images-na.ssl-images-amazon.com/images/I/71qANItZ36L._UY500_.jpg', product_mrp:'', product_selling_price:'',product_discount_percent:'',currency:'', quality:'best', weight:'1.10', metal:'white gold',available_sizes:''}
        this.updateCaratWeight = this.updateCaratWeight.bind(this);
        this.updateMetaltype = this.updateMetaltype.bind(this);
        this.updateStoneQuality = this.updateStoneQuality.bind(this);
        this.updateSize = this.updateSize.bind(this);
        this.updatePriceAndImage = this.updatePriceAndImage.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.closeCart = this.closeCart.bind(this);
    }
  
    componentDidMount() {
        fetch(process.env.PUBLIC_URL+"/dummy.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({productData:result, product_images:result.images, product_mrp:result.mrp, product_selling_price:result.selling_price,product_discount_percent:result.discount_percent, currency:result.currency,available_sizes:result.sizes});
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    updateStoneQuality(e,quality){
        this.setState({quality:quality})
        this.updatePriceAndImage();
    }
    updateMetaltype(e,metal){
        this.setState({metal:metal})
        this.updatePriceAndImage();
    }
    updateCaratWeight(e,weight){
        this.setState({weight:weight});
        this.updatePriceAndImage();
    }
    updateSize(e,size){
        this.setState({size:size});
    }
    updatePriceAndImage(){
        this.setState({product_img:this.getImagesUrl(),product_selling_price:Math.floor(Math.random() * 2.5*1000) + 1,product_mrp:Math.floor(Math.random() * 2.5*1000) + 1,product_discount_percent:Math.floor(Math.random() *10)})
    }
    getImagesUrl(){
        var min = Math.ceil(0);
        var max = Math.floor(3);
        return img_arr[Math.floor(Math.random() * (max - min + 1)) + min];
    }
    addToCart(){
        var data={
            "carat":this.state.weight,
            "stone":this.state.quality,
            "metal":this.state.metal,
            "size":this.state.size
        }
        console.log(data);
        this.setState({show_cart:true});
    }
    closeCart(){
        this.setState({show_cart:false});  
    }
    render(){
        return(
            <>
                <main class="mdl-layout__content width-100-percent">
                    <div class="product_section mdl-grid">
                        <ProductImageContainer product_name={this.state.productData.name} product_img={this.state.product_img}/>
                        <ProductPriceContainer product_mrp={this.state.product_mrp} product_selling_price={this.state.product_selling_price} product_discount_percent={this.state.product_discount_percent} currency={this.state.currency}/>
                        <ProductVariants product_variants={this.state.productData.variants} updateCaratWeight={this.updateCaratWeight} updateMetaltype={this.updateMetaltype} updateStoneQuality={this.updateStoneQuality} updatePriceAndImage={this.updatePriceAndImage}/>
                        <SizeContainer sizes={this.state.available_sizes} updateSize={this.updateSize}/>
                        <div className="add_to_cart_wrapper mdl-cell--4-col-phone width-100-percent">
                            <button class="add_to_cart_btn mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect width-100-percent" onClick={this.addToCart}>
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                    <FloatingCart closeCart={this.closeCart} show_cart={this.state.show_cart} name={this.state.productData.name} size={this.state.size} quality={this.state.quality} weight={this.state.weight} metal={this.state.metal} />
                </main>
            </>
        )
    }
}