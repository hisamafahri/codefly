export async function getEntry(id: string) {
    return await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/get/" + id, {
        method: "get",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    }).then((response: any) => response.json());
}
