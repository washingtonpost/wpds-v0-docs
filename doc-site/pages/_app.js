import "../styles/globals.css";
import { TinaProvider, TinaCMS } from "tinacms";

function MyApp({ Component, pageProps }) {
  const cms=new TinaCMS({
    sidebar:true,
  });
  return (
    <TinaProvider cms={cms}>
      <Component {...pageProps} />
    </TinaProvider>
  );
}

export default MyApp;
