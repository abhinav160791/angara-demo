import React from 'react';

export default class Header extends React.Component {
  
  constructor(props) {
    super(props);
  }

render(){
    return(
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header class="mdl-layout__header">
                <div class="mdl-layout__header-row">
                <span className="search_icon">
                    <i class="material-icons m-r-15">
                        search
                    </i>
                </span>
                <span class="mdl-layout-title">
                    {/* <img src={process.env.PUBLIC_URL+'logo.png'} className="product_logo"/> */}
                    Angara Logo Here 
                </span>
                <span className="call_icon m-l-20">
                    <i class="material-icons">
                        phone
                    </i>
                </span>
                <span className="cart_icon m-l-20 m-r-15">
                    <i class="material-icons">
                        shopping_cart
                    </i>
                </span>
                <div class="mdl-layout-spacer"></div>
                <nav class="mdl-navigation mdl-layout--large-screen-only">
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                </nav>
                </div>
            </header>
            <div class="mdl-layout__drawer">
                <span class="mdl-layout-title">Title</span>
                <nav class="mdl-navigation">
                <a class="mdl-navigation__link" href="">Link</a>
                <a class="mdl-navigation__link" href="">Link</a>
                <a class="mdl-navigation__link" href="">Link</a>
                <a class="mdl-navigation__link" href="">Link</a>
                </nav>
            </div>
        </div>
    )
    }
}