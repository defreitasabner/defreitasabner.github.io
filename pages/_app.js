import PageHeader from "../src/components/PageHeader";
import "../src/styles/reset.css";
import "../src/styles/style.scss";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <PageHeader />
            <Component { ...pageProps } />
        </>
    )
}

export default MyApp;