import { getPlaylists, getTopSongs } from "@/lib/spotify";
import { unstable_cacheLife as cacheLife } from "next/cache";
import Image from "next/image";
import NowPlaying from "./NowPlaying";
import { Suspense } from "react";
import LoadingState from "./LoadingState";

export default async function Music() {
  async function getData() {
    "use cache";
    cacheLife("days");
    const [playlists, topSongs] = await Promise.all([
      getPlaylists(),
      getTopSongs(),
    ]);
    return { playlists, topSongs };
  }
  const { playlists, topSongs } = await getData();
  return (
    <div className="border-box cutout-title" data-title="📻 music">
      <div className="content">
        <Suspense fallback={<LoadingState />}>
          <NowPlaying />
        </Suspense>
        {playlists && topSongs && (
          <>
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
                      <div className="flex-grow">
                        <p className="text-sm font-semibold">
                          {playlist.title.toLowerCase()}
                        </p>
                        <p className="text-xs text-gray-500">
                          {playlist.count} tracks
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="border-box cutout-title" data-title="top songs">
              <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {topSongs.map((song) => (
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
                      <div className="ml-2">
                        <p className="text-sm font-semibold">
                          {song.title.toLowerCase()}
                        </p>
                        <p className="text-xs text-gray-500">
                          {song.artist.toLowerCase()}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
