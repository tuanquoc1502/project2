import ChartNumberSelection from './components/chartNumberSelection/ChartNumberSelection';
import Container from './components/container/Container';
import { useSelector } from 'react-redux';

function App() {
  const totalData = useSelector((state) => state.numberCharts);

  return (
    <div className="App">
      <ChartNumberSelection />
      <div>
        {totalData.map((data, index) => (
          <Container key={index} data={data} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
