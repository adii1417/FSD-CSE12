setTimeout(() => {
    console.log("One");

    setTimeout(() => {
        console.log("Two");

        setTimeout(() => {
            console.log("Three");

            setTimeout(() => {
                console.log("Four");

                setTimeout(() => {
                    console.log("Five");

                    setTimeout(() => {
                        console.log("Six");

                        setTimeout(() => {
                            console.log("Seven");
                        }, 1000);

                    }, 1000);

                }, 1000);

            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);