const HeaderSkeleton = () => {
  return (
    <div className="skeleton">
      <div className="row">
        <div className="col-md-5 col-lg-3 position-relative">
          <div className="d-none d-lg-block position-absolute w-100 pe-3">
            <span className="rounded bg-gray-400 w-100" style={{aspectRatio: "2 / 3"}}></span>
          </div>
          <div className="d-lg-none w-100">
            <span className="rounded bg-gray-400 w-100" style={{aspectRatio: "2 / 3"}}></span>
          </div>
        </div>
        <div className="col ms-3 ms-lg-5 overflow-hidden mt-2">
          <span className="d-none d-lg-block rounded bg-gray-400 mb-4" style={{width: "50%", height: 40}}></span>
          <span className="d-lg-none rounded bg-gray-400 mb-1" style={{width: "100%", height: 40}}></span>
          <span className="d-lg-none rounded bg-gray-400 mb-4" style={{width: "50%", height: 40}}></span>
          <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center mx-n3 my-n2">
            <span className="rounded bg-gray-400 mx-3 my-2" style={{width: 70, height: 28}}></span>
            <span className="rounded bg-gray-400 mx-3 my-2" style={{width: 135, height: 20}}></span>
            <span className="rounded bg-gray-400 mx-3 my-2" style={{width: 135, height: 20}}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSkeleton;
