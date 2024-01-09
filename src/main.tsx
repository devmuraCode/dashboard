import ReactDOM from "react-dom/client";
import "./app/styles/index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import App from "./app/App.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
