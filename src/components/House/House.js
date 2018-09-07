import React from 'react'




function House (props) {
    return (
        <div className = 'house_container'>
            <h2>House</h2>
            <h5>Property Name: {props.name}</h5>
            <h5>Address: {props.address}</h5>
            <h5>City: {props.city}</h5>
            <h5>State: {props.state}</h5>
            <h5>Zipcode: {props.zipcode}</h5>
            <button onClick = {props.deleteHouse}>Delete</button>
            <br/>
        </div>
    )
}
export default House;