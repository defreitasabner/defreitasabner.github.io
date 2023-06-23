import PageHeader from "../src/components/PageHeader";
import PageFooter from "../src/components/PageFooter";
import "../src/styles/reset.css";
import "../src/styles/style.scss";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <PageHeader />
            <Component { ...pageProps } />
            <PageFooter />
        </>
    )
}

export default MyApp;