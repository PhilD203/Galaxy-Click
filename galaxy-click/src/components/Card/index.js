import React from "react";
import "./style.css";



function StarCard(props){
    return(
        <div className = "card">
            <div className = "img-container">
            <img alt={props.name} src={props.image} id="cardImg" />
            </div>
            <div className="content">
            <ul>
            <li>
                <strong>Name:</strong> {props.name}
            </li>
            <li>
                <strong>Occupation:</strong> {props.occupation}
            </li>
            <li>
                
            </li>

            </ul>
            </div>
        </div>
    )
}

export default StarCard;