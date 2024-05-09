import "./App.css";
import { AppRouter } from "./midleware/router/AppRouter";
//import { ActivitiesProvider } from './midleware/context/ActivitiesContext';
import { DataContextProvider } from "./midleware/data/DataContext";

function App() {
  return (
      <DataContextProvider>
        <AppRouter />
      </DataContextProvider>
   
  );
}

export default App;
