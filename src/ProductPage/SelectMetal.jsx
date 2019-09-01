import React from 'react';

export default class SelectMetal extends React.Component {
  
    constructor(props) {
        super(props);
        this.state={metal_type:['rose gold','yellow gold','white gold','platinum'], selected:"white gold"}
        this.populateMetalType = this.populateMetalType.bind(this);
        this.selectMetalType = this.selectMetalType.bind(this);
    }
    
    populateMetalType(){
        var metal_type = [];
        this.state.metal_type.forEach((key)=>{
            metal_type.push(
                <div className={this.state.selected==key?'selected_quality stone_quality flex-center':'stone_quality flex-center'} data-quality={key} onClick={this.selectMetalType}>{key}</div>
            )
        });

        return(
            <>{metal_type}</>
        )
    }

    selectMetalType(e){
        this.setState({selected:e.target.dataset.quality});
        this.props.updateMetaltype(e, this.state.selected);
    }

    render(){
        return(
            <div className="flex-center weight_wrapper">
                {this.populateMetalType()}
            </div>
        )
    }
}