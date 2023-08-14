import React from "react";
import { useState, useEffect } from "react";
import TimerTodoListItem from "./TimerTodoListItem.js";
import "./TimerTodoList.css";

const TimerTodoList = (props) => {
    return (
        <div className="timertodolist">
            <h3 style={{"textAlign": "center"}}>Click on the tasks you're working on. &#10003; them off when completed.</h3>
            {/* <hr style={{height:"1px"}}></hr> */}
            {props.todoList.map((item) => {
                return (
                    <div>
                        <TimerTodoListItem
                            title={item.title}
                            deadline={item.deadline}
                            id={item.id}
                            updateActive={props.updateActive}
                            isActive={props.isActive}
                            completeTask={props.completeTask}
                            incrementCompleted={props.incrementCompleted}
                        />
                    </div>
                    );}
                )
            }
        </div>
    );
}

export default TimerTodoList;