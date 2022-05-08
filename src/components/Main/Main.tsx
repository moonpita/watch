import HotelCard from '../hotelCard/hotelCard';
import hotels from '../../data/dataHotels';
import { Hotel } from '../../types/hotel';
import Header from '../header/header';

function Main(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      {hotels && hotels.length > 0 && (
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                <li className="locations__item">
                  <a
                    href="www.google.com"
                    className="locations__item-link tabs__item"
                  >
                    <span>Paris</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a
                    href="www.google.com"
                    className="locations__item-link tabs__item"
                  >
                    <span>Cologne</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a
                    href="www.google.com"
                    className="locations__item-link tabs__item"
                  >
                    <span>Brussels</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a
                    href="www.google.com"
                    className="locations__item-link tabs__item tabs__item--active"
                  >
                    <span>Amsterdam</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a
                    href="www.google.com"
                    className="locations__item-link tabs__item"
                  >
                    <span>Hamburg</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a
                    href="www.google.com"
                    className="locations__item-link tabs__item"
                  >
                    <span>Dusseldorf</span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">312 places to stay in Amsterdam</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
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
                <div className="cities__places-list places__list tabs__content">
                  {hotels.map((hotel: Hotel) => (
                    <HotelCard
                      key={hotel.id}
                      city={hotel.city}
                      src={hotel.src}
                      name={hotel.name}
                      type={hotel.type}
                      imageSrc={hotel.imageSrc}
                      price={hotel.price}
                      rating={hotel.rating}
                      favorite={hotel.favorite}
                      id={hotel.id}
                      detailImages={[]}
                      detailProperties={[]}
                      detailReviews={[]}
                    />
                  ))}
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map"></section>
              </div>
            </div>
          </div>
        </main>
      )}
      {hotels.length < 1 && (
        <main className="page__main page__main--index page__main--index-empty">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="www.google.com">
                    <span>Paris</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="www.google.com">
                    <span>Cologne</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="www.google.com">
                    <span>Brussels</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a href="www.google.com" className="locations__item-link tabs__item">
                    <span>Amsterdam</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a className="locations__item-link tabs__item" href="www.google.com">
                    <span>Hamburg</span>
                  </a>
                </li>
                <li className="locations__item">
                  <a
                    className="locations__item-link tabs__item tabs__item--active"
                    href="www.google.com"
                  >
                    <span>Dusseldorf</span>
                  </a>
                </li>
              </ul>
            </section>
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
