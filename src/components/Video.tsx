import { Button } from "@matidiaz000/animeflv-clone-library";
import VideoSkeleton from "../skeletons/Video";

interface IProps {
  data: any,
  loading: any
}

const Video = ({ data, loading }: IProps) => {
  if (loading) return <VideoSkeleton />;

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center w-100">
        <Button variant="text" className="w-100" >Primer link</Button>
        <Button variant="text" className="w-100" >Segundo link</Button>
        <Button variant="text" className="w-100" >Tercer link</Button>
        <Button variant="text" className="w-100" >Cuarto link</Button>
        <Button variant="text" className="w-100" >Quinto link</Button>
      </div>
      <button className="btn w-100 m-0 p-0">
        <img
          className="w-100 mw-100"
          src={data?.thumbnail}
          alt={data?.title}
        />
      </button>
    </section>
  );
};

export default Video;
