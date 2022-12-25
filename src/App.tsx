import {Suspense} from 'react'
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { BrowserRouter } from "react-router-dom";
import Router from "pages/router";
import { createTheme } from "@mui/material/styles";
import { useAppSelector } from "redux/hooks";
import { I18nextProvider, useTranslation } from "react-i18next";
import "./locales/i18n";

function App() {
  // const isRtl = useAppSelector((store) => store.rtl.isRtl);
  const { i18n } = useTranslation();

  const theme = createTheme({
    direction: "rtl",
  });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  function RTL(props: any) {
    const isRtl = i18n.language === "fa-IR";
    if (isRtl)
      return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
    else return <div>{props.children}</div>;
  }
  ////TODO : call the async function  to get the token and give the permissions to redux  fro utilz getPermissionsFromToken

  return (
      <BrowserRouter>
        <RTL>
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </RTL>
      </BrowserRouter>
  );
}

export default App;
