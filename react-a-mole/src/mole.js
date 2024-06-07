
import {useEffect} from 'react'
import moleImg from './Cartoon-Mole.png'

function Mole(props){
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    }, [props])

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={moleImg}
            onClick={props.handleClick}
            alt="image of mole, png image from pngtree.com" />
        </div>
    )
}


export default Mole