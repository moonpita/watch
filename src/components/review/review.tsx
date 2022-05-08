/* eslint-disable react/prop-types */
import type { ReviewType } from '../../types/hotel';

type ReviewProps = {
  key: number;
  props: ReviewType;
};

function Review({ props, key }: ReviewProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={props.avatarSrc}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{props.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${props.rating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{props.text}</p>
        <time className="reviews__time" dateTime="2019-04-24">
          {props.date}
        </time>
      </div>
    </li>
  );
}

export default Review;
