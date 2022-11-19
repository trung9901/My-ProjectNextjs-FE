import "../styles/globals.css";
import { SWRConfig } from "swr";
import Layout from "../components/layouts";
import "antd/dist/reset.css";
import instance from "../api/instance";

function MyApp({ Component, pageProps }) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: async (url) => await instance.get(url),
      }}
    >
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </SWRConfig>
  );
}

export default MyApp;
