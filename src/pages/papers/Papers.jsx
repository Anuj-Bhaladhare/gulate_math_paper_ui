import React from 'react';
import { Button } from 'primereact/button';    
import { ColorPicker } from 'primereact/colorpicker';
import Navbar from '../../components/Navbar';



const Papers = () => {

    const [color, setColor] = React.useState(null);

    console.log(color)
  return (
    <div>
        <div>
           <Navbar />
        </div>
        <Button>Hello Anuj</Button>
        <ColorPicker value={color} onChange={(e) => setColor(e.value)} />

    </div>
  )
}

export default Papers;