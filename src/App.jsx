import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
    return (
        <div>
            <h1
            onMouseEnter={()=> console.log("Hiiri tuli mestoille")}
            onClick={()=> window.alert('Otsikkoa painettu')}

            >Heippa</h1>
        </div>
    )
}

export default App
