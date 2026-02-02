'use client';

import dynamic from 'next/dynamic';

// Dynamically import Antigravity to avoid SSR issues with Three.js
const Antigravity = dynamic(() => import('./Antigravity'), {
    ssr: false,
    loading: () => null,
});

export default function AntigravityBackground() {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: -1,
                pointerEvents: 'none',
            }}
        >
            <Antigravity
                count={300}
                magnetRadius={6}
                ringRadius={7}
                waveSpeed={0.4}
                waveAmplitude={1}
                particleSize={1.5}
                lerpSpeed={0.05}
                color="#175482"
                autoAnimate
                particleVariance={1}
                rotationSpeed={0}
                depthFactor={1}
                pulseSpeed={3}
                particleShape="capsule"
                fieldStrength={10}
            />
        </div>
    );
}
