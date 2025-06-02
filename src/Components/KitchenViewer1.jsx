import { Canvas } from "@react-three/fiber";
import {Link} from "react-router-dom";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useLocation } from "react-router-dom";
import './index.css'
import pinchCursor from './assets/gif/pinchCursor.gif'; // Import the cursor image
// Child component to handle the 3D model
const Model = () => {
  const { pathname } = useLocation();
  const pathSegment = pathname.split("/").pop(); // Extract last part of pathname

  // Map pathname to specific GLB files
  const modelMap = {
    "1": "/kitchen5.glb",
    "2": "/kitchen2.glb",
    "3": "/kitchen6.glb",
    "4": "/kitchen3.glb",
    "5": "/bedroom2.glb",
    "6": "/bedroom3.glb",
    "7": "/LivingRoom1.glb",
    "8": "/LivingRoom2.glb",
    "9": "/LivingRoom3.glb",
  };

  // Use mapped model path or fallback to a default model
  const modelPath = modelMap[pathSegment] || "/kitchen3.glb"; // Default to kitchen3.glb
  console.log("Loading model:", modelPath);

  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={0.5} />;
};

// Main component to render the Canvas
const KitchenViewer = () => {
  return (
    <>
    <div style={{position:"absolute",top:"45%",left:"0px",zIndex:"100",textAlign:"center",color:"white"}}>
      <img src={pinchCursor} style={{height:'70px'}}/>
      <p style={{fontSize:'12px'}}>Pinch and move the cursor<br/> to view the Model </p>
    </div>
    <Link to="/contact"><button className="buttonKnowMore3d discover_moreButton_home" >Book Model</button></Link>
    <Canvas className="miniModel" camera={{ position: [0, 0, 5], fov: 70 }} style={{ height: "80vh" ,marginTop:"100px",backgroundColor:"black"}}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Model />
      <OrbitControls
        enableRotate={true} // Allow rotation by dragging
        enableZoom={true} // Allow zooming with scroll or pinch
        enablePan={true} // Allow panning by dragging with right-click or shift
        minDistance={2} // Minimum zoom distance
        maxDistance={10} // Maximum zoom distance
      />
    </Canvas>
    </>
  );
};

useGLTF.preload("/kitchen3.glb");
useGLTF.preload("/kitchen5.glb");
useGLTF.preload("/kitchen2.glb");
useGLTF.preload("/kitchen3.glb");
useGLTF.preload("/kitchen4.glb");
useGLTF.preload("/kitchen7.glb");
useGLTF.preload("/bedroom6.glb");
useGLTF.preload("/bedroom2.glb");
useGLTF.preload("/bedroom3.glb");
export default KitchenViewer;