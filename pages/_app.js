import { SessionProvider } from "next-auth/react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/responsive.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "../styles/bootstrap.min.css";
import "../styles/bootstrap.min.css";
import "../styles/globals.css";

import "../styles/font-awesome.min.css";
import "../styles/style.css";
import "../styles/file.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/dropFile.css"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
