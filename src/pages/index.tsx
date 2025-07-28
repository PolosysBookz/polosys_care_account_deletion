import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import HomePage from "@/components/home-page/HomePage";

const inter = Inter({ subsets: ["latin"] });

const title = "PolosysCare";
const description = "PolosysCare";
const keywords = "PolosysCare";

export default function Home() {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico?v=1" />
                <script
                    src="https://www.google.com/recaptcha/api.js?onload=onloadCallback"
                    async
                    defer
                ></script>
            </Head>
            <main className={`${inter.className}`}>
                <HomePage />
            </main>
        </>
    );
}
