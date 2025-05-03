import { Button, Card, Icon } from "@matidiaz000/animeflv-clone-library";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Color, Format } from "../constants/format";
import { GET_ANIMES_ITEM } from "../queries/animes.item";
import { getTitleAttr } from "../utilities/episodes";
import { mostPopularYear, mostRated } from "../utilities/rankings";
import { useState } from "react";

const Anime = () => {
  const { id } = useParams();
  const [ displaySinopsis, setDisplaySinopsis ] = useState(false);

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
            <div className="row">
              <div className="col-3 position-relative">
                <div className="position-absolute">
                  <Card img={data.Media?.coverImage?.extraLarge} title="" subtitle="" link="" />
                </div>
              </div>
              <div className="col ms-5">
                <h1 className="d-block text-gray-200 w-50 mb-4">{data.Media?.title?.userPreferred}</h1>
                <div className="d-flex align-items-center mx-n3">
                  <span className={`badge ${Color(data.Media?.format)} text-uppercase mx-3`}>{Format(data.Media?.format)}</span>
                  {mostRated(data.Media?.rankings) &&
                  <small className="d-flex mx-3">
                    <Icon icon="Star" className="me-2 text-secondary" size="20" /> {`#${mostRated(data.Media?.rankings)} más votado`}
                  </small>}
                  {mostPopularYear(data.Media?.rankings) && 
                  <small className="d-flex mx-3">
                    <Icon icon="Heart_01" className="me-2 text-danger" size="20" /> {`#${mostPopularYear(data.Media?.rankings)} más popular del año`}
                  </small>}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-5">
          <div className="row">
            <div className="col-3"></div>
            <div className="col ms-5">
              <h4>Sinopsis</h4>
              <div className="d-flex flex-column align-items-end">
                <p
                  className={`innerHTML m-0 ${displaySinopsis ? '' : 'clamp clamp5'}`}
                  dangerouslySetInnerHTML={{__html: data.Media?.description}}
                ></p>
                <Button
                  variant="text"
                  className="border-0 fw-bold text-uppercase"
                  size="sm"
                  onClick={() => setDisplaySinopsis(!displaySinopsis)}
                >Ver {displaySinopsis ? "menos" : "más"}</Button>
              </div>
              <nav className="d-flex m-n2 align-items-center flex-wrap">
                {data.Media?.genres?.map((item: any) => 
                  <span key={item} className="badge bg-gray-200 text-gray-600 text-uppercase mx-2">{item}</span>
                )}
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="container py-5">
        <section className="py-5">
          <header className="d-flex justify-content-between align-items-center">
            <button className="bg-transparent border-0 d-flex align-items-center">
              <h3>Capitulos</h3>
              <Icon icon="" />
            </button>
            <Button variant="contained" className="ms-3 rounded-pill fw-bold" color="primary" startIcon="List_Ordered">Ordenar</Button>
          </header>
          <div className="row">
            {data.Media?.streamingEpisodes?.map((item: any, index: number) => 
              <div className="col-2 my-3" key={`season-1-${item.url}-${index}`}>
                <Card
                  img={item.thumbnail}
                  title={getTitleAttr(item.title).title}
                  link={`/anime/${data.Media?.id}/capitulo/${index}`}
                  subtitle={`Episodio ${getTitleAttr(item.title).episode}`}
                  time={`${data.Media?.duration} m`}
                >
                  <span className="small">??? L</span>
                </Card>
              </div>
              )}
          </div>
        </section>
      </div>
    </article>
  );
};

export default Anime;
