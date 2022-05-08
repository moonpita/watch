import { Hotel } from '../../types/hotel';
import hotels from '../../data/dataHotels';
import FavoritesCard from './favoritesCard/favoritesCard';
import Header from '../header/header';


function Favorites(): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <Header />
      {hotels.filter((el) => el.favorite).length > 0 && (
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="www.google.com">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {hotels.map(
                    (hotel: Hotel) =>
                      hotel.favorite && (
                        <FavoritesCard
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
                      ),
                  )}
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="www.google.com">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <article className="favorites__card place-card">
                    <div className="favorites__image-wrapper place-card__image-wrapper">
                      <a href="www.google.com">
                        <img
                          className="place-card__image"
                          src="img/apartment-small-04.jpg"
                          width="150"
                          height="110"
                          alt="Place"
                        />
                      </a>
                    </div>
                    <div className="favorites__card-info place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;180</b>
                          <span className="place-card__price-text">
                            &#47;&nbsp;night
                          </span>
                        </div>
                        <button
                          className="place-card__bookmark-button place-card__bookmark-button--active button"
                          type="button"
                        >
                          <svg
                            className="place-card__bookmark-icon"
                            width="18"
                            height="19"
                          >
                            <use xlinkHref="#icon-bookmark"></use>
                          </svg>
                          <span className="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{ width: '80%' }}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <a href="www.google.com">White castle</a>
                      </h2>
                      <p className="place-card__type">Apartment</p>
                    </div>
                  </article>
                </div>
              </li>
            </ul>
          </section>
        </div>
      )}


      {hotels.filter((el) => el.favorite).length < 1 && (
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">
                Save properties to narrow down search or plan your future trips.
              </p>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default Favorites;
