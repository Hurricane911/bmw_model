import { Canvas } from "@react-three/fiber";
import { useGLTF, PresentationControls } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";

function Model(props) {
  const { scene } = useGLTF(`${process.env.PUBLIC_URL}/bmw.glb`);
  return <primitive object={scene} {...props} />
}

function App() {
  return (
    <Canvas 
      dpr={[1,2]} 
      shadows 
      camera={{ 
        fov: 35, 
        position: [0, 0, 3] // Move camera closer
      }} 
      style={{"position": "absolute"}}
    >
      <color attach="background" args={["#101010"]} />
      <ambientLight intensity={0.7} /> {/* Increase light */}
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
      <PresentationControls 
        speed={1.5} 
        global 
        zoom={1} // Increase zoom to 100%
        polar={[-0.1, Math.PI / 4]}
      >
        <Suspense fallback={null}>
          <Model scale={0.05} /> 
          <Environment files="https://cdn.glitch.com/26f00b29-51b7-4811-9ca7-3f1c898bb4b3%2Fmusic_hall_01_1k.hdr?v=1619983235673" />
        </Suspense>
      </PresentationControls>
    </Canvas>
  );
}

export default App;