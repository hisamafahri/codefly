type Props = {
    payload: BodyInit;
};

export async function createEntry({ payload }: Props) {
    return await fetch("/api/post", {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },

        body: payload,
    }).then((response: any) => response.json());
}
