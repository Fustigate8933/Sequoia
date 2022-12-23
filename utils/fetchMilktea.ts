import { Milktea } from "../typings";

export const fetchMilktea = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getMilktea`);
    const data = await res.json()
    const milkteas: Milktea[] = data.milkteas
    // console.log("Fetched ", milkteas)
    return milkteas
}
