import {Html, useProgress} from '@react-three/drei';

const Loader = () => {
  const {progress}=useProgress();
  return (
      <Html>
          <span className='canvas-load'></span>
          <p
            style={{
              fontSize: 20,
              color:"white",
              fontWeight:800,
              marginTop:-200

            }}  
          
          >3D:Model {progress.toFixed(2)} % Loaded</p>


          

      </Html>
  )
}

export default Loader