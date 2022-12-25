import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./locales/i18n";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <Provider store={store}>
        <PersistGate loading={<>loading ...</>} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
