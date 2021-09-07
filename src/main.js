import React from 'react'
import { render } from 'react-dom'
import { Exercise1 } from './pages/Exercise1';
import { Exercise2 } from './pages/Exercise2';

function App() {
    const [exercise, setExercise] = React.useState(false);
    return (
        <div>
        <p onClick={() => setExercise(!exercise)}>Change exercise</p>
        {exercise ? <Exercise1 /> : <Exercise2 />}
        </div>
    )
}
render(<App/>, document.getElementById("root"))