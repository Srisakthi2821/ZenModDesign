import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

// Child component to handle the 3D model and rotation
const Model = ({modelName}) => {
  const { scene } = useGLTF(  `/${modelName}.gltf` );
  const modelRef = useRef(); // Create a reference to the model

  // Use useFrame to rotate the model automatically on each frame
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.03; // Rotate around the Y-axis
    }
  });

  return <primitive object={scene} scale={1} ref={modelRef} />;
};

// Main component to render the Canvas
const MiniModel = (props) => {
    const{modelName}=props
  return (
    <Canvas 
      dpr={[1, 2]} className="miniModel" style={{ height: "200px", width: "200px",position: "absolute", bottom: "-60px", left: "20%",filter: "drop-shadow(0 0 10px #000000)"  }}>
      <ambientLight intensity={1} />
      <Model modelName={modelName} /> {/* Render the Model component inside Canvas */}
    </Canvas>
  );
};

export default MiniModel;