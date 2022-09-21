import React from "react";
import RobotAddress from "./RobotAddress"

const RobotCard = (robot) => {

    const [display, setDisplay] = React.useState(false);
    const toggle = () => {
        setDisplay(!display);
    }

    return (
        <div className="cards">
        <div className="card">
            <h2>{robot.name}</h2>
            <img src = {`https://robohash.org/${robot.id}?set=set2`} alt="{robot.name}"/>
            <p>Username: {robot.username}</p>
            <p>Phone: {robot.phone}</p>
            <p>Email: {robot.email}</p>
            <p>Website: {robot.website}</p>
            <button onClick={toggle}>Toggle</button>
            {display && (<RobotAddress address={robot.address} />)}
        </div>
        </div>
    )
}

export default RobotCard