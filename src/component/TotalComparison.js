import React, { Component } from 'react'
import Axios from 'axios'
import {Bar, Line, Radar, Pie, Bubble, Polar,Scatter, Doughnut, HorizontalBar} from 'react-chartjs-2';

class TotalComparison extends Component {
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
        ////console.log(this.state.data)
        const data = this.state.data
  ////console.log(data)
  var j=0;
  var dates=[]
  for(var i=0;i<data.length;i++)
  {
      if(data[i].status=="Confirmed")
      {
          ////console.log(figures[i].date)
          dates[j]=data[i].date
          j++        
      }
  }

  var mah1=[],gj1=[],dl1=[],tn1=[],rj1=[],mp1=[],up1=[],wb1=[],ap1=[],pb1=[],tg1=[],br1=[],jk1=[],ka1=[],hr1=[],or1=[],
  kl1=[],jh1=[],ch1=[],tr1=[],as1=[],ut1=[],ct1=[],hp1=[]

          mah1[0]=Math.abs(data[0].mh)
          gj1[0]=Math.abs(data[0].gj)
          dl1[0]=Math.abs(data[0].dl)
          tn1[0]=Math.abs(data[0].tn)
          rj1[0]=Math.abs(data[0].rj)
          mp1[0]=Math.abs(data[0].mp)
          up1[0]=Math.abs(data[0].up)
          wb1[0]=Math.abs(data[0].wb)
          ap1[0]=Math.abs(data[0].ap)
          tg1[0]=Math.abs(data[0].tg)
          pb1[0]=Math.abs(data[0].pb)
          br1[0]=Math.abs(data[0].br)
          jk1[0]=Math.abs(data[0].jk)
          ka1[0]=Math.abs(data[0].ka)
          hr1[0]=Math.abs(data[0].hr)
          or1[0]=Math.abs(data[0].or)
          kl1[0]=Math.abs(data[0].kl)
          jh1[0]=Math.abs(data[0].jh)
          ch1[0]=Math.abs(data[0].ch)
          tr1[0]=Math.abs(data[0].tr)
          as1[0]=Math.abs(data[0].as)
          ut1[0]=Math.abs(data[0].ut)
          ct1[0]=Math.abs(data[0].ct)
          hp1[0]=Math.abs(data[0].hp)

  var j=3,p=3,ind=0;
  for(var i=3;i<data.length;i+=3)
  {
          var sum=0
          ////console.log(`data[${i}]=${data[i].mh}`)
          for(var k=p;k>=0;k-=3)
          {
          
            ////console.log(`data[${k}].mh=${data[k].mh} + sum=${sum}`)
              sum=sum+Math.abs(data[k].mh)
             ////console.log(`Above sum = ${sum}`)
            
          }
          mah1[ind]=sum

          var sum1=0
          for(var k=j;k>=0;k-=3)
          {
              sum1=sum1+Math.abs(data[k].gj)
          }
          gj1[ind]=sum1

          var sum2=0
          for(var k=j;k>=0;k-=3)
          {
              sum2=sum2+Math.abs(data[k].dl)
          }
          dl1[ind]=sum2

          var sum3=0
          for(var k=j;k>=0;k-=3)
          {
              sum3=sum3+Math.abs(data[k].tn)
          }
          tn1[ind]=sum3

          var sum4=0
          for(var k=j;k>=0;k-=3)
          {
              sum4=sum4+Math.abs(data[k].rj)
          }
          rj1[ind]=sum4

          var sum5=0
          for(var k=j;k>=0;k-=3)
          {
              sum5=sum5+Math.abs(data[k].mp)
          }
          mp1[ind]=sum5

          // var sum6=0
          // for(var k=j;k>=0;k-=3)
          // {
          //     sum6=sum6+Math.abs(data[k].dl)
          // }

          var sum7=0
          for(var k=j;k>=0;k-=3)
          {
              sum7=sum7+Math.abs(data[k].up)
          }
          up1[ind]=sum7

          var sum8=0
          for(var k=j;k>=0;k-=3)
          {
              sum8=sum8+Math.abs(data[k].wb)
          }
          wb1[ind]=sum8

          var sum9=0
          for(var k=j;k>=0;k-=3)
          {
              sum9=sum9+Math.abs(data[k].ap)
          }
          ap1[ind]=sum9

          var sum10=0
          for(var k=j;k>=0;k-=3)
          {
              sum10=sum10+Math.abs(data[k].tg)
          }
          tg1[ind]=sum10

          var sum11=0
          for(var k=j;k>=0;k-=3)
          {
              sum1=sum11+Math.abs(data[k].pb)
          }
          pb1[ind]=sum11

          var sum12=0
          for(var k=j;k>=0;k-=3)
          {
              sum12=sum12+Math.abs(data[k].br)
          }
          br1[ind]=sum12

          var sum13=0
          for(var k=j;k>=0;k-=3)
          {
              sum13=sum13+Math.abs(data[k].jk)
          }
          jk1[ind]=sum13

          var sum14=0
          for(var k=j;k>=0;k-=3)
          {
              sum14=sum14+Math.abs(data[k].ka)
          }
          ka1[ind]=sum14

          var sum15=0
          for(var k=j;k>=0;k-=3)
          {
              sum15=sum15+Math.abs(data[k].hr)
          }
          hr1[ind]=sum15

          var sum16=0
          for(var k=j;k>=0;k-=3)
          {
              sum16=sum16+Math.abs(data[k].or)
          }
          or1[ind]=sum16

          var sum17=0
          for(var k=j;k>=0;k-=3)
          {
              sum17=sum17+Math.abs(data[k].kl)
          }
          kl1[ind]=sum17

          var sum18=0
          for(var k=j;k>=0;k-=3)
          {
              sum18=sum18+Math.abs(data[k].jh)
          }
          jh1[ind]=sum18

          var sum19=0
          for(var k=j;k>=0;k-=3)
          {
              sum19=sum19+Math.abs(data[k].ch)
          }
          ch1[ind]=sum19

          var sum20=0
          for(var k=j;k>=0;k-=3)
          {
              sum20=sum20+Math.abs(data[k].tr)
          }
          tr1[ind]=sum20

          var sum21=0
          for(var k=j;k>=0;k-=3)
          {
              sum21=sum21+Math.abs(data[k].as)
          }
          as1[ind]=sum21

          var sum22=0
          for(var k=j;k>=0;k-=3)
          {
              sum22=sum22+Math.abs(data[k].ut)
          }
          ut1[ind]=sum22

          var sum23=0
          for(var k=j;k>=0;k-=3)
          {
              sum23=sum23+Math.abs(data[k].ct)
          }
          ct1[ind]=sum23

          var sum24=0
          for(var k=j;k>=0;k-=3)
          {
              sum24=sum24+Math.abs(data[k].hp)
          }
          hp1[ind]=sum24
          j+=3   
          p+=3    
          ind++
  }
  
  ////console.log(mah)
  ////console.log(mah1)
  ////console.log(dates)
	this.setState({
        chartData:{

            labels: dates,

          datasets:[
            {
              label:'Mahrashtra',
              data: mah1,
              fill:false,
              borderColor: 'rgba(242, 38, 19, 1)',
            },
            {
              label:'Gujarat',
              data: gj1,
              fill:false,
              borderColor: 'rgba(0, 230, 64, 1)',
            },
            {
              label:'Delhi',
              data: dl1,
              fill:false,
              borderColor: 'rgba(140, 20, 252, 1)',
            },
            {
              label:'Tamil Nadu',
              data: tn1,
              fill:false,
              borderColor: 'rgba(247, 202, 24, 1)',
            },
            {
              label:'Rajasthan',
              data: rj1,
              fill:false,
              borderColor: 'rgba(137, 196, 244, 1)',
            },
            {
              label:'Bihar',
              data: br1,
              fill:false,
              borderColor: 'rgba(77, 5, 232, 1)',
            },
            {
              label:'Madhya Pradesh',
              data: mp1,
              fill:false,
              borderColor: 'rgba(34, 167, 240, 1)',
            },
            {
              label:'West Bengal',
              data: wb1,
              fill:false,
              borderColor: 'rgba(1, 50, 67, 1)',
            },
            {
              label:'Uttar Pradesh',
              data: up1,
              fill:false,
              borderColor: 'rgba(77, 19, 209, 1)',
            },
            {
              label:'Himachal Pradesh',
              data: hp1,
              fill:false,
              borderColor: 'rgba(217, 30, 24, 1)',
            },
            {
              label:'Jharkhand',
              data: jh1,
              fill:false,
              borderColor: 'rgba(240, 255, 0, 1)',
            },
            {
              label:'Tripura',
              data: tr1,
              fill:false,
              borderColor: 'rgba(154, 18, 179, 1)',
            },
            {
              label:'Assam',
              data: as1,
              fill:false,
              borderColor: 'rgba(191, 85, 236, 1)',
            },
            {
              label:'Andhra Pradesh',
              data: ap1,
              fill:false,
              borderColor: 'rgba(150, 54, 148,1)',
            },
            {
              label:'Telangana',
              data: tg1,
              fill:false,
              borderColor: 'rgba(41, 241, 195, 1)',
            },
            {
              label:'Punjab',
              data: pb1,
              fill:false,
              borderColor: 'rgba(0, 177, 106, 1)',
            },
            {
              label:'Karnataka',
              data: ka1,
              fill:false,
              borderColor: 'rgba(30, 130, 76, 1)',
            },
            {
              label:'Haryana',
              data: hr1,
              fill:false,
              borderColor: 'rgba(0, 230, 64, 1)',
            },
            {
              label:'Kerala',
              data: kl1,
              fill:false,
              borderColor: 'rgba(134, 226, 213, 1)',
            },
            {
              label:'Jammu and Kashmir',
              data: jk1,
              fill:false,
              borderColor: 'rgba(232, 126, 4, 1)',
            },
            {
              label:'Odisha',
              data: or1,
              fill:false,
              borderColor: 'rgba(244, 179, 80, 1)',
            },
            {
              label:'Uttarakhand',
              data: ut1,
              fill:false,
              borderColor: 'rgba(249, 105, 14, 1)',
            },
            {
              label:'Chatttisgarh',
              data: ct1,
              fill:false,
              borderColor: 'rgba(211, 84, 0, 1)',
            },
            {
              label:'Chandigarh',
              data: ch1,
              fill:false,
              borderColor: 'rgba(241, 90, 34, 1)',
            },
          ]
        }
      });
        ////console.log(figures)
        ////console.log(figures.length)
        var fig=[]
        for(var k=0,j=0;k<figures.length;k++,j++)
        {
            // ////console.log(figures[k].date)
            // ////console.log(figures[k].status)
                             
        }

        var mh_date=[] 
        for(var i=0;i<figures.length;i++)
        {
            
            if(figures[i].status=="Confirmed")
            {
                ////console.log(figures[i].date)
                ////console.log(figures[i].mh)
				        fig[j]=figures[i]
                // delete fig[j].status
				        // delete fig[j].date
            	  j++             
            }
        }
    ////console.log(fig)
    for(var i=0;i<fig.length;i++)
    {
        ////console.log(fig[i])
  }
  ////console.log(mh_date)
  var mh=[]
	for(i=196;i<fig.length;i++)
	{
    mh[i]=fig[i].mh
	}
  ////console.log(mh)
  for(i=196;i<fig.length;i++)
	{
		mh[i]=fig[i].mh
  }
  
}
    )

    .catch(error => {
        //////console.log(error)
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
                      text:'Total State-Wise Cases',
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

export default TotalComparison
