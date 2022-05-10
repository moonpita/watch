import { MouseEvent } from 'react';
import { HotelList, Hotel } from '../../types/hotel';

type CatalogProps = {
  hotels: HotelList;
  onListItemHover: (listItemName: string) => void;
};

function Catalog(props: CatalogProps): JSX.Element {
  const { hotels, onListItemHover } = props;

  const listItemHoverHandler = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    const name = event.currentTarget.getAttribute('data-name');
    onListItemHover(name as string);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {hotels.map((hotel: Hotel) => (
        <article key={hotel.id} onMouseEnter={listItemHoverHandler} data-name={hotel.name} className="cities__place-card place-card">
          <div className="cities__image-wrapper place-card__image-wrapper">
            <a href={hotel.src}>
              <img
                className="place-card__image"
                src={hotel.imageSrc}
                width="260"
                height="200"
                alt="Place"
              />
            </a>
          </div>
          <div className="place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{hotel.price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button
                className="place-card__bookmark-button button"
                type="button"
              >
                <svg
                  className="place-card__bookmark-icon"
                  width="18"
                  height="19"
                >
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{ width: `${hotel.rating}%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <a href="www.google.com">{hotel.name}</a>
            </h2>
            <p className="place-card__type">{hotel.type}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Catalog;
