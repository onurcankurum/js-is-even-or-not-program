const readline = require('readline');

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

function isEven(n) {
    return (!(n & 1));
}

function validateNumber(e) {
    const pattern = /(^\d{1,10}$)/;
  
    return pattern.test(e)
}


async function main() {

    const n = await askQuestion("Enter a number  : ");
    if (validateNumber(n)) {
        isEven(parseInt(n)) ?
            console.log(n + " is even") :
            console.log(n + " is odd")
            main()
    } else {
        console.log("please enter only numbers");

        main()

    }


}

main();