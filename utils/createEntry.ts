type Props = {
    payload: BodyInit;
};

export async function createEntry({ payload }: Props) {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`, {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },

        body: payload,
    }).then((response: any) => response.json());
}
