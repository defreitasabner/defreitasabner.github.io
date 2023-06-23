import PageHeader from "../src/components/PageHeader";
import PageFooter from "../src/components/PageFooter";
import "../src/theme/reset.css";
import "../src/theme/style.scss";

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