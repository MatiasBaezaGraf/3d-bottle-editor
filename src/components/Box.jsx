import React from "react";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import texture from "../assets/images/damascus.jpg";

const Box = () => {
	const colorMap = useLoader(TextureLoader, texture);

	return (
		<mesh rotation={[90, 0, 20]}>
			<boxGeometry attach="geometry" args={[3, 3, 3]} />
			<meshNormalMaterial attach="material" />
			{/* <meshStandardMaterial attach="material" map={colorMap} /> */}
			{/* <meshLambertMaterial attach="material" color="pink" /> */}
		</mesh>
	);
};

export default Box;
