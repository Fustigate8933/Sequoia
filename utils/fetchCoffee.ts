import { Coffee } from "../typings";

export const fetchCoffee = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getCoffee`);
    const data = await res.json()
    const coffees: Coffee[] = data.coffees
    // console.log("Fetched ", coffees)
    return coffees
}
