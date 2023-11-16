import { useState } from "react";

import "./App.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Box from "./components/Box";
import AnimatedSphere from "./components/AnimatedSphere";
import { Bottle } from "./components/Bottle";

function App() {
	const [text, setText] = useState("Hello World");

	return (
		<>
			<div className="flex flex-col h-[700px] w-[700px] bg-[#cccccc] p-[10px] rounded shadow-lg">
				<input
					className="p-[5px] rounded"
					type="text"
					placeholder="Enter text here"
					onChange={(e) => {
						setText(e.target.value);
					}}
				/>
				{/* <Canvas className="h-[500px]">
					<OrbitControls enableZoom={false} />
					<ambientLight intensity={0.5} />
					<directionalLight position={[-2, 5, 2]} intensity={1} />
					<Box />
				</Canvas> */}
				{/* <Canvas className="h-[500px]">
					<OrbitControls />
					<ambientLight intensity={0.5} />
					<directionalLight position={[-2, 5, 2]} intensity={1} />
					<AnimatedSphere />
				</Canvas> */}
				<Canvas>
					<OrbitControls enableZoom={true} />
					<ambientLight intensity={0.5} />
					<directionalLight position={[-2, 5, 2]} intensity={1} />
					<Bottle bottleText={text} />
				</Canvas>
			</div>
		</>
	);
}

export default App;
