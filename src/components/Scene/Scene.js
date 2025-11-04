import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'; // ← ТОЛЬКО OrbitControls!
import { Model } from './Model';

export function Scene() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas camera={{ position: [30, 30, 30], fov: 35 }}>
                {/* Фон */}
                <color attach="background" args={['#2c3e50']} />

                {/* Освещение */}
                <ambientLight intensity={0.6} />
                <directionalLight
                    position={[10, 10, 5]}
                    intensity={1.2}
                    castShadow
                />

                {/* Модель */}
                <Model />

                {/* Управление - ТОЛЬКО OrbitControls */}
                <OrbitControls />
            </Canvas>
        </div>
    );
}