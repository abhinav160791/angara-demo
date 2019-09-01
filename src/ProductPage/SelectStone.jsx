import React from 'react';

export default class SelectStone extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={quality:['good','better','best','heirloom'], selected:"best"}
    this.populateStoneQuality = this.populateStoneQuality.bind(this);
    this.selectStoneQuality = this.selectStoneQuality.bind(this);
  }

  populateStoneQuality(){
    var stone_quality = [];
    this.state.quality.forEach((key)=>{
        stone_quality.push(
            <div className={this.state.selected==key?'selected_quality stone_quality flex-center':'stone_quality flex-center'} data-quality={key} onClick={this.selectStoneQuality}>{key}</div>
        )
    });

    return(
        <>{stone_quality}</>
    )
  }
  selectStoneQuality(e){
    this.setState({selected:e.target.dataset.quality});
    this.props.updateStoneQuality(e, this.state.selected);
  }
    render(){
        return(
          <div className="flex-center weight_wrapper">
            {this.populateStoneQuality()}
          </div>
        )
    }
}