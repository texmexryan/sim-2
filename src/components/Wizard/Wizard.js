import React, { Component } from 'react';
import '../../App.css';
//import routes from '../../..routes'
import {Link} from 'react-router-dom'
import axios from 'axios'




class Wizard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0,
        }
        this.handleInput = this.handleInput.bind(this)
        this.addHouse = this.addHouse.bind(this)
    }

     
    addHouse() {
        axios.post('/api/house',{ name: this.state.name, address: this.state.address, city: this.state.city, state: this.state.state, zipcode: this.state.zipcode })
        .then(res => 
            this.setState({ houses: res.data})
        );
    }
    
    
    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
      
      

  
  
    render() {
    return (
      <div>
    
        <h2>The Wizard</h2>


         <section className="add_house">
        <input type="text" name="name" value = {this.state.name} onChange = {this.handleInput} placeholder="Add property name.."/>
        <input type="text" name="address" value = {this.state.address} onChange = {this.handleInput} placeholder="Add Address.."/>
        <input type="text" name="city" value = {this.state.city} onChange = {this.handleInput} placeholder="Add City.."/>
        <input type="text" name="state" value = {this.state.state} onChange = {this.handleInput} placeholder="Add State.."/>
        <input type="number" name="zipcode" value = {this.state.zipcode} onChange = {this.handleInput} placeholder="Add Zipcode.."/>
          
          
        </section>
          <Link to = '/'><button onClick={this.addHouse}>Complete</button></Link>

        <Link to = '/'><button>Cancel</button></Link>
      </div>
    );
  }
}


 
export default Wizard;