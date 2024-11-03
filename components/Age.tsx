'use client'
import { useEffect, useState } from 'react'

export default function Age() {
  const [age, setAge] = useState('0')

  useEffect(() => {
    const birthday = new Date(2004, 10, 30)

    const getAge = () => {
      const now = new Date()
      const diff = now.getTime() - birthday.getTime()
      const age = diff / (1000 * 60 * 60 * 24 * 365.25)
      return age.toFixed(9)
    }

    const updateAge = () => {
      setAge(getAge())
      requestAnimationFrame(updateAge)
    }

    updateAge()

    return () => cancelAnimationFrame(updateAge as unknown as number)
  }, [])

  return <span>{age}</span>
}
