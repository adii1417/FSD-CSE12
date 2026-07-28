const mypromise = new Promise((resolve, reject) => {
    const username = "aditi730";
    const password = "123456";

    if (username === "aditi730" && password === "123456") {
        resolve("Success");
    } else {
        reject("Username or Password Incorrect");
    }
});
const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 2 Completed");
    }, 1000);
});
async function handlePromises() {
    try {
        const result1 = await mypromise;
        console.log(result1);

        const result2 = await promise2;
        console.log(result2);
    } catch (err) {
        console.log(err);
    }
}

handlePromises();