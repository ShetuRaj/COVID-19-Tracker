import React, { Component,useState, useEffect } from 'react'
import Axios from 'axios'
import CountUp from 'react-countup'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCheckCircle,faNotesMedical,faExternalLinkAlt,faArrowUp,faCircle,
faBriefcaseMedical,faSkullCrossbones,faUsers,faVial} from '@fortawesome/free-solid-svg-icons'

import './apistyle.css'

class CaseList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [] ,
             postings:[],
             tested:[],
             recov:0,
             dead:0,
             samples:0,
             new1:0,
             num:0,
             increase:[],
        }
    }


    componentDidMount() {

        Axios.get('https://api.covid19india.org/data.json')
        .then(response => {
            //////consolelog(response)
            this.setState({posts:response.data.statewise})
            const extra=response.data.cases_time_series
            
            // ////consolelog(new1)
            var extra1=response.data.statewise

            // ////consolelog(new2-new1)
            var recov=0,dead=0;
            var new3=extra1[0].confirmed-extra[extra.length-1].totalconfirmed
            if(new3<=100)
            {
                new3=extra[extra.length-1].totalconfirmed-extra[extra.length-2].totalconfirmed
                recov=extra[extra.length-1].totalrecovered-extra[extra.length-2].totalrecovered
                dead=extra[extra.length-1].totaldeceased-extra[extra.length-2].totaldeceased
            }
            else
            {
                new3=extra1[0].confirmed-extra[extra.length-1].totalconfirmed
                recov=extra1[0].recovered-extra[extra.length-1].totalrecovered
                dead=extra1[0].deaths-extra[extra.length-1].totaldeceased
            }

            this.setState({new1:new3}) 
            this.setState({recov:recov})
            this.setState({dead:dead})
            
            //////consolelog(response.data.statewise)
            const total = response.data.tested
            var samples=total[total.length-1].totalsamplestested-total[total.length-2].totalsamplestested
            this.setState({samples:samples})
            var len=total.length
            var tested=total[len-1].totalsamplestested
            this.setState({num:tested})            
            //////consolelog(total[len-1].totalsamplestested)
        })
        .catch(error => {
            //////consolelog(error)
        })

        Axios.get('https://api.covid19india.org/states_daily.json')

    .then(response => {
        const stdata=this.state.posts
        this.setState({postings:response.data.states_daily})
        ////consolelog(response.data.states_daily)
        const postings = response.data.states_daily
        ////consolelog(postings)
        
        const daily=postings[postings.length-3];
        delete daily.date;
        delete daily.status
        const new_recovered=postings[postings.length-2];
        delete new_recovered.date;
        delete new_recovered.status
        const new_dead=postings[postings.length-1];
        delete new_dead.date;
        delete new_dead.status
        //consolelog(new_recovered)
        var sortable = [];
        for (var vehicle in daily) {
            sortable.push([vehicle, daily[vehicle]]);
        }
        
        
        sortable.sort(function(a, b) {
        return a[1] - b[1];
        });

        var sortable1 = [];
        for (var vehicle in new_recovered) {
            sortable1.push([vehicle, new_recovered[vehicle]]);
        }
        
        
        sortable1.sort(function(a, b) {
        return a[1] - b[1];
        });

        var sortable2 = [];
        for (var vehicle in new_dead) {
            sortable2.push([vehicle, new_dead[vehicle]]);
        }
        
        //consolelog(sortable1)
        sortable2.sort(function(a, b) {
        return a[1] - b[1];
        });

        var increase=[],rec=[],dec=[]
        var z=0;
        var ct=0;
        for(var i=1;i<stdata.length;i++)
        {
            ////consolelog(stdata[i].statecode)
           for(var j=0;j<sortable.length;j++)
           {
                // ////consolelog(daily[j])
                if(daily[j]!="tt")
                {
                    
                    
                    if(stdata[i].statecode==sortable[j][0].toUpperCase())
                    {
                        increase[z]=sortable[j][1]
                        rec[z]=sortable1[j][1]
                        //consolelog(sortable1[j][0]+rec[z])
                        dec[z]=sortable2[j][1]
                        z++
                    }
                }
           }
           
        }
        //consolelog(ct)
        //consolelog(rec)
        this.setState({increase:increase})
        const add=this.state.posts
        var j=0;
        for(var i=1;i<add.length;i++,j++)
        {
            add[i].increase=increase[j]
            add[i].new_recovered=rec[j]
            add[i].new_dead=dec[j]
        }
        
        this.setState({posts:add})
    })
    .catch(error => {
        //////consolelog(error)
    })
    Axios.get('https://api.covid19india.org/state_test_data.json')
    .then(response => {
        this.setState({tested:response.data.states_tested_data})
        //consolelog(response.data.states_tested_data)
        var tested=response.data.states_tested_data
        const stdata=this.state.posts
        var index=0,index1=0
        for(var i=0;i<stdata.length;i++)
        {
            var count=0;
            for(var j=0;j<tested.length;j++)
            {
                if(tested[j].state==stdata[i].state)
                {
                    if(tested[j].totaltested!='' && tested[j].testsperthousand!='' && tested[j].testpositivityrate!='')
                    {
                        index1=j;
                        continue;
                    }
                    if(tested[j].totaltested=='' || tested[j].testsperthousand=='' || tested[j].testpositivityrate=='')
                    {
                        count++;
                        index=j;
                        break;
                    }
                    
                }
            }
            if(count==1)
            {
                        stdata[i].totaltested=tested[index-1].totaltested
                        // //consolelog(index)
                        
                        stdata[i].testsperthousand=tested[index-1].testsperthousand
                        
                        stdata[i].testpositivityrate=tested[index-1].testpositivityrate

                        stdata[i].totaltestedbefore=tested[index-1].totaltested-tested[index-2].totaltested
                        
                        stdata[i].testsperthousandbefore=(tested[index-1].testsperthousand-tested[index-2].testsperthousand).toFixed(2)
                       
                        stdata[i].testpositivityratebefore=(parseFloat(tested[index-1].testpositivityrate.replace('%',''))-parseFloat(tested[index-2].testpositivityrate.replace('%',''))).toFixed(2)
                        if(stdata[i].testpositivityratebefore<0)
                        {
                            stdata[i].testpositivityratebefore="-"+Math.abs(stdata[i].testpositivityratebefore)
                        }
                        else
                        {
                            stdata[i].testpositivityratebefore="+"+Math.abs(stdata[i].testpositivityratebefore)
                        }

                        
            }
            if(count==0)
            {
                stdata[i].totaltested=tested[index1].totaltested
                        
                stdata[i].testsperthousand=tested[index1].testsperthousand
                
                stdata[i].testpositivityrate=tested[index1].testpositivityrate
                if(stdata[i].state!="Total")
                {
                stdata[i].totaltestedbefore=tested[index1].totaltested-tested[index1-1].totaltested
                                   
                stdata[i].testsperthousandbefore=(tested[index1].testsperthousand-tested[index1-1].testsperthousand).toFixed(2)
               
                stdata[i].testpositivityratebefore=(parseFloat(tested[index1].testpositivityrate.replace('%',''))-parseFloat(tested[index1-1].testpositivityrate.replace('%',''))).toFixed(2)

                if(stdata[i].testpositivityratebefore<0)
                {
                            stdata[i].testpositivityratebefore="-"+Math.abs(stdata[i].testpositivityratebefore)
                }
                else
                {
                            stdata[i].testpositivityratebefore="+"+Math.abs(stdata[i].testpositivityratebefore)
                }

                }
            }
        }
        this.setState({posts:stdata})
        //consolelog(this.state.posts)
        
    })
    .catch(error => {
        //////consolelog(error)
    })


    }
    
    

    render() {
        const increase = this.state.increase
        ////consolelog(increase)
        const posts = this.state.posts
        ////consolelog(posts)
        var new1=this.state.new1
        var recov=this.state.recov
        var dead=this.state.dead
        var samples=this.state.samples
        var states=[]
        var num=[]
        var total=0
        for (var i=1;i<posts.length;i+=1) {
          //////consolelog(posts[i].state);
          states[i-1]=posts[i].state
          num[i-1]=posts[i].confirmed
          total=total+parseInt(posts[i].confirmed)
        }
      //////consolelog(total)
      var tested=this.state.num
       var percent=((total/tested)*100)
       var thousand=(tested/(1.4*1000000))
       if(tested==0)
        {
            percent=0
        }
      //////consolelog(percent)
      //////consolelog(tested)
        //////consolelog({states})
        //////consolelog({num})
        return (
            <div>
               
                <div className="books">
                    {
      
                         posts.length?
                         posts.map( (posts,ind) => {
                            return ind!=0 ?
                                
                                <div className="book" key={posts.state} >
                                  
                                  <h2>{posts.state}</h2>
                                  <h1><CountUp 
                                         end={posts.confirmed}
                                         duration={4} delay={1} /></h1>
                                  <div className="details" key={posts.state}>
                                  <h3 style={{color: "azure"}} className="blink">(+{posts.increase})</h3>
                                    <h3 style={{color: "springgreen"}}>Recovered - <CountUp 
                                         end={posts.recovered}
                                         duration={4} delay={1} /> (+{posts.new_recovered})</h3>
                                    <h3 style={{color: "red",marginTop:"0px"}}>Deaths - <CountUp 
                                         end={posts.deaths  }
                                         duration={4} delay={1} /> (+{posts.new_dead})</h3>
                                    <h3 style={{color: "orange",marginTop:"0px"}}>Tested - {posts.totaltested} (+{posts.totaltestedbefore})</h3>
                                    <h3 style={{color: "yellow",marginTop:"0px"}}>Positivity Rate - {posts.testpositivityrate} ({posts.testpositivityratebefore}%)</h3>
                         <h3 style={{color: "snow",marginTop:"0px"}}>Tests Per 1000 - {posts.testsperthousand} (+{posts.testsperthousandbefore})</h3>
                                    <a style={{display: "table-cell"}}  target="_blank" 
                                href={`https://www.covid19india.org/state/${posts.statecode}`}
                                className="link11"> <p className="design1">Click here to See More <FontAwesomeIcon icon={faExternalLinkAlt} /></p></a>
                                  </div>


                                  
                                </div>
                                
                                
                                :
                                <div>
                                  <h1 className="head1">COVID-19 India Tracker</h1>
                                <div className="first" >
                                    
                                    <div className="gradient-border" id="box">
                                    <h1><CountUp 
                                          end={posts.confirmed}
                                          duration={3} delay={1}/>
                                            <p style={{marginLeft:"50px"}} className="title">Cases <FontAwesomeIcon icon={faBriefcaseMedical} />
                                            <p style={{marginTop:"8px",marginLeft:"11px"}} className="blink"> (+<CountUp 
                                            end={new1}
                                            duration={5} delay={1}/>)</p></p>
                                           
                                    </h1>
                                    
                                    </div>
                                        
                
                                    <div className="gradient-border" id="box">
                                        
                                        <h1><CountUp 
                                          end={posts.recovered}
                                          duration={3} delay={1} />
                                            <p style={{marginLeft:"25px"}}className="title">Recovered <FontAwesomeIcon icon={faUsers} />
                                            <p style={{marginTop:"8px",marginLeft:"45px"}} className="blink">(+<CountUp 
                                            end={recov}
                                            duration={5} delay={1}/>)</p></p>
                                        </h1>
                                    </div>
                
                                    <div className="gradient-border" id="box">
                                        <h1><CountUp 
                                          end={posts.deaths }
                                          duration={3} delay={1} />
                                            <p style={{marginLeft:"40px"}} className="title">Dead <FontAwesomeIcon icon={faSkullCrossbones} />
                                            <p style={{marginTop:"8px",marginLeft:"13px"}} className="blink">(+<CountUp 
                                            end={dead}
                                            duration={10} delay={1}/>)</p></p>
                                        </h1>
                                    </div>

                                    <div className="gradient-border1" id="box1">
                                        <h1><CountUp 
                                          end={tested}
                                          duration={3} delay={1} />
                                            <p style={{marginLeft:"60px"}} className="title">Tested <FontAwesomeIcon icon={faVial} />
                                            <p style={{marginTop:"8px",marginLeft:"06px"}} className="blink">(+<CountUp 
                                            end={samples}
                                            duration={4} delay={1}/>)</p></p>
                                        </h1>
                                    </div>

                                    <div className="gradient-border"  id="box">
                                        <h1 style={{marginTop:"50px"}}><div style={{marginLeft:"60px"}}><CountUp 
                                          end={percent}
                                          duration={6} delay={1} /> %</div>
                                            <p className="title">Positivity Rate <FontAwesomeIcon icon={faNotesMedical} /></p>
                                        </h1>
                                    </div>
                                    
                                    <div className="gradient-border"  id="box" >
                                        
                                        <h1 style={{marginTop:"50px"}}><div style={{marginLeft:"85px",marginTop:"20px"}}><CountUp 
                                          end={thousand}
                                          duration={6} delay={1} /></div>
                                            <p className="title">Number of Tests
                                            <p className="title" style={{marginLeft:"40px"}}>Per 1000 <FontAwesomeIcon icon={faCheckCircle} /></p></p>
                                            
                                        </h1>
                                    </div>
                                    
                                </div>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                    <h1 className="head1">State Wise Count</h1>
                                    <h2 className="hd" style={{marginTop:"0px"}}>(Click/Tap on each state to know more)</h2>
                                
                                
                              </div>
                          }
                              ):null
                    }
                     

                </div>
            </div>
        )
    }
}

export default CaseList
