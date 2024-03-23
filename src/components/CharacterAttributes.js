import React from "react";
// import { createRoot } from 'react-dom/client';

export default function CharacterAttributes({ totalPoints }) {

    const [health, setHealth] = React.useState(0);
    const [stamina, setStamina] = React.useState(0);
    const [speed, setSpeed] = React.useState(0);
    const [score, setScore] = React.useState(0);

    React.useEffect(() => {
        setScore(() => stamina + speed + health);
    }, [health, stamina, speed]);

    const handleChange = (e) => {
      
        // Could save e.target.name & e.target.value to variables as well
      
        const isWithinThreshold = +e.target.value <= Math.floor(totalPoints * 0.7);
        const isTotalPointsOne = totalPoints === 1;

        if (e.target.name === "health") {
            if ((isTotalPointsOne && stamina === 0 && speed === 0 && +e.target.value === 1) ||
                (isWithinThreshold && +e.target.value + stamina + speed <= totalPoints)) {
                setHealth(+e.target.value);
            }
        } else if (e.target.name === "stamina") {
            if ((isTotalPointsOne && health === 0 && speed === 0 && +e.target.value === 1) ||
                (isWithinThreshold && health + +e.target.value + speed <= totalPoints)) {
                setStamina(+e.target.value);
            }
        } else if (e.target.name === "speed") {
            if ((isTotalPointsOne && health === 0 && stamina === 0 && +e.target.value === 1) ||
                (isWithinThreshold && health + stamina + +e.target.value <= totalPoints)) {
                setSpeed(+e.target.value);
            }
        }
    };

    return (
        <div>
            Character stats: <span id="points">{Number(totalPoints) - score}</span> points left.
            <div>
                <input type="range" id="health" name="health" min="0" max={totalPoints} value={health} step="1" onChange={(e) => handleChange(e)} />Health
            </div>
            <div>
                <input type="range" id="stamina" name="stamina" min="0" max={totalPoints} value={stamina} step="1" onChange={(e) => handleChange(e)} />Stamina
            </div>
            <div>
                <input type="range" id="speed" name="speed" min="0" max={totalPoints} value={speed} step="1" onChange={(e) => handleChange(e)} />Speed
            </div>
        </div>
    );
}


// document.body.innerHTML = "<div id='root3'></div>";
// const root = createRoot(document.getElementById("root3"));
// root.render(<CharacterAttributes totalPoints={15} />);