import React, { Component } from 'react'
import Axios from 'axios'
import {Bar, Line, Radar, Pie, Bubble, Polar,Scatter, Doughnut, HorizontalBar} from 'react-chartjs-2';

class Comparison extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            chartData:props.chartData,
            data:[],
            dates:[],
        }
    }
    
    componentDidMount()
    {
        Axios.get('https://api.covid19india.org/states_daily.json')
    .then(response => {
        const figures=response.data.states_daily
        this.setState({data:response.data.states_daily})
        console.log(this.state.data)
        const data = this.state.data
  console.log(data)
  var j=0;
  var dates=[]
  var mah=[],gj=[],dl=[],tn=[],rj=[],mp=[],up=[],wb=[],ap=[],pb=[],tg=[],br=[],jk=[],ka=[],hr=[],or=[],
  kl=[],jh=[],ch=[],tr=[],as=[],ut=[],ct=[],hp=[]
  var sum=0
  for(var i=0;i<data.length;i++)
  {
      
      if(data[i].status=="Confirmed")
      {
          console.log(figures[i].date)
          // console.log(figures[i].mh)
          dates[j]=data[i].date
          
          
          mah[j]=Math.abs(data[i].mh)
          gj[j]=Math.abs(data[i].gj)
          dl[j]=Math.abs(data[i].dl)
          tn[j]=Math.abs(data[i].tn)
          rj[j]=Math.abs(data[i].rj)
          mp[j]=Math.abs(data[i].mp)
          up[j]=Math.abs(data[i].up)
          wb[j]=Math.abs(data[i].wb)
          ap[j]=Math.abs(data[i].ap)
          tg[j]=Math.abs(data[i].tg)
          pb[j]=Math.abs(data[i].pb)
          br[j]=Math.abs(data[i].br)
          jk[j]=Math.abs(data[i].jk)
          ka[j]=Math.abs(data[i].ka)
          hr[j]=Math.abs(data[i].hr)
          or[j]=Math.abs(data[i].or)
          kl[j]=Math.abs(data[i].kl)
          jh[j]=Math.abs(data[i].jh)
          ch[j]=Math.abs(data[i].ch)
          tr[j]=Math.abs(data[i].tr)
          as[j]=Math.abs(data[i].as)
          ut[j]=Math.abs(data[i].ut)
          ct[j]=Math.abs(data[i].ct)
          hp[j]=Math.abs(data[i].hp)
          j++        
      }
  }
  
	this.setState({
        chartData:{

            labels: dates,

          datasets:[
            {
              label:'Mahrashtra',
              data: mah,
              fill:false,
              borderColor: 'rgba(242, 38, 19, 1)',
            },
            {
              label:'Gujarat',
              data: gj,
              fill:false,
              borderColor: 'rgba(0, 230, 64, 1)',
            },
            {
              label:'Delhi',
              data: dl,
              fill:false,
              borderColor: 'rgba(140, 20, 252, 1)',
            },
            {
              label:'Tamil Nadu',
              data: tn,
              fill:false,
              borderColor: 'rgba(240, 255, 0, 1)',
            },
            {
              label:'Rajasthan',
              data: rj,
              fill:false,
              borderColor: 'rgba(137, 196, 244, 1)',
            },
            {
              label:'Bihar',
              data: br,
              fill:false,
              borderColor: 'rgba(77, 5, 232, 1)',
            },
            {
              label:'Madhya Pradesh',
              data: mp,
              fill:false,
              borderColor: 'rgba(34, 167, 240, 1)',
            },
            {
              label:'West Bengal',
              data: wb,
              fill:false,
              borderColor: 'rgba(1, 50, 67, 1)',
            },
            {
              label:'Uttar Pradesh',
              data: up,
              fill:false,
              borderColor: 'rgba(77, 19, 209, 1)',
            },
            {
              label:'Himachal Pradesh',
              data: hp,
              fill:false,
              borderColor: 'rgba(247, 202, 24, 1)',
            },
            {
              label:'Jharkhand',
              data: jh,
              fill:false,
              borderColor: 'rgba(240, 255, 0, 1)',
            },
            {
              label:'Tripura',
              data: tr,
              fill:false,
              borderColor: 'rgba(154, 18, 179, 1)',
            },
            {
              label:'Assam',
              data: as,
              fill:false,
              borderColor: 'rgba(191, 85, 236, 1)',
            },
            {
              label:'Andhra Pradesh',
              data: ap,
              fill:false,
              borderColor: 'rgba(150, 54, 148,1)',
            },
            {
              label:'Telangana',
              data: tg,
              fill:false,
              borderColor: 'rgba(41, 241, 195, 1)',
            },
            {
              label:'Punjab',
              data: pb,
              fill:false,
              borderColor: 'rgba(0, 177, 106, 1)',
            },
            {
              label:'Karnataka',
              data: ka,
              fill:false,
              borderColor: 'rgba(30, 130, 76, 1)',
            },
            {
              label:'Haryana',
              data: hr,
              fill:false,
              borderColor: 'rgba(0, 230, 64, 1)',
            },
            {
              label:'Kerala',
              data: kl,
              fill:false,
              borderColor: 'rgba(134, 226, 213, 1)',
            },
            {
              label:'Jammu and Kashmir',
              data: jk,
              fill:false,
              borderColor: 'rgba(232, 126, 4, 1)',
            },
            {
              label:'Odisha',
              data: or,
              fill:false,
              borderColor: 'rgba(244, 179, 80, 1)',
            },
            {
              label:'Uttarakhand',
              data: ut,
              fill:false,
              borderColor: 'rgba(249, 105, 14, 1)',
            },
            {
              label:'Chatttisgarh',
              data: ct,
              fill:false,
              borderColor: 'rgba(211, 84, 0, 1)',
            },
            {
              label:'Chandigarh',
              data: ch,
              fill:false,
              borderColor: 'rgba(241, 90, 34, 1)',
            },
          ]
        }
      });
        
}
    )

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

    render() {

        return (
            <div>
                
                <Line
                  data={this.state.chartData}
                  options={{
                    title:{
                      display:this.props.displayTitle,
                      text:'Daily State-Wise Cases',
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

export default Comparison
