import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ANIMES_ITEM } from "../queries/animes.item";
import Header from "../components/Header";
import Sinopsis from "../components/Sinopsis";
import Chapters from "../components/Chapters";

const Anime = () => {
  const { id } = useParams();
  
  const { loading, error, data } = useQuery(GET_ANIMES_ITEM, {
    fetchPolicy: 'cache-and-network',
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <article>
      <header>
        <div className="bg-dark text-white">
          <div className="container pb-4 pt-5">
            <Header Media={data.Media} />
          </div>
        </div>
        <div className="container pt-5">
          <div className="row">
            <div className="col-3"></div>
            <div className="col ms-5">
              <Sinopsis description={data.Media?.description} genres={data.Media?.genres} />
            </div>
          </div>
        </div>
      </header>

      <div className="container py-5">
        <Chapters Media={data.Media} />
      </div>
    </article>
  );
};

export default Anime;
