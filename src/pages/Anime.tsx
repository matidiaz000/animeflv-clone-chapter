import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ANIMES_ITEM } from "../queries/animes.item";
import Header from "../components/Header";
import Sinopsis from "../components/Sinopsis";
import Chapters from "../components/Chapters";
import HeaderMobile from "../components/HeaderMobile";

const Anime = () => {
  const { id } = useParams();
  
  const { loading, error, data } = useQuery(GET_ANIMES_ITEM, {
    fetchPolicy: 'cache-and-network',
    variables: { id: id },
  });

  if (error) return <p>Error : {error.message}</p>;

  return (
    <article>
      <header>
        <div className="bg-dark text-white d-none d-md-block">
          <div className="container-md pb-5 pb-lg-4 pt-4 pt-lg-5">
            <Header Media={data?.Media} loading={loading} />
          </div>
        </div>
        <div className="container-md d-md-none mt-5">
          <HeaderMobile Media={data?.Media} loading={loading} />
        </div>
        <div className="container-md pt-5">
          <div className="row">
            <div className="col-3 d-none d-lg-flex"></div>
            <div className="col ms-lg-5">
              <Sinopsis description={data?.Media?.description} genres={data?.Media?.genres} loading={loading} />
            </div>
          </div>
        </div>
      </header>

      {data?.Media?.streamingEpisodes?.length > 0 ? 
        <div className="container-md py-5">
          <Chapters Media={data?.Media} loading={loading} />
        </div>
      : null}
    </article>
  );
};

export default Anime;
