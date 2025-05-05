import { Card } from "@matidiaz000/animeflv-clone-library";
import { getTitleAttr } from "../utilities/episodes";
import ChapterInfoSkeleton from "../skeletons/ChapterInfo";

interface IProps {
  Media: any,
  chapter: string | undefined,
  loading: any
}

const ChapterInfo = ({ Media, chapter, loading }: IProps) => {
  if (loading) return <ChapterInfoSkeleton />;

  const currentChapter = Media.streamingEpisodes[chapter as string];

  return (
    <section>
      <h2>{getTitleAttr(currentChapter.title).title}</h2>
      <p><b>Episodio {getTitleAttr(currentChapter.title).episode}</b></p>
      <p
        className="innerHTML"
        dangerouslySetInnerHTML={{__html: Media.description}}
      ></p>
      {Media.streamingEpisodes?.length > 0 ?
        <>
          <h3 className="mt-5">Capitulos</h3>
          <div className="row">
            {Media.streamingEpisodes?.map((item: any, index: number) => 
              <div className="col-4 col-lg-2 my-3" key={`season-1-${item.url}-${index}`}>
                <Card
                  img={Number(chapter) === index ? null : item.thumbnail}
                  title={getTitleAttr(item.title).title}
                  link={`/anime/${Media.id}/capitulo/${index}`}
                  subtitle={`Episodio ${getTitleAttr(item.title).episode}`}
                  time={`${Media.duration} m`}
                />
              </div>
              )}
          </div>
        </>
      : null}
    </section>
  );
};

export default ChapterInfo;
