import React from 'react';
import SelectCarat from "./SelectCarat";
import SelectMetal from "./SelectMetal";
import SelectStone from "./SelectStone";
export default class ProductVariants extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={selected:'stone'}
    this.getProductVariants = this.getProductVariants.bind(this);
    this.changeVariant = this.changeVariant.bind(this);
    this.showVariantDetails = this.showVariantDetails.bind(this);
  }

  getProductVariants(){
      return(
          <>
            <span className={this.state.selected=='stone'?'selected_variant variant_type flex-center':'variant_type flex-center'} data-variant="stone" onClick={this.changeVariant}>
                Stone Quality
            </span>
            <span className={this.state.selected=='carat'?'selected_variant variant_type flex-center':'variant_type flex-center'} data-variant="carat" onClick={this.changeVariant}>
                Carat Weight
            </span>
            <span className={this.state.selected=='metal'?'selected_variant variant_type flex-center':'variant_type flex-center'} data-variant="metal" onClick={this.changeVariant}>
                Metal Type
            </span>
          </>
      )
  }

  showVariantDetails(){
      switch(this.state.selected){
        case 'stone':
            return(<SelectStone updateStoneQuality={this.props.updateStoneQuality}/>);
        case 'carat':
            return(<SelectCarat updateCaratWeight={this.props.updateCaratWeight}/>);
        case 'metal':
            return(<SelectMetal updateMetaltype={this.props.updateMetaltype}/>);
      }
  }

  changeVariant(e){
      this.setState({selected:e.target.dataset.variant});
  }

    render(){
        return(
            <>
                <div className="mdl-cell mdl-cell--4-col-phone horizontal-scroll variant_containers">
                    {this.getProductVariants()}
                </div>
                <div className="mdl-cell mdl-cell--4-col-phone horizontal-scroll variant_details_container">
                    {this.showVariantDetails()}
                </div>
            </>
        )
    }
}