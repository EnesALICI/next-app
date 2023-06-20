import Link from "next/link";
import navbar from "@/pages/data/navbar/navbar.json"


export default function Navbar () {

    return(
        <div className="navbar">
        <h1>{navbar.title}</h1>
        <ul>
            <li><Link href="/">{navbar.homePage}</Link></li>
            <li><Link href="/posts/Sale/SalePage">{navbar.salePage}</Link></li>
            <li><Link href="/posts/About/AboutPage">{navbar.aboutPage}</Link></li>
            <li><Link href="/posts/Contact/ContactPage">{navbar.contactPage}</Link></li>
        </ul>
        </div>
    )
}