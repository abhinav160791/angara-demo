import React from 'react';

export default class SelectCarat extends React.Component {
  
    constructor(props) {
        super(props);
        this.state={carat_weight:['0.80','1.10','1.90','2.49','4.03'], selected:"1.10"}
        this.populateCaratWeight = this.populateCaratWeight.bind(this);
        this.selectCaratWeight = this.selectCaratWeight.bind(this);
    }
    
    populateCaratWeight(){
        var carat_weight = [];
        this.state.carat_weight.forEach((key)=>{
            carat_weight.push(
                <div className={this.state.selected==key?'selected_quality stone_quality flex-center':'stone_quality flex-center'} data-quality={key} onClick={this.selectCaratWeight}>{key} Carats</div>
            )
        });

        return(
            <>{carat_weight}</>
        )
    }

    selectCaratWeight(e){
        this.setState({selected:e.target.dataset.quality});
        this.props.updateCaratWeight(e, this.state.selected);
    }

    render(){
        return(
            <div className="flex-center weight_wrapper">
                {this.populateCaratWeight()}
            </div>
        )
    }
}