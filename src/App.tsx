import "flowbite";
import "./App.css";
import TodoPage from "./component/TodoPage";
import AppContextProvider from "./context/AppContextProvider";

function App() {
  return (
    <AppContextProvider>
      <TodoPage />
    </AppContextProvider>
  );
}

export default App;
