import React, { useState } from "react";
import text from "@/pages/data/sale/text.json";
import Link from "next/link";
import Head from "next/head";

export default function TransactionsPage() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    // text from data/json
    <>
      <Head>
        <title>Buy a Cat</title>
      </Head>
      <Link href="/">Back</Link>
      <div className="tranContainer">
        {showMessage ? (
          <div className="dontbuy">
            <h3>{text.dontBuy}</h3>
          </div>
        ) : (
          <div className="tranBox">
            <label>{text.uName}</label>
            <input type="text" />
            <label>{text.cardNumber}</label>
            <input type="text" maxLength={16} minLength={16} />
            <label>{text.expiryDate}</label>
            <input type="text" maxLength={5} />
            <label>{text.cvv}</label>
            <input type="text" maxLength={3} />
            <label>{text.address}</label>
            <input type="text" />
            <button onClick={handleClick}>{text.sendButton}</button>
          </div>
        )}
      </div>
    </>
  );
}
