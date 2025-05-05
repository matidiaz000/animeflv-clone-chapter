const HeaderMobileSkeleton = () => {
  return (
    <div className="skeleton">
      <div className="container d-md-none px-4">
        <div className="bg-gray-200 rounded d-flex jutify-content-end flex-row align-items-end" style={{aspectRatio: "2 / 3"}}>
          <div className="px-3 py-4 w-100">
            <span className="rounded bg-gray-400" style={{width: 70, height: 28}}></span>
            <span className="rounded bg-gray-400 mt-3 mb-2" style={{width: "75%", height: 40}}></span>
            <span className="rounded bg-gray-400 mb-3" style={{width: "50%", height: 40}}></span>
            <div className="d-flex flex-column align-items-start mx-n3 my-n2">
              <span className="rounded bg-gray-400 mx-3 my-2" style={{width: 135, height: 20}}></span>
              <span className="rounded bg-gray-400 mx-3 my-2" style={{width: 175, height: 20}}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobileSkeleton;
