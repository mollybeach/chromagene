
import React from 'react';

const Glitch= () => {
  
    return (
        <div className="glitch-embed-wrap"  style={{'height': '420px', 'width': '100%', 'border': '0'}}>
        <iframe
          src="https://glitch.com/embed/#!/embed/florentine-honey-snickerdoodle?path=index.html&previewSize=0"
          title="florentine-honey"
          allow="geolocation; microphone; camera; midi; vr; encrypted-media"
         style={{'height': '100%', 'width': '100%', 'border': '0'}}> 
        </iframe>
      </div>

    )
  }

  export default Glitch;