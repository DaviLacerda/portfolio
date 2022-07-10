import { gql } from "@apollo/client";
import type { GetStaticProps } from "next";
import Head from "next/head";
import { Project } from "../@types/Project";
import { Avatar } from "../components/Avatar";
import { Footer } from "../components/Footer";
import { Slider } from "../components/Slider";
import { WavingHand } from "../components/WavingHand";
import { client } from "../lib/apollo";
import { favoriteTechs } from "../utils/favoriteTechs";

const avatarUrl = "https://avatars.githubusercontent.com/u/83991325?v=4";

const GET_PROJECTS_QUERY = gql`
    query{
        projects(orderBy:name_ASC){
            name
            description
            tags
            github
            url
            image{
                url
            }
        }
    }
`;

interface HomeProps{
    projects: Project[];
}

const Home = ({ projects }: HomeProps) => {
    return (
        <>
            <Head>
                <title>Davi Lacerda | Front-End Developer</title>
            </Head>
            <div className="flex flex-col items-center">
                <div className="w-full min-h-screen p-4 flex flex-col gap-8 items-center justify-center md:flex-row md:gap-24">
                    <div className="flex flex-col text-5xl text-center md:text-left font-play">
                        <h1>Davi Lacerda</h1>
                        <h2>Front-End Developer</h2>
                    </div>
                    <div>
                        <Avatar url={avatarUrl} alternativeText="Davi Lacerda" />
                    </div>
                </div>
                <div className="w-full min-h-screen p-4 flex flex-col gap-12 items-start justify-center max-w-screen-xl text-left">
                    <h1 className="text-6xl">Hi <WavingHand /></h1>
                    <p className="text-3xl text-left">My name is <span className="text-brand">Davi Lacerda</span></p>
                    <p className="text-3xl">
                        I started to learn programming in March 2021, like
                        as student in Federal University of Uberlândia (UFU). Since
                        that, i dedicated my time to learn more about Front-End
                        development and his technologies.
                    </p>
                    <h2 className="text-5xl">My favorite technologies:</h2>
                    <div className="w-full flex justify-center">
                        <div className="w-3/4 gap-4 grid grid-flow-row grid-cols-2 md:grid-rows-2 md:grid-cols-3">
                            {favoriteTechs.map((tech) => (
                                <div
                                    key={tech.name}
                                    className="flex flex-col justify-center items-center gap-7"
                                >
                                    { tech.icon }
                                    <span className="font-bold font-fira">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-brand p-4">
                    <Slider data={projects} />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
    const { data } = await client.query({
        query: GET_PROJECTS_QUERY,
    });

    return {
        props: {
            projects: data.projects
        },
    };
};