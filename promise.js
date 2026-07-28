const mypromise = new Promise((resolve, reject) => {
    const username = "aditi730";
    const password = "123456";

    if (username === "aditi730" && password === "123456") {
        resolve("Success");
    } else {
        reject("Username or Password Incorrect");
    }
});

mypromise
    .then((msg) => {
        console.log(msg);
    })
    .catch((msg) => {
        console.log(msg);
    })
    .finally(() => {
        console.log("All done");
    });

    