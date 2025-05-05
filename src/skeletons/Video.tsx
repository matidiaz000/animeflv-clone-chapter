const VideoSkeleton = () => {
  return (
    <div className="skeleton">
      <div className="d-flex justify-content-around align-items-center w-100 mt-2">
        <span className="rounded bg-gray-400" style={{width: 100, height: 23}}></span>
        <span className="rounded bg-gray-400" style={{width: 100, height: 23}}></span>
        <span className="rounded bg-gray-400" style={{width: 100, height: 23}}></span>
        <span className="rounded bg-gray-400" style={{width: 100, height: 23}}></span>
        <span className="rounded bg-gray-400" style={{width: 100, height: 23}}></span>
        <span className="rounded bg-gray-400" style={{width: 100, height: 23}}></span>
      </div>
      <span className="rounded bg-gray-400" style={{aspectRatio: "3 / 2"}}></span>
    </div>
  );
};

export default VideoSkeleton;
