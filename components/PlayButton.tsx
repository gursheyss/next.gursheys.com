'use client'

import { useState, useRef } from 'react'

export default function PlayButton({ previewUrl }: { previewUrl: string }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const togglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(previewUrl)
      audioRef.current.volume = 0.1
      audioRef.current.onended = () => setIsPlaying(false)
    }

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <button
      className="play-button cursor-pointer"
      aria-label="Toggle Play"
      onClick={togglePlay}
    >
      {isPlaying ? '🔊' : '🔇'}
    </button>
  )
}
