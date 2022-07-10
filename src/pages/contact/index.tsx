import Head from "next/head";
import { gql } from "@apollo/client";
import { GetStaticProps } from "next/types";
import { client } from "../../lib/apollo";
import { Avatar } from "../../components/Avatar";

const GET_LINKS_QUERY = gql`
    query{
        links {
            url
            title
            icon
        }
    }
`;

const avatarUrl = "https://avatars.githubusercontent.com/u/83991325?v=4";

interface ContactProps {
    links: []
}

const Contact = ({ links }: ContactProps) => {
    return (
        <>
            <Head>
                <title>Davi Lacerda | Contact</title>
            </Head>
            <div className="w-full h-full min-h-screen flex flex-col items-center justify-center gap-6 p-4">
                <div className="flex flex-col justify-center items-center gap-2">
                    <Avatar url={avatarUrl} alternativeText="Davi Lacerda" />
                    <h2 className="font-bold font-fira">Davi Lacerda</h2>
                    <span className="font-light text-brand underline underline-offset-2">Front-End Developer</span>
                </div>
                {links.map(({ url, title, icon }) => (
                    <a href={url} key={url} target="_blank" rel="noreferrer" className="w-full max-w-lg bg-brand rounded-md py-2 flex items-center justify-center gap-2 hover:bg-brand-hover transition-colors">
                        <img src={icon} alt={title} className="w-6 h-6" />
                        {title}
                    </a>
                ))}
            </div>
        </>
    )
}

export default Contact;

export const getStaticProps: GetStaticProps = async (context) => {
    const { data } = await client.query({
        query: GET_LINKS_QUERY,
    });

    return {
        props: {
            links: data.links
        },
    };
};