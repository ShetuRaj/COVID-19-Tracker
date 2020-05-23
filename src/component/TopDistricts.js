import React, { Component } from 'react'
import Axios from 'axios'
import CountUp from 'react-countup';
import './style3.css'
class TopDistricts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             states:{},
             final:[],
             finaldist:[]
        }
    }
    

    componentDidMount() {
        Axios.get('https://api.covid19india.org/state_district_wise.json')
        .then(response => {
            //console.log(response)
            //console.log(response.data)
            this.setState({states:response.data})
           
            const states=response.data
            
            

                const transform = (obj) => Object.entries(states).map(([stateName, { districtData }]) => ({
                    state: stateName,
                    districts: Object.entries(districtData).map(([districtName, { active, delta }]) => ({
                      district: districtName,
                      active,
                      ...delta,
                    })),
                  }));
                  
                  const transformFlat = (obj) => {
                    const result = [];
                    Object.entries(obj).forEach(([stateName, { districtData }]) =>
                      Object.entries(districtData).forEach(([districtName, { active, confirmed,deceased,recovered }]) =>
                        result.push({
                          state: stateName,
                          district: districtName,
                          active,
                          confirmed,
                          deceased,
                          recovered
                        })
                      )
                    );
                    return result;
                  };
                  
                  // transform the data
                  //console.log(transform(states));
                  // var pass1=[] 
                  // pass1=transform(states)
                  // pass1.sort((a, b) => (a.districts.confirmed > b.districts.confirmed) ? -1 : 1)
                  // //console.log(pass1)
                  //console.log(transformFlat(states));
                  var pass=[]
                  pass=transformFlat(states)
                  this.setState({final:pass})
                  //console.log(this.state.final)
                  pass.sort((a, b) => (a.confirmed > b.confirmed) ? 1 : -1)
                  //console.log(pass)
                  
                  
                  // you could loop like this through it
                  // for (const state of transform(states)) {
                  //   //console.log(state.state);
                  //   for (const district of state.districts) {
                  //     //console.log(district);
                  //   }
                  // }

                  for (const state of transformFlat(states)) {
                    //console.log(state.state);
                    for (const district of state.districts) {
                      //console.log(district);
                    }
                  }
          console.log()
        // const dist1=this.state.final;
        // //console.log(dist1)
        // dist1.sort((a, b) => (a.confirmed > b.confirmed) ? -1 : 1)
        // //console.log(dist1)
        // var fdist=[]
        // for(var i=0;i<100;i++){
        //     fdist[i]=dist1[i];
        // }
        // //console.log(fdist)
        // this.setState({finaldist:dist1})
               
        })
        .catch(error => {
            //console.log(error)
        })
    }
    render() {
        const dist=this.state.final;
        //console.log(dist)
        dist.sort((a, b) => (a.confirmed > b.confirmed) ? -1 : 1);
        //console.log(dist)
        // const fdist=this.state.finaldist
        // fdist.sort((a, b) => (a.confirmed > b.confirmed) ? -1 : 1)
        // //console.log(fdist)
        return (
            <div>
                <h1 className="head11">Top 100 Districts in India</h1>
                 <h2 className="hd">(Click/Tap on each district to know more)</h2>
                <div className="books1">
                    {
      
                         dist.length?
                         dist.map( (dist,ind) => {
                             return ind<=99 ? (
                         <a  className="link1"> 
                         <div className="book1" key={dist.district} >
                             
                         <h2>{ind+1}. {dist.district}</h2>
                         <h3>({dist.state})</h3>
                         <h1 style={{color: "azure"}}><CountUp 
                                end={dist.confirmed} separator=","
                                duration={4} delay={1} /></h1>
                         <div className="details1" key={dist.district}>
                           <h4 style={{color: "springgreen"}}>Recovered - <CountUp 
                                end={dist.recovered} separator=","
                                duration={4} delay={1} /></h4>
                           <h4 style={{color: "red"}}> Deaths - <CountUp 
                                end={dist.deceased} separator=","
                                duration={4} delay={1} /></h4>
                            
                           

                         </div>

                         
                         
                       </div>
                       </a>):null
                     }
                              ):null
                    }
                     

                </div>
                
            </div>
        )
    }
}

export default TopDistricts
