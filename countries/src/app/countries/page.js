import Link from "next/link";
import styles from "./page.module.css";

const getData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return response.json()
}
const Page = async () => {
    const data = await getData()
    return (
        <div>
            {data.map(country => (
                <div key={country.name.common} className={styles.countrycard}>
                    <h2>{country.name.common}</h2>
                    <img src={country.flags.png}/>
                    <p>Population: {country.population}</p>
                    <p>Name: {country.name.official}</p>
                    <p>Code: {country.cca3}</p>
                    <div className={styles.button}><Link href={`/countries/${country.name.common}`}>Info</Link></div>
                </div>
            ))}
        </div>
    )
}
export default Page;