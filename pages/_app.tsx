import PageHeader from "../src/components/PageHeader";
import PageFooter from "../src/components/PageFooter";
import Head from "next/head";
import "../src/styles/reset.css";
import "../src/styles/style.scss";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Abner Freitas</title>
            </Head>
            <PageHeader />
            <Component { ...pageProps } />
            <PageFooter />
        </>
    )
}

export default MyApp;