(window["webpackJsonpabhinav-work"]=window["webpackJsonpabhinav-work"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),s=a.n(c),i=(a(14),a(15),a(2)),r=a(3),o=a(6),u=a(4),p=a(5),m=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"mdl-layout mdl-js-layout mdl-layout--fixed-header"},l.a.createElement("header",{class:"mdl-layout__header"},l.a.createElement("div",{class:"mdl-layout__header-row"},l.a.createElement("span",{className:"search_icon"},l.a.createElement("i",{class:"material-icons m-r-15"},"search")),l.a.createElement("span",{class:"mdl-layout-title"},"Angara Logo Here"),l.a.createElement("span",{className:"call_icon m-l-20"},l.a.createElement("i",{class:"material-icons"},"phone")),l.a.createElement("span",{className:"cart_icon m-l-20 m-r-15"},l.a.createElement("i",{class:"material-icons"},"shopping_cart")),l.a.createElement("div",{class:"mdl-layout-spacer"}),l.a.createElement("nav",{class:"mdl-navigation mdl-layout--large-screen-only"},l.a.createElement("a",{class:"mdl-navigation__link",href:""},"Link"),l.a.createElement("a",{class:"mdl-navigation__link",href:""},"Link"),l.a.createElement("a",{class:"mdl-navigation__link",href:""},"Link"),l.a.createElement("a",{class:"mdl-navigation__link",href:""},"Link")))),l.a.createElement("div",{class:"mdl-layout__drawer"},l.a.createElement("span",{class:"mdl-layout-title"},"Title"),l.a.createElement("nav",{class:"mdl-navigation"},l.a.createElement("a",{class:"mdl-navigation__link",href:""},"Link"),l.a.createElement("a",{class:"mdl-navigation__link",href:""},"Link"),l.a.createElement("a",{class:"mdl-navigation__link",href:""},"Link"),l.a.createElement("a",{class:"mdl-navigation__link",href:""},"Link"))))}}]),t}(l.a.Component),d=a(1),h=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"product_name mdl-cell--4-col-phone"},this.props.product_name),l.a.createElement("div",{className:"product_img_container mdl-cell--4-col-phone"},l.a.createElement("img",{className:"width-100-percent",src:this.props.product_img})))}}]),t}(l.a.Component),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).populateSizes=a.populateSizes.bind(Object(d.a)(a)),a.selectSize=a.selectSize.bind(Object(d.a)(a)),a.state={default_selected:"7.5"},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"selectSize",value:function(e){this.setState({default_selected:e.target.dataset.size}),this.props.updateSize(e,this.state.default_selected)}},{key:"populateSizes",value:function(){var e=this,t=[];return Array.from(this.props.sizes).map(function(a,n){t.push(l.a.createElement("div",{className:e.state.default_selected==a.size?"selected_quality flex-center size_button":"flex-center size_button","data-variant":a.variant_id,"data-size":a.size,onClick:e.selectSize},a.size))}),l.a.createElement(l.a.Fragment,null,t)}},{key:"render",value:function(){return l.a.createElement("div",{className:"mdl-cell mdl-cell--4-col-phone horizontal-scroll"},l.a.createElement("h5",null,"Select Size:"),l.a.createElement("div",null,"Selected Ring Size: ",this.state.default_selected),l.a.createElement("div",{className:"flex-center size_wrapper"},this.populateSizes()))}}]),t}(l.a.Component),g=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"product_price_container mdl-cell--4-col-phone"},l.a.createElement("span",{className:"product_price"},this.props.currency,this.props.product_selling_price),l.a.createElement("span",{className:"discounted_price"},this.props.currency,this.props.product_mrp),l.a.createElement("span",{className:"discount_percent"},"(",this.props.product_discount_percent,"% off)")),l.a.createElement("div",{className:"product_price_container mdl-cell--4-col-phone"},"Or ",l.a.createElement("span",{className:"pink_color"},"$632.67")," x 3 Interest Free Payments"))}}]),t}(l.a.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={carat_weight:["0.80","1.10","1.90","2.49","4.03"],selected:"1.10"},a.populateCaratWeight=a.populateCaratWeight.bind(Object(d.a)(a)),a.selectCaratWeight=a.selectCaratWeight.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"populateCaratWeight",value:function(){var e=this,t=[];return this.state.carat_weight.forEach(function(a){t.push(l.a.createElement("div",{className:e.state.selected==a?"selected_quality stone_quality flex-center":"stone_quality flex-center","data-quality":a,onClick:e.selectCaratWeight},a," Carats"))}),l.a.createElement(l.a.Fragment,null,t)}},{key:"selectCaratWeight",value:function(e){this.setState({selected:e.target.dataset.quality}),this.props.updateCaratWeight(e,this.state.selected)}},{key:"render",value:function(){return l.a.createElement("div",{className:"flex-center weight_wrapper"},this.populateCaratWeight())}}]),t}(l.a.Component),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={metal_type:["rose gold","yellow gold","white gold","platinum"],selected:"white gold"},a.populateMetalType=a.populateMetalType.bind(Object(d.a)(a)),a.selectMetalType=a.selectMetalType.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"populateMetalType",value:function(){var e=this,t=[];return this.state.metal_type.forEach(function(a){t.push(l.a.createElement("div",{className:e.state.selected==a?"selected_quality stone_quality flex-center":"stone_quality flex-center","data-quality":a,onClick:e.selectMetalType},a))}),l.a.createElement(l.a.Fragment,null,t)}},{key:"selectMetalType",value:function(e){this.setState({selected:e.target.dataset.quality}),this.props.updateMetaltype(e,this.state.selected)}},{key:"render",value:function(){return l.a.createElement("div",{className:"flex-center weight_wrapper"},this.populateMetalType())}}]),t}(l.a.Component),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={quality:["good","better","best","heirloom"],selected:"best"},a.populateStoneQuality=a.populateStoneQuality.bind(Object(d.a)(a)),a.selectStoneQuality=a.selectStoneQuality.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"populateStoneQuality",value:function(){var e=this,t=[];return this.state.quality.forEach(function(a){t.push(l.a.createElement("div",{className:e.state.selected==a?"selected_quality stone_quality flex-center":"stone_quality flex-center","data-quality":a,onClick:e.selectStoneQuality},a))}),l.a.createElement(l.a.Fragment,null,t)}},{key:"selectStoneQuality",value:function(e){this.setState({selected:e.target.dataset.quality}),this.props.updateStoneQuality(e,this.state.selected)}},{key:"render",value:function(){return l.a.createElement("div",{className:"flex-center weight_wrapper"},this.populateStoneQuality())}}]),t}(l.a.Component),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={selected:"stone"},a.getProductVariants=a.getProductVariants.bind(Object(d.a)(a)),a.changeVariant=a.changeVariant.bind(Object(d.a)(a)),a.showVariantDetails=a.showVariantDetails.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"getProductVariants",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"stone"==this.state.selected?"selected_variant variant_type flex-center":"variant_type flex-center","data-variant":"stone",onClick:this.changeVariant},"Stone Quality"),l.a.createElement("span",{className:"carat"==this.state.selected?"selected_variant variant_type flex-center":"variant_type flex-center","data-variant":"carat",onClick:this.changeVariant},"Carat Weight"),l.a.createElement("span",{className:"metal"==this.state.selected?"selected_variant variant_type flex-center":"variant_type flex-center","data-variant":"metal",onClick:this.changeVariant},"Metal Type"))}},{key:"showVariantDetails",value:function(){switch(this.state.selected){case"stone":return l.a.createElement(f,{updateStoneQuality:this.props.updateStoneQuality});case"carat":return l.a.createElement(y,{updateCaratWeight:this.props.updateCaratWeight});case"metal":return l.a.createElement(v,{updateMetaltype:this.props.updateMetaltype})}}},{key:"changeVariant",value:function(e){this.setState({selected:e.target.dataset.variant})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mdl-cell mdl-cell--4-col-phone horizontal-scroll variant_containers"},this.getProductVariants()),l.a.createElement("div",{className:"mdl-cell mdl-cell--4-col-phone horizontal-scroll variant_details_container"},this.showVariantDetails()))}}]),t}(l.a.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).closeFloatingCart=a.closeFloatingCart.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"closeFloatingCart",value:function(){this.props.closeCart()}},{key:"render",value:function(){return l.a.createElement("div",{className:this.props.show_cart?"flex-center floating_cart_wrapper":"flex-center floating_cart_wrapper none"},l.a.createElement("div",{className:"floating_cart_container width-100-percent mdl-cell--4-col-phone padding-15"},l.a.createElement("span",{className:"close_btn",onClick:this.closeFloatingCart},"X CLOSE"),l.a.createElement("h5",{className:"m-l-10"},"Item(s) in your cart"),l.a.createElement("div",{className:"name"},l.a.createElement("span",{className:"prop_name"}," Product Name: "),l.a.createElement("span",{className:"prop_value"},this.props.name)),l.a.createElement("div",{className:"carat"},l.a.createElement("span",{className:"prop_name"},"Carat Weight: "),l.a.createElement("span",{className:"prop_value"},this.props.weight)),l.a.createElement("div",{className:"stone"},l.a.createElement("span",{className:"prop_name"},"Stone Quality: "),l.a.createElement("span",{className:"prop_value"},this.props.quality)),l.a.createElement("div",{className:"metal"},l.a.createElement("span",{className:"prop_name"},"Metal Type: "),l.a.createElement("span",{className:"prop_value"},this.props.metal)),l.a.createElement("div",{className:"size"},l.a.createElement("span",{className:"prop_name"},"Ring Size: "),l.a.createElement("span",{className:"prop_value"},this.props.size)),l.a.createElement("button",{class:"add_to_cart_btn variant_details_container mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect width-100-percent"},"MAKE PAYMENT")))}}]),t}(l.a.Component),j=["https://images-na.ssl-images-amazon.com/images/I/61cyirj%2B8oL._UY395_.jpg","https://images-na.ssl-images-amazon.com/images/I/61AT0qIeGjL._UY395_.jpg","https://images-na.ssl-images-amazon.com/images/I/71qANItZ36L._UY500_.jpg","https://images-na.ssl-images-amazon.com/images/I/61LG%2BiqQFTL._UY395_.jpg"],O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={show_cart:"",size:"7.5",productData:{},product_img:"https://images-na.ssl-images-amazon.com/images/I/71qANItZ36L._UY500_.jpg",product_mrp:"",product_selling_price:"",product_discount_percent:"",currency:"",quality:"best",weight:"1.10",metal:"white gold",available_sizes:""},a.updateCaratWeight=a.updateCaratWeight.bind(Object(d.a)(a)),a.updateMetaltype=a.updateMetaltype.bind(Object(d.a)(a)),a.updateStoneQuality=a.updateStoneQuality.bind(Object(d.a)(a)),a.updateSize=a.updateSize.bind(Object(d.a)(a)),a.updatePriceAndImage=a.updatePriceAndImage.bind(Object(d.a)(a)),a.addToCart=a.addToCart.bind(Object(d.a)(a)),a.closeCart=a.closeCart.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/dummy.json").then(function(e){return e.json()}).then(function(t){e.setState({productData:t,product_images:t.images,product_mrp:t.mrp,product_selling_price:t.selling_price,product_discount_percent:t.discount_percent,currency:t.currency,available_sizes:t.sizes})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"updateStoneQuality",value:function(e,t){this.setState({quality:t}),this.updatePriceAndImage()}},{key:"updateMetaltype",value:function(e,t){this.setState({metal:t}),this.updatePriceAndImage()}},{key:"updateCaratWeight",value:function(e,t){this.setState({weight:t}),this.updatePriceAndImage()}},{key:"updateSize",value:function(e,t){this.setState({size:t})}},{key:"updatePriceAndImage",value:function(){this.setState({product_img:this.getImagesUrl(),product_selling_price:Math.floor(2.5*Math.random()*1e3)+1,product_mrp:Math.floor(2.5*Math.random()*1e3)+1,product_discount_percent:Math.floor(10*Math.random())})}},{key:"getImagesUrl",value:function(){var e=Math.ceil(0),t=Math.floor(3);return j[Math.floor(Math.random()*(t-e+1))+e]}},{key:"addToCart",value:function(){var e={carat:this.state.weight,stone:this.state.quality,metal:this.state.metal,size:this.state.size};console.log(e),this.setState({show_cart:!0})}},{key:"closeCart",value:function(){this.setState({show_cart:!1})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("main",{class:"mdl-layout__content width-100-percent"},l.a.createElement("div",{class:"product_section mdl-grid"},l.a.createElement(h,{product_name:this.state.productData.name,product_img:this.state.product_img}),l.a.createElement(g,{product_mrp:this.state.product_mrp,product_selling_price:this.state.product_selling_price,product_discount_percent:this.state.product_discount_percent,currency:this.state.currency}),l.a.createElement(b,{product_variants:this.state.productData.variants,updateCaratWeight:this.updateCaratWeight,updateMetaltype:this.updateMetaltype,updateStoneQuality:this.updateStoneQuality,updatePriceAndImage:this.updatePriceAndImage}),l.a.createElement(_,{sizes:this.state.available_sizes,updateSize:this.updateSize}),l.a.createElement("div",{className:"add_to_cart_wrapper mdl-cell--4-col-phone width-100-percent"},l.a.createElement("button",{class:"add_to_cart_btn mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect width-100-percent",onClick:this.addToCart},"ADD TO CART"))),l.a.createElement(E,{closeCart:this.closeCart,show_cart:this.state.show_cart,name:this.state.productData.name,size:this.state.size,quality:this.state.quality,weight:this.state.weight,metal:this.state.metal})))}}]),t}(l.a.Component);var k=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m,null),l.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.63dceb38.chunk.js.map