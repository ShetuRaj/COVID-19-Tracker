import React, {Component} from 'react';
import {Bar, Line, Bubble, Scatter} from 'react-chartjs-2';
import Axios from 'axios';
import Chart from './Chart'
import Daily from './Daily'
import Stats from './Stats'
import New from './New'
import More from './More'
import More1 from './More1'
import More2 from './More2'
import Comparison from './Comparison'
import TotalComparison from './TotalComparison'

import './Style.css'

class Details extends Component{
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
        ////console.log(response)
        this.setState({posts:response.data.cases_time_series})
        ////console.log(response.data.cases_time_series)
        
        
        const posts = response.data.cases_time_series
        ////console.log(posts)
        var states=[]
        
        var confirmed=[]
        var active=[]
        var deceased=[]

        for (var i=31;i<posts.length;i+=1) {
          states[i-31]=posts[i].date
          confirmed[i-31]=posts[i].totalconfirmed
          deceased[i-31]=posts[i].totaldeceased
          active[i-31]=parseInt(posts[i].totalconfirmed) - parseInt(posts[i].totaldeceased) - parseInt(posts[i].totalrecovered)
        }
        ////console.log(states)
        // ////console.log(num)
        this.setState({
        chartData:{
            labels: states
          
          
          ,
          datasets:[
            {
              label:'Total Confirmed Cases',
              data: confirmed,
              fill:false,
              borderColor: 'rgba(34, 167, 240, 1)',
            },
            {
                label:'Total Active Cases',
                data: active,
                fill:false,
                borderColor: 'rgba(249, 105, 14, 1)',
              },
              {
                label:'Total Deaths',
                fill:false,
                data: deceased,
                borderColor: 'rgba(247, 202, 24, 1)',
              }
          ]
        }
      });
  
    })
    .catch(error => {
        ////console.log(error)
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
          <h1 className="elements">Stats from India</h1>
          <br></br>
          
          <div style={{width:1000,marginLeft:"90px"}}>
        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Total Confirmed v/s Active v/s Dead',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
          className="elements" />
        </div>

        <br></br>
        <br></br>
        <div style={{width:1000,marginLeft:"90px"}}>
          <New />
          </div>

        <br></br>
        <br></br>
        <div style={{width:1000,marginLeft:"90px"}}>
        <Stats />
        </div>

        <br></br>
        <div style={{width:1000,marginLeft:"90px"}}>
        <TotalComparison />
        </div>

        <br></br>
        <div style={{width:1000,marginLeft:"90px"}}>
        <Comparison />
        </div>

        <br></br>
        
        <br></br>
        <div style={{width:1000,marginLeft:"90px"}}>
        <Daily />
        <br></br>
        </div>
        <div style={{width:1000,marginLeft:"90px"}}>
          <More/>
          </div>
          <div style={{width:1000,marginLeft:"90px"}}>
          <More2/>
          </div>
          <div style={{width:1000,marginLeft:"90px"}}>
          <More1/>
          </div>
        <div style={{width:1000,marginLeft:"90px"}}>
        <Chart />
        </div>
        <br></br>
      </div>
    )
  }
}

export default Details;