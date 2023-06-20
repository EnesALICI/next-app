import React from "react";
import Layout from "@/pages/layout";
import text from "@/pages/data/about/text.json";
import Image from "next/image";
export default function AboutPage () {

    return(
        <Layout>

            <div className="aboutContainer">
                <div className="aboutBox">
                    <Image
                      src="/images/Enes.jpg"  
                      width={150}
                      height={150}
                      alt="deneme"
                      response="true"
                      className="img"
                    />
                    <h1>{text.myName}</h1>
                    <h3>{text.myHobbies}</h3>
                    <p>{text.whyProgramming}</p>
                    <p>{text.note}</p>
                </div>
            </div>

        </Layout>
    )
}