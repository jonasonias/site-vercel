import Navbar from "../components/Navbar"
import Link from "next/link"

export default function About(){
    return (
        <>
        <Navbar />
        <h1>Sobre</h1>
        <Link href="/">
            Home
        </Link>
        </>
    )
}