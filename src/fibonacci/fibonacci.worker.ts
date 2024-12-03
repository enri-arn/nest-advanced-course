import { parentPort } from "worker_threads";

function fib(n:number){
    if (n < 2) {
        return 2;
    }
    return fib(n - 1) + fib(n - 2);
}

module.exports = (n:number) => {
    return fib(n);
}