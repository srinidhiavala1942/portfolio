import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { fadeIn } from '../../utils/motion';
import { useState, useEffect } from 'react';


const Earth = () => {
  const earth = useGLTF('/planet/scene.gltf');  
  return (
    <group ><primitive object={earth.scene} scale={2.4} position={[0, 0.2, 0]} rotation-y={0}   />
      </group>
  )
}

const EarthCanvas=()=>{
  return(
    <Canvas
    shadows
    frameloop='always'
    gl={{preserveDrawingBuffer:true}}
    camera={{
      fov:45,
      near:0.1,
      far:100,
      position:[-4,3,6]
    }}
    >
      <Suspense fallback={<CanvasLoader></CanvasLoader>}
        >
          <OrbitControls
          autoRotate

          autoRotateSpeed={2} 
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
             >
            </OrbitControls>

           <Earth>
            </Earth> 
        </Suspense>


    </Canvas>
  )


}

export default EarthCanvas