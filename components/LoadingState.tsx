export default function LoadingState() {
  return (
    <div className="border-box cutout-title" data-title="now playing">
      <div className="flex items-center space-x-2">
        <div className="flex-grow">
          <p className="text-sm font-semibold">loading...</p>
          <p className="text-xs text-gray-500">please wait</p>
        </div>
      </div>
    </div>
  )
}
