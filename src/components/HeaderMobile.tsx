import { Icon } from "@matidiaz000/animeflv-clone-library";
import { mostPopularYear, mostRated } from "../utilities/rankings";
import { Color, Format } from "../constants/format";
import HeaderMobileSkeleton from "../skeletons/HeaderMobile";

interface IProps {
  Media: any,
  loading: any
}

const HeaderMobile = ({ Media, loading }: IProps) => {
  if (loading) return <HeaderMobileSkeleton />;

  return (
    <section className="container d-md-none">
      <div className="border rounded position-relative overflow-hidden mx-3">
        <img className="mw-100 w-100" src={Media?.coverImage?.extraLarge} alt={Media.title?.userPreferred} />
        <div className="gradient-bottom position-absolute bottom-0 w-100 px-3 py-4 gradient-bottom">
          <span className={`badge ${Color(Media.format)} text-uppercase`}>{Format(Media.format)}</span>
          <h1 className="text-white mw-50 mt-3">{Media?.title?.userPreferred}</h1>
          <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center mx-n3 my-n2 text-white">
            {mostRated(Media.rankings) &&
            <small className="d-flex mx-3 my-2">
              <Icon icon="Star" className="me-2 text-secondary" size="20" /> {`#${mostRated(Media.rankings)} más votado`}
            </small>}
            {mostPopularYear(Media.rankings) && 
            <small className="d-flex mx-3 my-2">
              <Icon icon="Heart_01" className="me-2 text-danger" size="20" /> {`#${mostPopularYear(Media.rankings)} más popular del año`}
            </small>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderMobile;
