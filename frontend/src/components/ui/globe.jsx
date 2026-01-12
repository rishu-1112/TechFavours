import { useEffect, useRef } from "react"
import createGlobe from "cobe"
import { useMotionValue, useSpring } from "motion/react"
import { cn } from "@/lib/utils"

const MOVEMENT_DAMPING = 2400

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,

  phi: 0,
  theta: 0.35,

  dark: 1,
  diffuse: 0.6,
  mapSamples: 20000,
  mapBrightness: 0.9,

  baseColor: [0.6, 0.7, 1],
  glowColor: [0.7, 0.8, 1],

  markerColor: [0.9, 0.95, 1],
  markers: [
    { location: [19.076, 72.8777], size: 0.06 },
    { location: [40.7128, -74.006], size: 0.06 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [51.5072, -0.1276], size: 0.05 },
  ],
}



export function Globe({ className, config = GLOBE_CONFIG }) {
  let phi = 0
  let width = 0

  const canvasRef = useRef(null)
  const pointerInteracting = useRef(null)

  const r = useMotionValue(0)
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  })

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      r.set(r.get() + delta / MOVEMENT_DAMPING)
    }
  }

  
  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }

    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.003
        state.phi = phi + rs.get()
        state.width = width * 2
        state.height = width * 2
      },
    })

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1"
    }, 0)

    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [rs, config])
  
  return (
    <div
    className={cn(
        "absolute left-1/2 bottom-[-20%] -translate-x-1/2",
        "aspect-square w-[480px] md:w-[640px] lg:w-[720px] max-w-[95vw]",
        "opacity-65 pointer-events-auto",
        className
    )}
    >
      <canvas
        ref={canvasRef}
        className="size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        onPointerDown={(e) => updatePointerInteraction(e.clientX)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}
