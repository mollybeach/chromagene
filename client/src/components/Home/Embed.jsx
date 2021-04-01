import React from 'react';

const Embed = () => {
  
    return (
      <div>
     <canvas style={{position: 'static',width: '300px', height: '300px'}}> </canvas>
    <div className='iframeContainer'>
            <iframe id="framey" title='playbox3'src="https://shaderpark.netlify.com/embed/-MWUpCisbIBWPq1Z08q3" frameBorder="0"  style={{position: 'fixed'  }}></iframe>
            <iframe id="framey" title='playbox3'src="https://shaderpark.netlify.com/embed/-MWzRDAljWc9zYg1Y_xK" frameBorder="0" style={{position: 'fixed', 'margin-left': '25px'}}></iframe>
            <iframe id="framey" title='playbox3'src="https://shaderpark.netlify.com/embed/-MWzRcsR3dfQV5mH_N8j" frameBorder="0"  style={{position: 'fixed', 'margin-left': '50%'}}></iframe>
            <iframe id="framey" title='playbox3'src="https://shaderpark.netlify.com/embed/-MWzRyBzCS1JVqMQi3WK" frameBorder="0" style={{position: 'fixed',  'margin-left': '-23%'}}></iframe>
       </div>
 
    
      </div>

    )
  }

  export default Embed;


