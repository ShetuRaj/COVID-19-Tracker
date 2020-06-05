import React, { Component } from 'react'
import Axios from 'axios'
import './zones.css'
var abc=''
class Zones extends Component {
    constructor(props) {
        super(props)
   
        this.state = {
            value: '' ,
            zones:[] ,
            val:'Input',
            select:'Andhra Pradesh'
        }
        this.addValue = this.addValue.bind(this);
      this.updateInput = this.updateInput.bind(this);
     
    }

    addValue(evt)
    {
      evt.preventDefault();
      if(this.state.value !=undefined)
      {
        var a=this.state.value
        // alert('Your input value is: ' + this.state.value)
        this.setState({val:a})
        //console.log(this.state.value)
        //console.log(this.state.val)
        abc=this.state.value
      }
    }

    updateInput(evt){
        this.state={value: evt.target.value};  
          }
   
    componentDidMount(){
        this.setState({val:abc})
        Axios.get('https://api.covid19india.org/zones.json')
        .then(response => {
            this.setState({zones:response.data.zones})
           
            //console.log(response)
            //console.log(response.data.zones)
            //console.log(this.state.val)
        })
        .catch(error => {
            ////console.log(error)
        })
    }

    render() {  
        //console.log(this.state.val)
        var val=this.state.val
        const zon=this.state.zones
        //console.log(zon)
        //console.log(val)
        const red=[]
        
        var j=0,k=0,z=0;
        for(var i=0;i<zon.length;i++)
        {
            if(zon[i].state.toLowerCase()==val.toLowerCase() && zon[i].zone=="Red"){
                red[j]=zon[i].district
                j++;
            }    
        }
        //console.log(red)
        
        return (
            <div>
                <h1 style={{marginLeft:"10px",color:"darkblue",marginTop:"0px"}}>State-Wise Red, Orange and Green Zones in India</h1>
                <h2 style={{marginLeft:"110px"}}>Select State</h2>
                <form onSubmit={this.addValue}>
                <select type="text" onChange={this.updateInput} placeholder="Select State" className="text">
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Delhi">Delhi</option>
                <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                <option value="Goa">Goa</option>
                </select>
                <br/><br/>
                <input type="submit" value="Search" className="button"/>
               </form>
               <div className="books2">
               {
                red.length?
                red.map(red =>
                   
                       
                    <div  key="abc" className="red">
                           
                                  <h2 style={{marginTop:"0px"}}>{red}</h2>
                                   
                                  </div>
                                 
                )
                :null
                   
                 }
                 <br></br>
                 <br></br>
                  {
                orange.length?
                orange.map(orange =>
                   
                       
                    <div  key="abc1" className="orange">
                                 
                                  <h2 style={{marginTop:"0px"}}>{orange}</h2>
                                   
                                  </div>
                                 
                )
                :null
                   
                 }
                 <br></br>
                 <br></br>
                  {
                green.length?
                green.map(green =>
                   
                    <div  key="abc2" className="green">
                                 
                                  <h2 style={{marginTop:"0px"}}>{green}</h2>
                                   
                                  </div>
                                 
                )
                :null
                   
                 }
                 </div>
            </div>
        )
    }
}

export default Zones