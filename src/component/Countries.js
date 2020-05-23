import React, { Component } from 'react'
import Axios from 'axios'
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faLocationArrow,faChartBar,faExternalLinkAlt,faBriefcaseMedical,faSkullCrossbones,faUsers, faUser } from '@fortawesome/free-solid-svg-icons'
import './style2.css'
class Countries extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts: [] 
        }
    }
    
    componentDidMount() {
        Axios.get('https://api.covid19api.com/summary')
        .then(response => {
            //console.log(response.data.Countries)
            this.setState({posts:response.data.Countries})
        })
        .catch(error => {
            //console.log(error)
        })
    }

    render() {
        const {posts} = this.state
        posts.sort((a, b) => (a.TotalConfirmed > b.TotalConfirmed) ? -1 : 1)
        //console.log(posts)
        
        return (
            <div>
                
                <h1 className="head111">COVID-19 Country Tracker</h1>
                <h2 className="hd">(Click/Tap on each country to get details)</h2>
                <div className="books11">
                    {
      
                         posts.length?
                         posts.map( (posts,ind) => 
                         
                         <div className="book11" key={posts.Country}>
                            
                         <h2>{ind+1}. {posts.Country} </h2>
                         <h1><CountUp 
                                end={posts.TotalConfirmed} separator=","
                                duration={4} delay={1} /></h1>
                         <div className="details11" key={posts.Country}>
                           <h3 style={{color: "springgreen"}}>Recovered - <CountUp 
                                end={posts.TotalRecovered} separator=","
                                duration={4} delay={1} /></h3>
                           <h3 style={{color: "red", marginLeft:"10px"}}>Deaths - <CountUp 
                                end={posts.TotalDeaths} separator=","
                                duration={4} delay={1} /></h3>
                                <a style={{display: "table-cell"}}  target="_blank" 
                                href={`https://www.worldometers.info/coronavirus/country/${(posts.Country).toLowerCase()}/`} 
                                className="link11"> <p className="design1">Click here to See More <FontAwesomeIcon icon={faExternalLinkAlt} /></p></a>
                           

                         </div>

                         
                         
                       </div>
                       
                         
                              ):null
                    }
                     

                </div>
                
            </div>
        )
    }
}

export default Countries
