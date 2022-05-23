import { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../header/header';
import hotels from '../../data/dataHotels';
import { Point, Points } from '../../types/main';
import Catalog from '../catalog/catalog';
import Map from '../map/map';
import CityList from '../cityList/cityList';
import type { RootState } from '../../store/reducers/rootReducer';

type MainProps = {
  points: Points;
};

function Main(props: MainProps): JSX.Element {
  const { points } = props;

  const currentCity = useSelector((state: RootState) => state.catalogReducer.city);

  const newHotels = hotels.filter((res) => res.city === currentCity.title);

  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(
    undefined,
  );

  const [openedSort, setOpenedSort] = useState<boolean>(false);

  const onListItemHover = (listItemName: string | null) => {
    const currentPoint = points.find((point) => point.title === listItemName);
    setSelectedPoint(currentPoint);
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      {hotels && hotels.length > 0 && (
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <CityList />
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">312 places to stay in Amsterdam</b>
                <form
                  className="places__sorting"
                  onClick={(event: React.MouseEvent<HTMLElement>) => {
                    setOpenedSort(!openedSort);
                  }}
                  action="#"
                  method="get"
                >
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul
                    className={`places__options places__options--custom ${
                      openedSort ? 'places__options--opened' : ''
                    }`}
                  >
                    <li
                      className="places__option places__option--active"
                      tabIndex={0}
                    >
                      Popular
                    </li>
                    <li className="places__option" tabIndex={0}>
                      Price: low to high
                    </li>
                    <li className="places__option" tabIndex={0}>
                      Price: high to low
                    </li>
                    <li className="places__option" tabIndex={0}>
                      Top rated first
                    </li>
                  </ul>
                </form>
                <Catalog hotels={newHotels} onListItemHover={onListItemHover} />
              </section>
              <Map city={currentCity} points={points} selectedPoint={selectedPoint} />
            </div>
          </div>
        </main>
      )}
      {hotels.length < 1 && (
        <main className="page__main page__main--index page__main--index-empty">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <CityList />
          </div>
          <div className="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    We could not find any property available at the moment in
                    Dusseldorf
                  </p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default Main;
