"use client";

import React, { useRef } from 'react'
import * as THREE from "three";
import { useGLTF, useTexture, useAnimations } from '@react-three/drei'

useGLTF.preload('/scene.gltf')

const flavorTextures = {
  lemonLime: "/labels/lemon-lime.png",
  grape: "/labels/grape.png",
  blackCherry: "/labels/cherry.png",
  strawberryLemonade: "/labels/strawberry.png",
  watermelon: "/labels/watermelon.png",
};

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.3,
  metalness: 1,
  color: "#bbbbbb", // Добавлен базовый цвет
});

export type SodaCanProps = {
  flavor?: keyof typeof flavorTextures;
  scale?: number;
};

export function Model({
  flavor = "blackCherry",
  scale = 0.4,
  ...props
}: SodaCanProps) {
  const { nodes, materials } = useGLTF('/scene.gltf');
  const labels = useTexture(flavorTextures);

  // Создаем материал с текстурой внутри компонента
  const label = labels[flavor];
  const materialWithLabel = new THREE.MeshStandardMaterial({
    map: label,
    roughness: 0.3,
    metalness: 0.5,
    transparent: true,
  });

  // Отключаем flipY для всех текстур
  Object.values(labels).forEach(texture => texture.flipY = false);

  return (
    <group {...props} dispose={null} scale={scale}>
      <group rotation={[Math.PI / 2, 3.2, 0]}>
        <group position={[-1.145, -1.467, -2.352]}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Object_3 as THREE.Mesh).geometry}
            material={materials['13___Default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Object_4 as THREE.Mesh).geometry}
            material={materialWithLabel} // Используем новый материал
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Object_5 as THREE.Mesh).geometry}
            material={materials.defaultMat1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Object_6 as THREE.Mesh).geometry}
            material={materials['07___Default']}
          />
        </group>
      </group>
    </group>
  );
}
