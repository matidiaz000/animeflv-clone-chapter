const SinopsisSkeleton = () => {
  return (
    <div className="skeleton">
      <span className="rounded bg-gray-400 mb-2" style={{width: 224, height: 30}}></span>
      <span className="rounded bg-gray-400 mb-1" style={{width: "75%", height: 15}}></span>
      <span className="rounded bg-gray-400 mb-1" style={{width: "100%", height: 15}}></span>
      <span className="rounded bg-gray-400 mb-1" style={{width: "75%", height: 15}}></span>
      <span className="rounded bg-gray-400 mb-1" style={{width: "100%", height: 15}}></span>
      <span className="rounded bg-gray-400 mb-4" style={{width: "50%", height: 15}}></span>
      <div className="d-flex m-n2 align-items-center flex-wrap">
        <span className="rounded bg-gray-400 mx-2" style={{width: 75, height: 25}}></span>
        <span className="rounded bg-gray-400 mx-2" style={{width: 75, height: 25}}></span>
        <span className="rounded bg-gray-400 mx-2" style={{width: 75, height: 25}}></span>
        <span className="rounded bg-gray-400 mx-2" style={{width: 75, height: 25}}></span>
      </div>
    </div>
  );
};

export default SinopsisSkeleton;
