import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import axios from 'axios';
import SelectDate from './components/select_date';
import ResponseList from './components/Response_list';

class App extends Component{
  constructor()
  {
      super();
      this.state={Links:[],searchDate:''}
  }
  handleDate = (dateValue) => {
    this.setState({searchDate: dateValue});
    console.log('dateinIndex:',dateValue);
}
  handleClick(e) {
    axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date='+this.state.searchDate+'&end_date='+this.state.searchDate+'&api_key=r3ykQa9ENk97n0YXgRZLdZY7JZ0LLyFSpkQNF1BW')
    .then((response)=> {      
      var MyData=response.data.near_earth_objects;
      console.log('My Response:', MyData[this.state.searchDate]);
      var DataArray=MyData[this.state.searchDate];
      this.setState({Links:DataArray})
    } )  
  }  


  render(){
    return(
      <div style={divStyle}>
        <img src="https://cdn.images.express.co.uk/img/dynamic/151/590x/secondary/asteroid-3-982779.jpg" />
      <h4>Enter Date in YYYY-MM-DD format to Retrieve a list of </h4>
        <h4>Asteroids approached to Earth on that date:</h4>
      <SelectDate onSelectDate={this.handleDate}/>
      <button onClick={(e) => this.handleClick(e)}>
        Find Out
      </button>
      <ResponseList Links={this.state.Links}/>
    </div>
    )
  } 
}
const divStyle = {
  color: 'blue',
  textAlign: 'center',
};


ReactDOM.render(<App/>,document.querySelector('.container'));