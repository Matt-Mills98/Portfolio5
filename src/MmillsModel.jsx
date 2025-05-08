import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, MeshTransmissionMaterial, PerformanceMonitor, Environment, Lightformer } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { easing } from 'maath'
import './index.css'

//Matt Mills intro screen. Uses threeJS to load an object.

export default function Scene(props) {
  const { color } = props;
  const [res, setRes] = useState(512);
  const [samples, setSamples] = useState(8)
  const [perfSucks, degrade] = useState(false)

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }
  //responsive canvas
  window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
  });
  const increasePerf = () => {
    if (res > 64) {
      setRes(res / 2);
    }
    else {
      setRes(64);
    }
    if (samples > 2) {
      setSamples(samples / 2)
    }
    else {
      setSamples(2);
    }
  }
  const reducePerf = () => {
    if (res < 2048) {
      setRes(res * 2);
    }
    else {
      setRes(2048);
    }
    if (samples > 32) {
      setSamples(samples * 2)
    }
    else {
      setSamples(32);
    }
  }
  return (
    <Canvas camera={{ position: [0, 3, 100], fov: 15 }}>
      <PerformanceMonitor onIncline={() => reducePerf()} onDecline={() => { increasePerf(); degrade(true) }} >
        <group position={[0, 0, 0]}>
          <Physics gravity={[0, 0, 0]}>
            <Model>
              <MeshTransmissionMaterial color={color} metalness={.8} samples={samples} resolution={res} />
            </Model>
          </Physics>
        </group>
        <Env perfSucks={perfSucks} color={color} />
      </PerformanceMonitor>
    </Canvas>
  )
}




function Model({ children, color = '#FFFFFF', roughness = 0, ...props }) {
  const ref = useRef()
  const { nodes } = useGLTF('/LogoNew.glb');

  useFrame((state, delta) => {
    easing.dampC(ref.current.material.color, color, 1, delta)
    ref.current.rotation.x += 0.0005;
    ref.current.rotation.y += 0.001;
  })
  return (
    <mesh ref={ref} scale={30} geometry={nodes.Curve.geometry} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
      {children}
    </mesh>
  )
}
function Env({ perfSucks, color }) {
  const ref = useRef()
  useFrame((state, delta) => {
    // Animate the environment as well as the camera
    if (!perfSucks) {
      easing.damp3(ref.current.rotation, [Math.PI / 2, 0, state.clock.elapsedTime / 5 + state.pointer.x], 0.2, delta)
      easing.damp3(state.camera.position, [Math.sin(state.pointer.x / 4) * 9, 1.25 + state.pointer.y, Math.cos(state.pointer.x / 4) * 9], 0.5, delta)
      state.camera.lookAt(0, 0, 0)
    }
  })
  // Runtime environments can be too slow on some systems, better safe than sorry with PerfMon
  return (
    <Environment frames={perfSucks ? 1 : 30} resolution={30} background blur={1}>
      <color attach="background" args={['#222']} />
      <group ref={ref}>
        <Lightformer intensity={.6} form={"ring"} color={color} position={[-5, 2, -1]} scale={[10, 10, 1]} />
      </group>
    </Environment>
  )
}




