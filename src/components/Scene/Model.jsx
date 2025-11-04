import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
    const { nodes, materials } = useGLTF('/models/scene.gltf')
    return (
        <group {...props} dispose={null}>
            <group scale={0.2}>
                <group rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh geometry={nodes.Object313_1_0.geometry} material={materials.material} position={[0.234, -0.188, 14.72]} />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/scene.gltf')