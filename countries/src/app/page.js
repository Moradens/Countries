import Link from "next/link";
import styles from "./globals.css";

export default function Home() {
    return (
        <>
            <p>Click here:</p>
            <Link href="/countries">
                <p>Countries</p>
            </Link>
        </>
    );
}

