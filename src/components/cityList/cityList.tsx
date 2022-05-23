import { useDispatch, useSelector } from 'react-redux';
import { changeCity } from '../../store/action';
import { RootState } from '../../types/reducer';
import { CITIES } from '../../data/city';

// const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
//   onChangeCity: changeCity, // создаёт пропс "onChangeCity" со ссылкой на экшн changeCIty
// }, dispatch); // в функцию будет подставлен диспатч

// const connector = connect(null, mapDispatchToProps); // кладём коннектор для совмещённой типизации

// type PropsFromRedux = ConnectedProps<typeof connector>;
// type ConnectedComponentProps = PropsFromRedux & CityListProps;

function CityList(): JSX.Element {

  const dispatch = useDispatch();
  const currentCity = useSelector((state: RootState) => state.catalogReducer.city);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <li
            key={city.lat}
            onClick={() => {
              dispatch(changeCity(city));
            }}
            className="locations__item"
          >
            <p
              className={`locations__item-link tabs__item ${currentCity.title === city.title ? 'tabs__item--active' : ''}`}
            >
              <span>{city.title}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CityList;
