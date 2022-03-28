import "styles/globals.css";
import Parent from "components/Parent";
import { Provider } from "react-redux";
import { store } from "app/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  console.log("render _app.js");
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Parent>
          <Component {...pageProps} />
        </Parent>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
