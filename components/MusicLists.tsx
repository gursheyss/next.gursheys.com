import { getPlaylists, getTopSongs } from '@/lib/spotify'
import { unstable_cacheLife } from 'next/cache'
import Image from 'next/image'

async function Playlists() {
  'use cache'
  unstable_cacheLife('days')
  const playlists = await getPlaylists()

  return (
    <div className="border-box cutout-title" data-title="playlists">
      <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {playlists.slice(0, 10).map((playlist) => (
          <a
            key={playlist.url}
            href={playlist.url}
            target="_blank"
            rel="noopener noreferrer"
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <Image
                src={playlist.image as string}
                alt={playlist.title}
                className="h-12 w-12 rounded-sm object-cover"
                width={48}
                height={48}
              />
              <div className="min-w-0 flex-grow">
                <p className="truncate text-sm font-semibold">
                  {playlist.title.toLowerCase()}
                </p>
                <p className="truncate text-xs text-gray-500">
                  {playlist.count} tracks
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

async function TopSongs() {
  'use cache'
  unstable_cacheLife('days')
  const songs = await getTopSongs()

  return (
    <div className="border-box cutout-title" data-title="top songs">
      <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {songs.map((song) => (
          <a
            key={song.url}
            href={song.url}
            target="_blank"
            rel="noopener noreferrer"
            className="space-y-2"
          >
            <div className="flex">
              <Image
                src={song.image as string}
                alt={song.title}
                className="h-12 w-12 rounded-sm object-cover"
                width={48}
                height={48}
              />
              <div className="ml-2 min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">
                  {song.title.toLowerCase()}
                </p>
                <p className="truncate text-xs text-gray-500">
                  {song.artist.toLowerCase()}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export { Playlists, TopSongs }
