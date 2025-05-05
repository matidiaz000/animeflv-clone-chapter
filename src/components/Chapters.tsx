import { Card, Icon } from "@matidiaz000/animeflv-clone-library";
import { getTitleAttr } from "../utilities/episodes";
import ChapterSkeleton from "../skeletons/Chapters";

interface IProps {
  Media: any,
  loading: any
}

const Chapters = ({ Media, loading }: IProps) => {
  if (loading) return <ChapterSkeleton />;

  return (
    <section className="py-5">
      <header className="d-flex justify-content-between align-items-center">
        <button className="bg-transparent border-0 d-flex align-items-center">
          <h3>Capitulos</h3>
          <Icon icon="" />
        </button>
        {/*<Button variant="contained" className="ms-3 rounded-pill fw-bold" color="primary" startIcon="List_Ordered">Ordenar</Button>*/}
      </header>
      <div className="row">
        {Media.streamingEpisodes?.map((item: any, index: number) => 
          <div className="col-4 col-lg-2 my-3" key={`season-1-${item.url}-${index}`}>
            <Card
              img={item.thumbnail}
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

export default Chapters;
