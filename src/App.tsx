import { Provider } from "react-redux";
import { ShowFormProvider } from "./hooks/useShowForm";
import { store } from "./redux/store";
import { Toaster } from "sonner";
import { Router } from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Toaster />
      <ShowFormProvider>
        <Router />
      </ShowFormProvider>
    </Provider>
  );
}

export default App;
