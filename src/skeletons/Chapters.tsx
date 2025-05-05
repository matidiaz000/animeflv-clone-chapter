const ChapterSkeleton = () => {
  return (
    <div className="skeleton">
      <div className="py-5">
        <div className="d-flex justify-content-between align-items-center mb-3 pb-2">
          <span className="rounded bg-gray-400" style={{width: 224, height: 30}}></span>
          <span className="rounded bg-gray-400" style={{width: 75, height: 25}}></span>
        </div>
        <div className="row">
          <ChaptersListSkeleton />
          <ChaptersListSkeleton />
          <ChaptersListSkeleton />
          <ChaptersListSkeleton />
          <ChaptersListSkeleton />
          <ChaptersListSkeleton />
          <ChaptersListSkeleton />
          <ChaptersListSkeleton />
          <ChaptersListSkeleton />
          <ChaptersListSkeleton />
          <ChaptersListSkeleton />
          <ChaptersListSkeleton />
        </div>
      </div>
    </div>
  );
};

const ChaptersListSkeleton = () => 
  <div className="col-4 col-lg-2 my-3">
    <span className="rounded bg-gray-400 mb-2" style={{aspectRatio: "3 / 1.5"}}></span>
    <span className="rounded bg-gray-400 mb-1" style={{width: "75%", height: 15}}></span>
    <span className="rounded bg-gray-400" style={{width: "50%", height: 15}}></span>
    <span className="rounded bg-gray-400 mt-2" style={{width: 65, height: 12}}></span>
  </div>;

export default ChapterSkeleton;
