import Layout from "./layout";
import text from "@/pages/data/index/text.json";
import Image from "next/image";

export default function HomePage() {
  return (
    <Layout>
      <div className="home">
        <h2>{text.company}</h2>
        <p>{text.b}</p>
        <p>{text.cre}</p>
        <Image
          src="/images/next-icon.svg"
          alt="Next.js Icon"
          width={100}
          height={100}
        />
      </div>
    </Layout>
  );
}
