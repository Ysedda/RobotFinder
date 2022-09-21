import React from "react";

const RobotAddress = ({address}) => {

    return (
        <div>
        <p>Suite: {address.suite}</p>
        <p>Zipcode: {address.zipcode}</p>
        <p>City: {address.city}</p>
        </div>
    )
}

export default RobotAddress;