'use client'
import { useEffect, useRef } from 'react'

interface SparkleProps {
  color?: string
  sparkleCount?: number
}

export const Sparkles: React.FC<SparkleProps> = ({
  color = '#fdcff3',
  sparkleCount = 120
}) => {
  const sparkleRef = useRef<SparkleEffect | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      sparkleRef.current = new SparkleEffect(
        color,
        sparkleCount,
        containerRef.current
      )
    }

    return () => {
      if (sparkleRef.current) {
        sparkleRef.current.cleanup()
      }
    }
  }, [color, sparkleCount])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
    />
  )
}

class SparkleEffect {
  private colour: string
  private sparkles: number
  private x: number
  private ox: number
  private y: number
  private oy: number
  private swide: number
  private shigh: number
  private sleft: number
  private sdown: number
  private tiny: HTMLDivElement[]
  private star: HTMLDivElement[]
  private starv: number[]
  private starx: number[]
  private stary: number[]
  private tinyx: number[]
  private tinyy: number[]
  private tinyv: number[]
  private timeoutId: number | null
  private container: HTMLElement

  constructor(color: string, sparkleCount: number, container: HTMLElement) {
    this.colour = color
    this.sparkles = sparkleCount
    this.x = this.ox = 400
    this.y = this.oy = 300
    this.swide = 800
    this.shigh = 600
    this.sleft = this.sdown = 0
    this.tiny = []
    this.star = []
    this.starv = []
    this.starx = []
    this.stary = []
    this.tinyx = []
    this.tinyy = []
    this.tinyv = []
    this.timeoutId = null
    this.container = container

    this.init()
    this.bindEvents()
  }

  private bindEvents() {
    document.addEventListener('mousemove', (e) => this.mouse(e))
    window.addEventListener('resize', () => this.set_width())
  }

  cleanup() {
    // Remove event listeners
    document.removeEventListener('mousemove', (e) => this.mouse(e))
    window.removeEventListener('resize', () => this.set_width())

    // Clear timeout
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }

    // Remove sparkle elements
    this.tiny.forEach((el) => el.remove())
    this.star.forEach((el) => el.remove())
  }

  init() {
    if (typeof document.getElementById === 'function') {
      for (let i = 0; i < this.sparkles; i++) {
        let div = this.createDiv(3, 3)
        div.style.visibility = 'hidden'
        this.container.appendChild((this.tiny[i] = div))
        this.starv[i] = 0
        this.tinyv[i] = 0
        div = this.createDiv(5, 5)
        div.style.backgroundColor = 'transparent'
        div.style.visibility = 'hidden'
        const divLeft = this.createDiv(1, 5)
        const divDown = this.createDiv(5, 1)
        div.appendChild(divLeft)
        div.appendChild(divDown)
        divLeft.style.top = '2px'
        divLeft.style.left = '0px'
        divDown.style.top = '0px'
        divDown.style.left = '2px'
        this.container.appendChild((this.star[i] = div))
      }
      this.set_width()
      this.sparkle()
    }
  }

  private sparkle() {
    let c
    if (this.x !== this.ox || this.y !== this.oy) {
      this.ox = this.x
      this.oy = this.y
      for (c = 0; c < this.sparkles; c++)
        if (!this.starv[c]) {
          this.star[c].style.left = (this.starx[c] = this.x) + 'px'
          this.star[c].style.top = (this.stary[c] = this.y) + 'px'
          this.star[c].style.clip = 'rect(0px, 5px, 5px, 0px)'
          this.star[c].style.visibility = 'visible'
          this.starv[c] = 50
          break
        }
    }
    for (c = 0; c < this.sparkles; c++) {
      if (this.starv[c]) this.update_star(c)
      if (this.tinyv[c]) this.update_tiny(c)
    }
    this.timeoutId = window.setTimeout(() => this.sparkle(), 40)
  }

  update_star(i: number) {
    if (--this.starv[i] === 25)
      this.star[i].style.clip = 'rect(1px, 4px, 4px, 1px)'
    if (this.starv[i]) {
      this.stary[i] += 1 + Math.random() * 3
      if (this.stary[i] < this.shigh + this.sdown) {
        this.star[i].style.top = this.stary[i] + 'px'
        this.starx[i] += ((i % 5) - 2) / 5
        this.star[i].style.left = this.starx[i] + 'px'
      } else {
        this.star[i].style.visibility = 'hidden'
        this.starv[i] = 0
        return
      }
    } else {
      this.tinyv[i] = 50
      this.tiny[i].style.top = (this.tinyy[i] = this.stary[i]) + 'px'
      this.tiny[i].style.left = (this.tinyx[i] = this.starx[i]) + 'px'
      this.tiny[i].style.width = '2px'
      this.tiny[i].style.height = '2px'
      this.star[i].style.visibility = 'hidden'
      this.tiny[i].style.visibility = 'visible'
    }
  }

  update_tiny(i: number) {
    if (--this.tinyv[i] === 25) {
      this.tiny[i].style.width = '1px'
      this.tiny[i].style.height = '1px'
    }
    if (this.tinyv[i]) {
      this.tinyy[i] += 1 + Math.random() * 3
      if (this.tinyy[i] < this.shigh + this.sdown) {
        this.tiny[i].style.top = this.tinyy[i] + 'px'
        this.tinyx[i] += ((i % 5) - 2) / 5
        this.tiny[i].style.left = this.tinyx[i] + 'px'
      } else {
        this.tiny[i].style.visibility = 'hidden'
        this.tinyv[i] = 0
        return
      }
    } else this.tiny[i].style.visibility = 'hidden'
  }

  mouse(e: MouseEvent) {
    this.y = e.clientY
    this.x = e.clientX
  }

  set_width() {
    if (typeof self.innerWidth === 'number') {
      this.swide = self.innerWidth
      this.shigh = self.innerHeight
    } else if (
      document.documentElement &&
      document.documentElement.clientWidth
    ) {
      this.swide = document.documentElement.clientWidth
      this.shigh = document.documentElement.clientHeight
    } else if (document.body.clientWidth) {
      this.swide = document.body.clientWidth
      this.shigh = document.body.clientHeight
    }
  }

  createDiv(height: number, width: number) {
    const div = document.createElement('div')
    div.style.position = 'absolute'
    div.style.height = height + 'px'
    div.style.width = width + 'px'
    div.style.overflow = 'hidden'
    div.style.backgroundColor = this.colour
    return div
  }
}
