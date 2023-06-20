import Head from "next/head";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>MyProject</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
