import ChartNumberSelection from './components/chartNumberSelection/ChartNumberSelection';
import LinearIndeterminate from '../src/components/loading/Loading';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from './components/container/Container';
import NavTab from './components/navTab/NavTab';
import AddCity from './components/admin/addCity/AddCity';
import AllWeather from './components/admin/allWeather/AllWeather';
import { useSelector } from 'react-redux';

function App() {
  const totalData = useSelector((state) => state.numberCharts);

  return (
    <>
      <BrowserRouter>
        <NavTab />

        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ChartNumberSelection />
                  {totalData.length == 0 ? (
                    <LinearIndeterminate />
                  ) : (
                    totalData.map((data, index) => <Container key={index} data={data} index={index} />)
                  )}
                </>
              }
            />

            <Route
              path="/admin"
              element={
                <>
                  <AddCity />
                  <AllWeather />
                </>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
