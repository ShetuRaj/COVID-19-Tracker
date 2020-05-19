import React, {Component} from 'react';
import {Bar, Line, Bubble, Scatter} from 'react-chartjs-2';
import Axios from 'axios';

class New extends Component{
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
        
        var confirmed=[]
        var active=[]
        var deceased=[]

        for (var i=31;i<posts.length;i+=1) {
          states[i-31]=posts[i].date
          confirmed[i-31]=posts[i].dailyconfirmed
          deceased[i-31]=posts[i].dailydeceased
          active[i-31]=posts[i].dailyrecovered
        }
        //console.log(states)
        // //console.log(num)
        this.setState({
        chartData:{
            labels: states
          
          
          ,
          datasets:[
            {
              label:'New Cases',
              data: confirmed,
              backgroundColor:
                
                'rgba(0,60,100,1)',
              borderColor: 'rgba(0,60,100,1)',
            },
            {
                label:'New Recovered',
                data: active,
               
                backgroundColor:
                
                'rgb(0,255,0)',
                borderColor: 'rgb(0,255,0)',
              },
              {
                label:'New Deaths',
                data: deceased,
                backgroundColor:
                
                'rgba(246, 36, 89, 1)',
                borderColor: 'rgba(242, 38, 19, 1)',
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
      
      <div className="chart" >
          <br></br>
          <br></br>
          
        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'New Cases v/s Recovered v/s Deaths',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
          className="elements" />
        </div>


        
        
        
        
     
    )
  }
}

export default New;