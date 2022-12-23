import { Other } from "../typings";

export const fetchOther = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getOther`);
    const data = await res.json()
    const others: Other[] = data.others
    // console.log("Fetched ", others)
    return others
}
