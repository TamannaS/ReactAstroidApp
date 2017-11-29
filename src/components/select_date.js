import React,{Component} from 'react';

class SelectDate extends Component{
    constructor()
    {
        super();
        this.state={searchDate:''}
        
    }

    handleDateChange = (e) => {
        var date = this.state.searchDate;
        console.log('date:',date);
        
        this.props.onSelectDate(date);            
    }
    
    render() {
        return(
            <div>
            <input onChange={event=>this.setState({searchDate:event.target.value})} onBlur={this.handleDateChange}/>

            <br/>
            You Entered: {this.state.searchDate}
            </div>
        )
    }
}

export default SelectDate;