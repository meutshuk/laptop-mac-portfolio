/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 mecbook-v2.glb --transformm 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/mecbook-v2.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.062, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, -0.082]}>
          <group position={[0.066, 0.017, 0.026]} rotation={[1.57, 0, 0]}>
            <mesh geometry={nodes.Object_6.geometry} material={materials['Steel_-_Satin_NONE']} />
            <mesh geometry={nodes.Object_6_1.geometry} material={materials['Aluminum_-_Satin']} />
            <mesh geometry={nodes.Object_6_2.geometry} material={materials.Glass_Clear} />
            <mesh geometry={nodes.Object_6_3.geometry} material={materials['Steel_-_Satin']} />
          </group>
          <mesh geometry={nodes.Object_0.geometry} material={materials['Aluminum_-_Anodized_Rough_Grey']} />
          <mesh geometry={nodes.Object_0_1.geometry} material={materials['Aluminum_-_Satin_casing.jpg']} />
          <mesh geometry={nodes.Object_0_2.geometry} material={materials['Rubber_-_Soft']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/mecbook-v2.glb')
