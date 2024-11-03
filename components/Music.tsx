import { Suspense } from 'react'
import NowPlaying from './NowPlaying'
import LoadingState from './LoadingState'
import { Playlists, TopSongs } from './MusicLists'

export default function Music() {
  return (
    <div className="border-box cutout-title" data-title="📻 music">
      <div className="content">
        <Suspense fallback={<LoadingState />}>
          <NowPlaying />
        </Suspense>
        <Playlists />
        <TopSongs />
      </div>
    </div>
  )
}
