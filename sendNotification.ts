const subscription =
    {
        endpoint: '**********',
        expirationTime: null,
        keys: {
            p256dh: '*****',
            auth: '******'
        }
    }



async function main() {
    await fetch("http://localhost:3000/notification", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            subscription,
        }),
        signal: AbortSignal.timeout(10000),
    });
}

main().then(r => console.log("done"))
