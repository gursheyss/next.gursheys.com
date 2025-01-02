'use client'
import { useEffect, useState } from 'react'
import NumberFlow from '@number-flow/react'

export default function Age() {
  const [age, setAge] = useState(0)

  useEffect(() => {
    const birthday = new Date(2004, 10, 30)
    const now = new Date()
    const diff = now.getTime() - birthday.getTime()
    setAge(diff / (1000 * 60 * 60 * 24 * 365.25))
  }, [])

  return (
    <NumberFlow
      value={age}
      format={{
        minimumFractionDigits: 8,
        maximumFractionDigits: 8
      }}
      continuous
    />
  )
}
