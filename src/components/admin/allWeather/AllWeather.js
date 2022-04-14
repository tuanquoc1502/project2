import React, { useEffect, memo, useState } from 'react';
import styles from './AllCity.module.scss';
import EditWeatherCity from '../editWeatherCity/EditWeatherCity';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { API_WEATHER_RESET, FETCH_API_WEATHER_REQUEST } from '../../../contansts/contansts';
import CircularIndeterminate from '../../loading/Loading';
import DeleteCity from '../deleteCity/DeleteCity';

// react icon
import { AiOutlineDelete } from 'react-icons/ai';
import { TiEdit } from 'react-icons/ti';
import { FaTemperatureLow } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';
import { BsWind } from 'react-icons/bs';

function AllWeather() {
  const [open, setOpen] = useState(false);
  const [dataItem, setDataItem] = useState([]);
  const [indexWeather, setIndexWeather] = useState();

  const [openConfirm, setOpenConfirm] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.allDataWeather);

  useEffect(() => {
    const total = ['ha noi', 'ho chi minh', 'Bắc Kạn', 'Bà Rịa', 'ninh binh', 'hue', 'quang tri', 'binh duong', 'an giang', 'hai duong'];

    dispatch(API_WEATHER_RESET());

    for (let i = 0; i < 11; i++) {
      dispatch(FETCH_API_WEATHER_REQUEST(total[i]));
    }

    return () => dispatch(API_WEATHER_RESET());
  }, []);

  const onEdit = (item, index) => {
    setDataItem(item);
    setIndexWeather(index);
    setOpen(true);
  };

  const handleDeleteCity = (index) => {
    setIndexWeather(index);
    setOpenConfirm(true);
  };

  return (
    <div className={styles.wrapper}>
      <ul>
        <li className={styles.header}>
          <div className={styles.left}>Name City</div>
          <div className={styles.right}>
            <div className={styles.title}>
              Temperature <FaTemperatureLow />
            </div>
            <div className={styles.title}>
              Humidity <WiHumidity className={styles.iconHumidity} />
            </div>
            <div className={styles.title}>
              Wind <BsWind />
            </div>
            <div className={styles.setting}></div>
          </div>
        </li>

        {data.length == 0 ? (
          <CircularIndeterminate />
        ) : (
          data.map((item, index) => (
            <li className={styles.itemWeather} key={index}>
              <div className={styles.left}>
                <span>{item.nameCity}</span>
              </div>
              <div className={styles.right}>
                <div className={styles.content}>
                  <span>{item.tempC}°C</span>
                </div>
                <div className={styles.content}>
                  <span>{item.humidity}%</span>
                </div>
                <div className={styles.content}>
                  <span>{item.wind} km/h</span>
                </div>
                <div className={styles.setting}>
                  <span className={styles.edit}>
                    <TiEdit onClick={() => onEdit(item, index)} />
                  </span>
                  <span className={styles.delete}>
                    <AiOutlineDelete onClick={() => handleDeleteCity(index)} />
                  </span>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
      <EditWeatherCity open={open} setOpen={setOpen} dataItem={dataItem} indexWeather={indexWeather} />
      <DeleteCity openConfirm={openConfirm} setOpenConfirm={setOpenConfirm} indexWeather={indexWeather} dataItem={dataItem} />
    </div>
  );
}
export default memo(AllWeather);
