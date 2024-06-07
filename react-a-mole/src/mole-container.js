import {useState} from 'react'
import Mole from "./mole"
import EmptySlot from './emptey-slot'

function MoleContainer(props) {
    let [theMole, setTheMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }

    let displayMole = theMole ? <Mole 
    setScore={props.setScore} 
    toggle={setTheMole} 
    handleClick={handleClick} /> : 
    <EmptySlot 
    toggle={setTheMole} />

    return (
        <div>
            {displayMole}
        </div>
    )
}

export default MoleContainer