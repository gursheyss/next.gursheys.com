import { getNowPlaying } from "@/lib/spotify";
import Image from "next/image";
import PlayButton from "./PlayButton";

export default async function NowPlaying() {
  const currentSong = await getNowPlaying();
  return (
    <div className="border-box cutout-title" data-title="now playing">
      {currentSong && currentSong.isPlaying ? (
        <div className="flex items-center space-x-2">
          <div className="relative h-16 w-16">
            <Image
              src={currentSong.image as string}
              alt={currentSong.title}
              fill
              className="rounded-sm object-cover"
              sizes="64px"
            />
          </div>
          <div className="flex-grow">
            <a
              href={currentSong.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold"
            >
              {currentSong.title}
            </a>
            {currentSong.previewUrl && (
              <PlayButton previewUrl={currentSong.previewUrl} />
            )}
            <p className="text-xs text-gray-500">{currentSong.artist}</p>
          </div>
          <div
            className="current-song-preview-url"
            data-preview-url={currentSong.previewUrl}
          />
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <div className="flex-grow">
            <p className="text-sm font-semibold">not playing anything</p>
            <p className="text-xs text-gray-500">
              but check out{" "}
              <a
                href="https://open.spotify.com/user/qat10h1tw0e8pq7rkf3rui3d1?si=c51ff728c6ef47af"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink hover:underline"
              >
                my profile
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
