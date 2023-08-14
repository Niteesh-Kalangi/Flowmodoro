import React from "react";
import { useState, useEffect } from "react";
import "./TimerTodoListItem.css";

const TimerTodoListItem = (props) => {
    // const [inProgress, setInProgress]= useState(() => {
    //     return props.isActive(props.id);
    // });

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setInProgress(props.isActive(props.id, props.title));
    //     }, 1000);
    //     return () => clearTimeout(intervalId);
    // }, []);

    // var bg = "transparent";
    // var textcolor = "white";

    // function initializeBackground() {
    //     if (inProgress) {
    //         bg = "#5c02c9";
    //         textcolor = "orange";
    //     } else {
    //         bg = "#7b00e8";
    //         textcolor = "white";
    //     }
    // }

    // initializeBackground();

    return (
        <div style={{"width": "100%", "display": "flex", "marginRight": "auto"}}>
            <div className="timertodolistitemcompletebutton" style={{"marginLeft": "auto", "marginRight": "auto"}} onClick={(e) => {props.completeTask(props.id, props.title); props.incrementCompleted((prev) => {return prev + 1;});}}>&#10003;</div>
            <div className="timertodolistitem" id={`timertodolistitem${props.id}`} style={{"background": props.isActive(props.id)? "#5c02c9" : "#7b00e8", "color": props.isActive(props.id) ? "orange" : "white"}} onClick={(e) => {
                // setInProgress(!inProgress);
                props.updateActive(props.id, props.title);
                // e.stopPropagation();
            }}>
                <h4 className="timertodotitle">{props.title}</h4>
            </div>
        </div>
    );
}

export default TimerTodoListItem;
