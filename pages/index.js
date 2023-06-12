import Link from "next/link"

import Head from "next/head"
import Image from "next/image"

export default function Home(){
    return (
        <div>
            <ul>
                <li>
                    <Link href="/products">
                        Produtos
                    </Link>
                </li>
            </ul>
            <h1>Home</h1>
        </div>
    )
}