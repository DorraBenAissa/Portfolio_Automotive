import { useEffect, useRef } from "react"
import * as THREE from "three"

export function SphereSculpture() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
    camera.position.set(0, 0, 12)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, preserveDrawingBuffer: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.15
    renderer.domElement.setAttribute("aria-hidden", "true")
    mount.appendChild(renderer.domElement)

    const sculpture = new THREE.Group()
    scene.add(sculpture)

    const gridSize = 9
    const layers = 9
    const count = gridSize * gridSize * layers
    const geometry = new THREE.SphereGeometry(0.19, 18, 18)
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.72,
      roughness: 0.16,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      vertexColors: true,
    })
    const mesh = new THREE.InstancedMesh(geometry, material, count)
    const matrix = new THREE.Matrix4()
    const color = new THREE.Color()
    const accentColors = [0xfce1d0, 0xffadd6, 0xa2baf5]
    let instance = 0

    for (let layer = 0; layer < layers; layer += 1) {
      const y = (layer - (layers - 1) / 2) * 0.47
      const twist = (layer - (layers - 1) / 2) * 0.075
      const cos = Math.cos(twist)
      const sin = Math.sin(twist)

      for (let row = 0; row < gridSize; row += 1) {
        for (let column = 0; column < gridSize; column += 1) {
          const x0 = (column - (gridSize - 1) / 2) * 0.47
          const z0 = (row - (gridSize - 1) / 2) * 0.47
          const x = x0 * cos - z0 * sin
          const z = x0 * sin + z0 * cos
          const edge = Math.max(Math.abs(x0), Math.abs(z0)) / 2
          const scale = 0.78 + edge * 0.16

          matrix.makeScale(scale, scale, scale)
          matrix.setPosition(x, y, z)
          mesh.setMatrixAt(instance, matrix)
          color.setHex(accentColors[(layer + row + column) % accentColors.length])
          color.lerp(new THREE.Color(0xffffff), 0.72)
          mesh.setColorAt(instance, color)
          instance += 1
        }
      }
    }

    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
    sculpture.add(mesh)
    sculpture.rotation.set(0.58, -0.58, 0.12)

    scene.add(new THREE.HemisphereLight(0xffffff, 0x16101f, 2.2))
    const keyLight = new THREE.DirectionalLight(0xffffff, 4.8)
    keyLight.position.set(5, 7, 8)
    scene.add(keyLight)
    const pinkLight = new THREE.PointLight(0xff79b7, 35, 18)
    pinkLight.position.set(-5, 2, 5)
    scene.add(pinkLight)
    const blueLight = new THREE.PointLight(0x7397ff, 32, 18)
    blueLight.position.set(5, -3, 4)
    scene.add(blueLight)

    const pointer = new THREE.Vector2()
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const onPointerMove = (event: PointerEvent) => {
      const bounds = mount.getBoundingClientRect()
      pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
      pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
    }
    mount.addEventListener("pointermove", onPointerMove)

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect()
      renderer.setSize(width, height, false)
      camera.aspect = width / Math.max(height, 1)
      camera.position.z = width < 720 ? 13.5 : 11.5
      sculpture.position.x = width < 720 ? 0.8 : 2.2
      sculpture.position.y = width < 720 ? -1.75 : -0.15
      sculpture.scale.setScalar(width < 720 ? 0.82 : 1.08)
      camera.updateProjectionMatrix()
    }
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(mount)
    resize()

    const clock = new THREE.Clock()
    let frame = 0
    const render = () => {
      const elapsed = clock.getElapsedTime()
      if (!reducedMotion) {
        sculpture.rotation.y = -0.58 + elapsed * 0.09 + pointer.x * 0.08
        sculpture.rotation.x = 0.58 - pointer.y * 0.05
        sculpture.position.y += (Math.sin(elapsed * 0.65) * 0.08 + (mount.clientWidth < 720 ? -1.75 : -0.15) - sculpture.position.y) * 0.04
      }
      renderer.render(scene, camera)
      frame = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      mount.removeEventListener("pointermove", onPointerMove)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />
}
