import text from "@/pages/data/footer/text.json";

export default function Footer() {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <div className="footer">
      <p>{text.symbol + year + " " + text.copyright}</p>
    </div>
  );
}
