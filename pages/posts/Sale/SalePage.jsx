import React from "react";
import Image from "next/image";
import Layout from "@/pages/layout";
import text from "@/pages/data/sale/text.json";
import catList from "@/pages/data/sale/catList.json";

export default function SalePage() {
  return (
    // text from data/json
    <Layout>
      <div className="catList">
        {catList.map((mp) => (
          <ul key={mp.id} className="singleCat">
            <li>
              <Image
                src={mp.photo}
                alt="Cat"
                width={250}
                height={250}
                response="true"
                className="img"
              />
            </li>
            <li>
              {text.catBreed}
              {mp.breed}
            </li>
            <li>
              {text.catName}
              {mp.catName}
            </li>
            <li>
              {text.catIntroduction}
              {mp.introduction}
            </li>
            <button
              onClick={() => {
                window.location.href = "/posts/Sale/TransactionsPage";
              }}
            >
              {text.button}
            </button>
          </ul>
        ))}
      </div>
    </Layout>
  );
}
