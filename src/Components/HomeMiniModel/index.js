import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useRef, useEffect } from "react";

// Child component to handle the 3D model and cursor tracking
const Model = ({ modelName }) => {
  const modelPath = `/${modelName}.gltf`; // Construct model path from prop
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef(); // Reference to the model

  // Track mouse position for cursor-following rotation
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (modelRef.current) {
        // Normalize mouse coordinates to [-1, 1] range
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

        // Adjust model rotation based on mouse position
        modelRef.current.rotation.y = mouseX * Math.PI * 0.9; // Rotate left/right
        modelRef.current.rotation.x = -mouseY * Math.PI * 0.2; // Rotate up/down (inverted)
      }
    };

    // Add event listener for mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <primitive object={scene} scale={0.7} ref={modelRef} />;
};

// Main component to render the Canvas
const HomeMiniModel = ({ modelName }) => {
  return (
    <Canvas className="miniModel" camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Model modelName={modelName} />
      <OrbitControls
        enableRotate={false} // Allow rotation by dragging
        enableZoom={false} // Allow zooming with scroll or pinch
        enablePan={true} // Allow panning by dragging with right-click or shift
        minDistance={2} // Minimum zoom distance
        maxDistance={10} // Maximum zoom distance
      />
    </Canvas>
  );
};

export default HomeMiniModel;