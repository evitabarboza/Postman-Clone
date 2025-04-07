import Home from './components/Home';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <div>
      <DataProvider>
          <Home />
      </DataProvider>
    </div>
  );
}

export default App;
