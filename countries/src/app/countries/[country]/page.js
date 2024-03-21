import Link from "next/link";
export default async function Home({params}) {

    const response =  await fetch(`https://restcountries.com/v3.1/name/${params.country}`);
    const data =  await response.json();

    const name = data[0].name.common
    const officialName = data[0].name.official
    const cca3 = data[0].cca3
    const area = data[0].area
    const population = data[0].population
    const city = data[0].capital
    const region = data[0].region


    return (
        <main>
            <div>
                <h1>{name}</h1>
                <p>
                    <span>Official Name: {officialName}</span>
                </p>
                <p>
                    <span>CCA3: {cca3}</span>
                </p>
                <p>
                    <span>Area: {area} meters</span>
                </p>
                <p>
                    <span>Population: {population}</span>
                </p>
                <p>
                    <span>City: {city}</span>
                </p>
                <p>
                    <span>Region: {region}</span>
                </p>
                <p>
                    <Link href={"/countries"}>Zpět</Link>
                </p>
            </div>
        </main>
    )
}
