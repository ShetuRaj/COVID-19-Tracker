import React, {Component} from 'react';
import {Bar, Line, Bubble, Scatter} from 'react-chartjs-2';
import Axios from 'axios';
import './Style.css'

class Stats extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData,
      posts:[]
    }
  }

  componentDidMount() {
    Axios.get('https://api.covid19india.org/data.json')
    .then(response => {
        //console.log(response)
        this.setState({posts:response.data.cases_time_series})
        //console.log(response.data.cases_time_series)
        
        
        const posts = response.data.cases_time_series
        //console.log(posts)
        var states=[]
        var num=[]

        for (var i=31;i<posts.length;i+=1) {
          states[i-31]=posts[i].date
          num[i-31]=posts[i].dailyconfirmed
        }
        //console.log(states)
        //console.log(num)
        this.setState({
        chartData:{
            labels: states
          
          
          ,
          datasets:[
            {
              label:'No. of Positive Cases Per Day',
              data: num,
              
              borderColor: 'rgba(0,60,100,1)',
              backgroundColor:
                
                'rgba(0,60,100,1)',
                
              
            }
          ]
        }
      });
  
    })
    .catch(error => {
        //console.log(error)
    })
}

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'bottom',
    location:'City'
  }


  render(){
      
    return (
      <div className="chart">
          
          <br></br>
          <br></br>
        <Bar
          data={this.state.chartData}
          options={{
           
            title:{
              display:this.props.displayTitle,
              text:'No. of Positive Cases Per Day Bar Chart', 
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
         className="elements"/>

          <br></br>
          <br></br>
        

          

        <br></br>

        
        
        
        
      </div>
    )
  }
}

export default Stats;