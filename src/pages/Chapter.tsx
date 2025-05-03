import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ANIMES_DESCRIPTION } from "../queries/animes.description";
import { Button } from "@matidiaz000/animeflv-clone-library";

const Chapter = () => {
  const { id, chapter } = useParams();

  const { loading, error, data } = useQuery(GET_ANIMES_DESCRIPTION, {
    fetchPolicy: 'cache-and-network',
    variables: { id: id },
  });

  const chapterData = data?.Media?.streamingEpisodes[chapter as string];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <article>
      <section className="container-fluid">
        <div className="d-flex justify-content-between align-items-center w-100">
          <Button variant="text" className="w-100" >Primer link</Button>
          <Button variant="text" className="w-100" >Segundo link</Button>
          <Button variant="text" className="w-100" >Tercer link</Button>
          <Button variant="text" className="w-100" >Cuarto link</Button>
          <Button variant="text" className="w-100" >Quinto link</Button>
        </div>
        <button className="btn w-100">
          <img
            className="w-100 mw-100"
            src={chapterData?.thumbnail}
            alt={chapterData?.title}
          />
        </button>
      </section>

      <section className="container">
        <h1>{chapterData?.title}</h1>
        <p>This chapter is streming by {chapterData?.site}</p>
      </section>
    </article>
  );
};

export default Chapter;
