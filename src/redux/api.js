import axios from 'axios';

const apikey = process.env.REACT_APP_API_KEY;

const fetchData = async (nameCity) => {
  try {
    return await axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?q=${nameCity ?? 'hanoi'}&units=metric&cnt=7&appid=${apikey}`)
      .then((res) => res.data);
  } catch (err) {
    console.log(err);
  }
};

export default fetchData;
