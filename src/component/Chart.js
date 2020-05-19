
import React, {Component} from 'react';
import {Bar, Line, Radar, Pie, Bubble, Polar,Scatter, Doughnut, HorizontalBar,} from 'react-chartjs-2';
import Axios from 'axios';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData,
      posts:[],
    }
  }

  componentDidMount() {
    Axios.get('https://api.covid19india.org/data.json')
    .then(response => {
        //console.log(response)
        // this.setState({lists:response.data})
        // 
        this.setState({posts:response.data.statewise})
        //console.log(response.data.statewise)
        const posts = response.data.statewise
        //console.log(posts)
        var states=[]
        var num=[]

        for (var i=1;i<posts.length;i+=1) {
          states[i-1]=posts[i].state
          num[i-1]=posts[i].confirmed
        }
        //console.log(states)
        //console.log(num)
        this.setState({
        chartData:{
            labels: states,
          datasets:[
            {
              label:'No. of Positive Cases',
              data: num,
              backgroundColor:[
                
                'rgba(255,3,0,1)',
                'rgba(219,3,0,1)',
                'rgba(152,3,0,1)',
                'rgba(255,3,0,0.7)',
                'rgba(101,191,217,1)',
                'rgba(101,191,217,0.59)',
                'rgba(101,79,161,0.98)',
                'rgba(208,79,197,0.98)',
                'rgba(208,79,197,0.65)',
                'rgba(43,144,197,1)',
                'rgba(43,144,197,0.56)',
                'rgba(0,255,255,0.56)',
                'rgba(0,208,255,1)',
                'rgba(0,251,14,1)',
                'rgba(0,251,14,0.6)',
                'rgba(147,251,94,1)',
                'rgba(212,101,212,1)',
                'rgba(101,101,212,1)',
                'rgba(234,101,212,1)',
                'rgba(98,101,212,1)',
                'rgba(89,101,212,1)',
                'rgba(190,101,212,1)',
                'rgba(199,101,212,1)',
                'rgba(220,101,212,1)',
                'rgba(190,101,212,1)',
                'rgba(190,101,212,1)',
                'rgba(150,101,160,1)',
                'rgba(0,251,14,0.45)',
                'rgba(90,200,120,1)',
                'rgba(90,200,120,1)',
                'rgba(150,101,160,1)',
                'rgba(150,101,160,1)',
                'rgba(150,101,160,1)',
                'rgba(90,200,120,1)',
                'rgba(90,200,120,1)',
                'rgba(90,200,120,1)',
                'rgba(90,200,120,1)',

              ]
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
    const {posts} = this.state
        var states=[]
        var num=[]

        for (var i=1;i<posts.length;i+=1) {
          states[i-1]=posts[i].state
          num[i-1]=posts[i].confirmed
      }
    
      
    return (
      <div className="chart">
        <br></br>
        
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'State-Wise Total Cases Bar Chart', 
              fontSize:25
            },
            legend:{
              display:false,
              position:this.props.legendPosition
            }
          }}
        />
        <br></br>
        <br></br>
        <Doughnut
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'State-Wise Total Cases Doughnut Chart',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
        <br></br>
      <br></br>
        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:false,
              text:'State-Wise Total Cases Distribution',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      

        
      </div>
    )
  }
}

export default Chart;