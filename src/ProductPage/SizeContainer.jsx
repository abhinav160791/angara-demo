import React from 'react';

export default class SizeContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.populateSizes = this.populateSizes.bind(this);
    this.selectSize = this.selectSize.bind(this);
    this.state = {default_selected:'7.5'}
  }

  selectSize(e){
    this.setState({default_selected:e.target.dataset.size});
    this.props.updateSize(e,this.state.default_selected);
}

  populateSizes(){
    var sizes_arr = [];
    var array_size = Array.from(this.props.sizes);
    array_size.map((key,i) => {
      sizes_arr.push(
          <div className={this.state.default_selected==key.size?'selected_quality flex-center size_button':'flex-center size_button'} data-variant={key.variant_id} data-size={key.size} onClick={this.selectSize}>{key.size}</div>
        )      
    });
    return(
      <>
        {sizes_arr}
      </>
    )
  }

  render(){
    return(
      <div className="mdl-cell mdl-cell--4-col-phone horizontal-scroll">
        <h5>Select Size:</h5>
        <div>Selected Ring Size: {this.state.default_selected}</div>
        <div className="flex-center size_wrapper">
          {this.populateSizes()}
        </div>
      </div>
    )
  }
}