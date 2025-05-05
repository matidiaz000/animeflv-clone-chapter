import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ANIMES_DESCRIPTION } from "../queries/animes.description";
import ChapterInfo from "../components/ChapterInfo";
import Video from "../components/Video";

const Chapter = () => {
  const { id, chapter } = useParams();

  const { loading, error, data } = useQuery(GET_ANIMES_DESCRIPTION, {
    fetchPolicy: 'cache-and-network',
    variables: { id: id },
  });

  const chapterData = data?.Media?.streamingEpisodes[chapter as string];

  if (error) return <p>Error : {error.message}</p>;

  return (
    <article className="container-md">
      <div className="pb-5">
        <Video data={chapterData} loading={loading} />
      </div>
      <ChapterInfo Media={data?.Media} chapter={chapter} loading={loading} />
    </article>
  );
};

export default Chapter;
