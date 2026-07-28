const mypromise = new Promise((resolve, reject) => {
    const username = "ptomer40";
    const password = "123456";

    if (username == "ptomer40" && password == "123456") {
        resolve("success");
    } else {
        reject("username or password incorrect");
    }
});

mypromise.then((msg) => {
    console.log(msg);
}).catch((msg) => {
    console.log(msg);
}).finally(() => {
    console.log("All done");
});
async function handleData() {
    try {
        const msg = await mypromise;
        console.log(msg);
    } catch (err) {
        console.log(err);
    } finally {
        console.log("All Done");
    }
}

handleData();