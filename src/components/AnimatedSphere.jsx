import {
	Sphere,
	MeshDistortMaterial,
	RenderTexture,
	Text,
	Decal,
	PerspectiveCamera,
} from "@react-three/drei";

const AnimatedSphere = () => {
	return (
		<Sphere visible args={[1, 100, 200]} scale={1}>
			<meshStandardMaterial color="#f3f3f3" roughness={0} metalness={0.5} />
			<Decal debug scale={1} position={[1, 0.1, 0.1]}>
				<meshStandardMaterial roughness={0.6} transparent>
					<RenderTexture attach="map" anisotropy={16}>
						<PerspectiveCamera
							makeDefault
							manual
							aspect={-0.25 / 0.25}
							position={[0, 0, 3]}
						/>
						<Text rotation={[0, 0, 0]} fontSize={0.5} color="red">
							Hello World
						</Text>
					</RenderTexture>
				</meshStandardMaterial>
			</Decal>
		</Sphere>
	);
};

export default AnimatedSphere;
