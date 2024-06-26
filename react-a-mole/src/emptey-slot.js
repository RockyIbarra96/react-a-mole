
import { useEffect } from "react"
import MoleHill from './cartoon-mud.png'

const EmptySlot = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} 
            src={MoleHill}
            alt="image of mound of mud" />
        </div>
    )
}

export default EmptySlot