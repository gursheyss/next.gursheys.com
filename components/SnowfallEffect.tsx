'use client'

import Snowfall from 'react-snowfall'

export const SnowfallEffect = () => {
  return (
    <Snowfall
      color="rgba(255, 255, 255, 0.5)"
      snowflakeCount={200}
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: -10
      }}
    />
  )
}
