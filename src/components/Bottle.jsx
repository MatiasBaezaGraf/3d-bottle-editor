/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 bottle.gltf 
Author: RoutineStudio (https://sketchfab.com/TheRoutine)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/water-bottle-42f0a41639a14d62ba6ccd77846ba7f1
Title: Water Bottle
*/

import React, { useRef } from "react";
import {
	MeshReflectorMaterial,
	useGLTF,
	Text,
	Decal,
	RenderTexture,
	Dodecahedron,
	PerspectiveCamera,
} from "@react-three/drei";

export function Bottle({ bottleText, props }) {
	const { nodes, materials } = useGLTF("/bottle.gltf");

	return (
		<group position={[0, -2.2, 0]} {...props} dispose={null} scale={0.27}>
			<mesh geometry={nodes.Lid_Water_Bottle_Lid_0.geometry}>
				<MeshReflectorMaterial
					attach="material"
					color="#f5f0f0"
					roughness={0}
				/>
			</mesh>
			<mesh geometry={nodes.Bottle_Water_Bottle_Yellow_Part_0.geometry}>
				{/* <meshLambertMaterial attach="material" color="#464646" /> */}
				<meshStandardMaterial color="#939393" roughness={0} metalness={0.5} />
				<Decal scale={5} position={[3.1, 14, 0.2]} rotation={[0.0, 4.6, 0]}>
					<meshStandardMaterial roughness={0.6} transparent>
						<RenderTexture attach="map" anisotropy={16}>
							<PerspectiveCamera
								makeDefault
								manual
								aspect={-0.25 / 0.25}
								position={[0, 0, 3]}
							/>
							<Text rotation={[0, 0, 0]} fontSize={0.3} color="white">
								{bottleText}
							</Text>
						</RenderTexture>
					</meshStandardMaterial>
				</Decal>
			</mesh>
			<mesh geometry={nodes.Bottle_Water_Bottle_Metal_Part_0.geometry}>
				<meshLambertMaterial attach="material" color="#464646" />
			</mesh>
		</group>
	);
}

useGLTF.preload("/bottle.gltf");
