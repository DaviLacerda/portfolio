import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Davi Lacerda | Front-End Developer</title>
            </Head>
            <Footer />
        </>
    );
};

export default Home;
