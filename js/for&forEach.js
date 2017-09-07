var balls = [{
        show: false
    },
    {
        show: false
    },
    {
        show: false
    },
    {
        show: false
    },
    {
        show: false
    },
]
var dropBalls = [];
// for (let i = 0; i < balls.length; i++) {
//     let ball = balls[i];
//     if (!ball.show) {
//         ball.show = true;
//         dropBalls.push(ball);
//         return;
//     }
// }
balls.forEach((arr) => {
    if (!arr.show) {
        arr.show = true;
        dropBalls.push(arr);
        return;
    }
});
console.log(dropBalls)