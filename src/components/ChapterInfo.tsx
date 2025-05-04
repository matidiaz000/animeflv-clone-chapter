import { Card } from "@matidiaz000/animeflv-clone-library";
import { getTitleAttr } from "../utilities/episodes";

interface IProps {
  Media: any,
  chapter: string | undefined
}

const ChapterInfo = ({ Media, chapter }: IProps) => {
  console.log(Media)
  const currentChapter = Media.streamingEpisodes[chapter as string];

  return (
    <section>
      <h2>{getTitleAttr(currentChapter.title).title}</h2>
      <p><b>Episodio {getTitleAttr(currentChapter.title).episode}</b></p>
      <p
        className="innerHTML"
        dangerouslySetInnerHTML={{__html: Media.description}}
      ></p>
      <h3 className="mt-5">Capitulos</h3>
      <div className="row">
        {Media.streamingEpisodes?.map((item: any, index: number) => 
          <div className="col-2 my-3" key={`season-1-${item.url}-${index}`}>
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
    </section>
  );
};

export default ChapterInfo;
