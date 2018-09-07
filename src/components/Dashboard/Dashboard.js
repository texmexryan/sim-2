import React, { Component } from 'react';
import '../../App.css';
//import routes from '../../../routes'
import House from '../House/House'
import axios from 'axios'
import {Link} from 'react-router-dom'



class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: []
        }

        // this.getHouses = this.getHouses.bind(this)
        this.deleteHouse = this.deleteHouse.bind(this)
    }

    componentDidMount() {
        axios.get(`/api/houses`)
        .then(res => {
          console.log(res.data);
          this.setState({houses: res.data});
        });
      }

  //gethouse func
//   getHouses() {
//       axios.get('./api/houses')
//       .then(res => {
//           this.setState({houses: res.data})
//       })
//   }

  //delete house func
  deleteHouse(id){
      axios.delete(`./api/house/${id}`)
      .then(res => {
          this.setState({houses: res.data})
      })
  }
  
    render() {
        let housesToDisplay = this.state.houses.map((house, i) => {
            return (
              <House
                key={house.id}
                house={house}
                name={house.name}
                address={house.address}
                city={house.city}
                deleteHouse={this.deleteHouse}
                state = {house.state}
                zipcode = {house.zipcode}
                // userid = {e.user_id}
              />
            );
          });
        // map here
    return (
      <div>
            <Link to = '/wizard'><button className = 'addprop-btn'>Add New Property</button></Link>
    
        
        {/* <House/> */}
            {/* link to wizard */}
            {/* // list routes {} */}
            {housesToDisplay}
      </div>
    );
  }
}


 
export default Dashboard ;