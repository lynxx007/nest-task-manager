import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import theme from "./styles/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <App />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
