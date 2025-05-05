import { Button } from "@matidiaz000/animeflv-clone-library";
import { useState } from "react";
import SinopsisSkeleton from "../skeletons/Sinopsis";

interface IProps {
  description: string,
  genres: string[],
  loading: any
}

const Sinopsis = ({ description, genres, loading }: IProps) => {
  if (loading) return <SinopsisSkeleton />;

  const [ displaySinopsis, setDisplaySinopsis ] = useState(false);

  return (
    <section>
      <h4>Sinopsis</h4>
      <div className="d-flex flex-column align-items-end">
        <p
          className={`innerHTML m-0 ${displaySinopsis ? '' : 'clamp clamp5'}`}
          dangerouslySetInnerHTML={{__html: description}}
        ></p>
        <Button
          variant="text"
          className="border-0 fw-bold text-uppercase my-2"
          size="sm"
          onClick={() => setDisplaySinopsis(!displaySinopsis)}
        >Ver {displaySinopsis ? "menos" : "más"}</Button>
      </div>
      <nav className="d-flex m-n2 align-items-center flex-wrap">
        {genres?.map((item: any) => 
          <span key={item} className="badge bg-gray-200 text-gray-600 text-uppercase mx-2">{item}</span>
        )}
      </nav>
    </section>
  );
};

export default Sinopsis;
