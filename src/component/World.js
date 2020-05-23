import React, { Component } from 'react'
import Axios from 'axios'
import CountUp from 'react-countup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faLocationArrow,faChartBar,faExternalLinkAlt,faBriefcaseMedical,faSkullCrossbones,faUsers, faUser } from '@fortawesome/free-solid-svg-icons'
import './style2.css'
class World extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts: []
        }
    }
    
    componentDidMount() {
        Axios.get('https://api.covid19api.com/summary')
        .then(response => {
            //console.log(response.data)
            // this.setState({lists:response.data})
            // 
            this.setState({posts:response.data.Global})
            // this.setState({lists:response.data.statewise.state})
            // //console.log(this.state.posts.map((a,ind) =>{ 
            //   return ind!=0?
            //   a.state:
            // null}));
            // const {limp}=this.state.posts?this.state.posts.map((a,ind) =>{ 
            //   return ind!=0?
            //   a.state:
            // null}):null
            // //console.log({limp});
        })
        .catch(error => {
            //console.log(error)
        })
    }

    render() {
        const {posts} = this.state
        
        //console.log({posts})
        //console.log(posts.TotalConfirmed)
        var world=[];
        Object.keys(posts).forEach(function(key){
            world.push(<option value={key}>{posts[key]}</option>);
        });
        var result = Object.entries(posts)
        var obj={"1": 500, "2": 15, "5": 4, "4": 480, "10": 87}
        var confirmed=Object.values(obj)
        //console.log(confirmed)
        var num=typeof(posts[0])
        // console.log(result)
        // console.log(world)
         var conf=parseInt(posts.TotalConfirmed)
        return (
                <div>
                    <h1 className="head1">COVID-19 World Wide Tracker</h1>
                    
                <div className="first" >
                                    
                                    <div className="gradient-border" id="box" key={posts.TotalConfirmed}>
                                    <h2><CountUp end={posts.TotalConfirmed} separator="," start={0} duration={4}/>
  
                                          
                                            <p className="title" style={{marginLeft:"50px"}}>Cases <FontAwesomeIcon icon={faBriefcaseMedical} /></p>
                                            
                                    </h2>
                                        
                                    </div>
                                        
                
                                    <div className="gradient-border" id="box" key={posts.TotalConfirmed}>
                                        
                                        <h2><CountUp 
                                          end={posts.TotalRecovered} start={0} separator="," duration={4}
                                         />
                                            <p className="title" style={{marginLeft:"25px"}}>Recovered <FontAwesomeIcon icon={faUsers} /></p>
                                            
                                        </h2>
                                    </div>
                
                                    <div className="gradient-border" id="box" key={posts.TotalConfirmed}>
                                        <h2><CountUp 
                                          end={posts.TotalDeaths} separator=","
                                          start={0} duration={4}/>
                                            <p className="title" style={{marginLeft:"40px"}}>Dead <FontAwesomeIcon icon={faSkullCrossbones} /></p>
                                            
                                        </h2>
                                    </div>
                                    
                                </div>

                                
                                </div>
                
                          
                
        )
    }
}

export default World
