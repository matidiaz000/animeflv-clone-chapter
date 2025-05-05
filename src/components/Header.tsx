import { Card, Icon } from "@matidiaz000/animeflv-clone-library";
import { mostPopularYear, mostRated } from "../utilities/rankings";
import { Color, Format } from "../constants/format";
import HeaderSkeleton from "../skeletons/Header";

interface IProps {
  Media: any,
  loading: any
}

const Header = ({ Media, loading }: IProps) => {
  if (loading) return <HeaderSkeleton />;

  return (
    <section className="row">
      <div className="col-md-5 col-lg-3 position-relative">
        <div className="d-none d-lg-block position-absolute">
          <Card img={Media.coverImage?.extraLarge} title="" subtitle="" link="" />
        </div>
        <div className="d-lg-none">
          <Card img={Media.coverImage?.extraLarge} title="" subtitle="" link="" />
        </div>
      </div>
      <div className="col ms-3 ms-lg-5 overflow-hidden">
        <h1 className="d-none d-lg-block text-gray-200 w-50 mb-4">{Media.title?.userPreferred}</h1>
        <h1 className="d-lg-none text-gray-200 mb-4">{Media.title?.userPreferred}</h1>
        <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center mx-n3 my-n2">
          <span className={`badge ${Color(Media.format)} text-uppercase mx-3 my-2`}>{Format(Media.format)}</span>
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
    </section>
  );
};

export default Header;
