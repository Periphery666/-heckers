let player1 = '\u26C2';
let player2 = '\u26C0';

let from;
let selected;
let index1 = -1;
let index2 = -1;
let player1total = 12;
let player2total = 12;


function Table() {


    this.init = function () {

        this.table = document.getElementsByClassName(`check`);
        this.pos = -1;
        this.board = document.getElementById("chessboard");
        this.checks = [];

        this.left = -1;
        this.top = -1;
        console.log(this.board);

        this.map = new Array(4);

        for (let i = 0; i < this.map.length; i++) {
            this.map[i] = new Array(4);
        }

        this.map[1][1] = ``

    };

    const foo = (y, x) => {

        for (let i = 0; i < this.checks.length; i++) {
            let X = x - parseInt(this.checks[i].style.left);
            let Y = y - parseInt(this.checks[i].style.top);


            if ((X) >= 0 && (X) <= 59) {
                if ((Y) >= 0 && (Y) <= 59) {
                    this.left = parseInt(this.checks[i].style.left);
                    this.top = parseInt(this.checks[i].style.top);
                    return i;
                }
            }
        }
    };

    const setCheckNewPosition = (i, y, x) => {
        let flag = false;
        if (x < 0 || x > 480 || y < 0 || y > 480) {
            this.checks[i].style.left = `${this.left}px`;
            this.checks[i].style.top = `${this.top}px`;



        }

        // ЧЕРНЫЕ
        if (this.checks[i].getAttribute('src') === '../img/black.png') {
            if (x - this.left < 120 && x - this.left >= 60 && y - this.top < 120 && y - this.top >= 60) {
                this.checks[i].style.left = `${this.left + 60}px`;
                this.checks[i].style.top = `${this.top + 60}px`;
                flag = true;
            } else if (x - this.left <= 0 && x - this.left > -60 && y - this.top < 120 && y - this.top >= 60) {
                this.checks[i].style.left = `${this.left - 60}px`;
                this.checks[i].style.top = `${this.top + 60}px`;
                flag = true;
            } else if (x - this.left < 180 && x - this.left >= 120 && y - this.top < 180 && y - this.top >= 120) {
                for (let j = 0; j < this.checks.length; j++) {
                    if (this.checks[j].getAttribute('src') === '../img/white.png') {
                        if (parseInt(this.checks[j].style.left) < x && parseInt(this.checks[j].style.left) > this.left && parseInt(this.checks[j].style.top) < y && parseInt(this.checks[j].style.top) > this.top) {
                            this.checks[i].style.left = `${this.left + 120}px`;
                            this.checks[i].style.top = `${this.top + 120}px`;
                            this.board.removeChild(this.checks[j]);
                            this.checks.splice(j, 1);
                            ls();
                            flag = true;
                        }
                    }
                }
            } else if (x - this.left <= 60 && x - this.left > -120 && y - this.top < 180 && y - this.top >= 120) {
                for (let j = 0; j < this.checks.length; j++) {
                    if (this.checks[j].getAttribute('src') === '../img/white.png') {
                        if (parseInt(this.checks[j].style.left) > x && parseInt(this.checks[j].style.left) < this.left && parseInt(this.checks[j].style.top) < y && parseInt(this.checks[j].style.top) > this.top) {
                            this.checks[i].style.left = `${this.left - 120}px`;
                            this.checks[i].style.top = `${this.top + 120}px`;
                            this.board.removeChild(this.checks[j]);
                            this.checks.splice(j, 1);
                            ls();
                            flag = true;
                        }
                    }
                }
            }
        } else { //БЕЛЫЕ
            if (x - this.left < 120 && x - this.left >= 60 && y - this.top <= 0 && y - this.top > -60) {
                this.checks[i].style.left = `${this.left + 60}px`;
                this.checks[i].style.top = `${this.top - 60}px`;
                ls();
                flag = true;
            } else if (x - this.left <= 0 && x - this.left > -60 && y - this.top <= 0 && y - this.top > -60) {
                this.checks[i].style.left = `${this.left - 60}px`;
                this.checks[i].style.top = `${this.top - 60}px`;
                ls();
                flag = true;
            } else if (x - this.left < 180 && x - this.left >= 120 && y - this.top < -70 && y - this.top >= -140) {
                for (let j = 0; j < this.checks.length; j++) {
                    if (this.checks[j].getAttribute('src') === '../img/black.png') {
                        if (parseInt(this.checks[j].style.left) < x && parseInt(this.checks[j].style.left) > this.left && parseInt(this.checks[j].style.top) > y && parseInt(this.checks[j].style.top) < this.top) {
                            this.checks[i].style.left = `${this.left + 120}px`;
                            this.checks[i].style.top = `${this.top - 120}px`;
                            this.board.removeChild(this.checks[j]);
                            this.checks.splice(j, 1);
                            ls();
                            flag = true;
                        }
                    }
                }
            } else if (x - this.left < -80 && x - this.left >= -180 && y - this.top < -80 && y - this.top >= -140) {
                for (let j = 0; j < this.checks.length; j++) {
                    if (this.checks[j].getAttribute('src') === '../img/black.png') {
                        if (parseInt(this.checks[j].style.left) > x && parseInt(this.checks[j].style.left) < this.left && parseInt(this.checks[j].style.top) > y && parseInt(this.checks[j].style.top) < this.top) {
                            this.checks[i].style.left = `${this.left - 120}px`;
                            this.checks[i].style.top = `${this.top - 120}px`;
                            this.board.removeChild(this.checks[j]);
                            this.checks.splice(j, 1);
                            ls();
                            flag = true;
                        }
                    }
                }
            }
        }

        if (flag === false) {
            this.checks[i].style.left = `${this.left}px`;
            this.checks[i].style.top = `${this.top}px`;
        }

        this.left = undefined;
        this.top = undefined;
    };

    const ls = ()=>{

        localStorage.setItem('coordinate', this.checks);
        let ls = localStorage.getItem('coordinate');
        alert(ls);
        let rrr= JSON.parse(ls);
        alert(rrr);
    };

    const onmousedown = (e) => {
        e.preventDefault();

        let i = foo(e.pageY, e.pageX);

        if (i === undefined) {
            return;
        }

        this.checks[i].style.position = 'absolute';
        this.checks[i].style.zIndex = '1000';
        this.board.appendChild(this.checks[i]);

        const moveAt = (e) => {
            this.checks[i].style.left = e.pageX - this.checks[i].offsetWidth / 2 + 'px';
            this.checks[i].style.top = e.pageY - this.checks[i].offsetHeight / 2 + 'px';
        };

        moveAt(e);

        this.board.onmousemove = function (e) {
            moveAt(e);
        };

        this.board.onmouseup = (e) => {
            setCheckNewPosition(i, e.pageY, e.pageX);
            this.board.onmousemove = null;
            this.checks[i].onmouseup = null;
        };
    };

    this.setCheck = function () {

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {

                let check = document.createElement(`img`);

                check.setAttribute(`position`, `absolute`);
                check.setAttribute(`class`, `field`);
                check.setAttribute(`src`, `../img/black.png`);
                check.setAttribute(`width`, `40px`);
                check.setAttribute(`height`, `40px`);
                let correct = 0;
                if (i % 2 !== 0) {
                    correct = 60;
                }
                check.style.position = `absolute`;
                check.style.zIndex = `1000`;
                check.style.left = `${10 + (j * 120 + correct)}px`;
                check.style.top = `${10 + (i * 60)}px`;

                check.onmousedown = this.onmousedown;

                this.board.appendChild(check);
                this.checks.push(check);
            }
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {

                let check = document.createElement(`img`);

                check.setAttribute(`position`, `absolute`);
                check.setAttribute(`class`, `field`);
                check.setAttribute(`src`, `../img/white.png`);
                check.setAttribute(`width`, `40px`);
                check.setAttribute(`height`, `40px`);
                let correct = 0;
                if (i % 2 === 0) {
                    correct = 60;
                }
                check.style.position = `absolute`;
                check.style.zIndex = `1000`;
                check.style.left = `${10 + (j * 120 + correct)}px`;
                check.style.top = `${310 + (i * 60)}px`;

                check.onmousedown = this.onmousedown;

                this.board.appendChild(check);
                this.checks.push(check);

            }
        }

    };

    this.setEventCheck = function () {

        for (let i = 0; i < this.checks.length; i++) {
            this.checks[i].onmousedown = onmousedown;
        }

    };

}





let table = new Table();

table.init();
table.setCheck();
table.setEventCheck();

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);


let rrr= JSON.parse(json);

// function for player 1
// Array.from(board.children).forEach(function(cell, index) {
//
//
//     cell.onclick = function(elem) {
//         // Check if a piece was selected
//         if (elem.target.innerHTML === player1) {
//             selected = player1;
//         }
//         else if (elem.target.innerHTML === player2) {
//             selected = player2;
//         }
//         if (elem.target.innerHTML === player1 || elem.target.innerHTML === player2) {
//             //get exact selected code
//             from = elem.target;
//             index1 = index;
//         }
//        // Check if a move can be made
//        //  else if (from && isLegalMove(from, elem.target)) {
//        //      index2 = index;
//        //
//        //      if(playerRules(selected,index1,index2)) {
//        //          // Put a piece within the selected square
//        //          var total = index1 - index2;
//        //          console.log("player" + selected + " index"+ index1 + " " + index2 + " DIFF: " + total);
//        //          elem.target.innerHTML = selected;
//        //          // Remove it from the old square
//        //          from.innerHTML = '';
//        //          // Clear the `from` variable
//        //          from = null;
//        //          index1 = -1;
//        //          index2 = -1;
//        //      }
//        //  }
//     }
// });
//
// //
// function printElem (id, content) {
//     document.getElementById(id).innerHTML = content;
// }
// //
// // // function to determine if a move is legal
// function isLegalMove(from, to) {
//     let result = to.innerHTML !== player1 && to.innerHTML !== player2;
//     result = result && to.className.indexOf('yellow') > -1;
//     return result;
// }
// //
// let flag = false;
// function playerRules(sel, from, to) {
//     //rule - one cannot move backward
//     var moveDiff = from - to;
//     console.log(moveDiff);
//     if (sel == player1) {
//         flag = (to < from);
//         if (flag) {
//             printElem('pturn',"Player 2" + player2);
//         }
//         if(flag && moveDiff === 14)  {
//             //get doublecross
//             dc = from - 7;
//             flag = (board.children[dc].innerHTML == player2);
//             //is double crossed// minus player2 and clear field
//             if(flag) {
//                 player2total -= 1;
//                 console.log("This" + player2total);
//                 printElem ('p2card', player2total);
//                 board.children[dc].innerHTML = '';
//
//                 //checkWinner (player1total, player2total);
//             }
//         }
//         else if (flag && moveDiff == 18) {
//             //get double cross
//             dc = from - 9;
//             flag = (board.children[dc].innerHTML == player2);
//             //is double crossed// minus player2 and clear field
//             if(flag) {
//                 player2total -= 1;
//                 printElem('p2card', player2total);
//                 board.children[dc].innerHTML= '';
//             }
//         }
//     }
//     //Do same for player 2
//     else if (sel == player2) {
//         flag = (to > from);
//         if(flag) {
//             printElem ('pturn', "Player 1" + player1);
//         }
//
//         if (flag && moveDiff == -14) {
//             //get doublecross
//             dc = from + 7;
//             flag = (board.children[dc].innerHTML == player1);
//             //is double crossed// minus player2 and clear field
//             if (flag) {
//                 player1total -= 1;
//                 printElem ('p1card', player1total);
//                 board.children[dc].innerHTML = '';
//                // checkWinner (player1total, player2total);
//             }
//         }
//         else if (flag && moveDiff == -18) {
//             //get doublecross
//             dc = from + 9;
//             flag = (board.children[dc].innerHTML == player1);
//             //is double crossed// minus player2 and clear field
//             if (flag) {
//                 player1total -= 1;
//                 printElem ('p1card', player1total);
//                 board.children[dc].innerHTML = '';
//             }
//         }
//     }
//     return flag;
// }
//
// // check for winner at each move
// function checkWinner(p1count, p2count) {
//     console.log('Check!');
//     if (p1count <= 0) {
//         c = confirm ("Game won! by player 1, Restart?");
//         console.log('Check!');
//         if (c) window.location = 'gamepage.php';
//     }
//     else if (p2count <= 0) {
//         c = confirm ("Hurray! Game won by player 2, Restart?");
//         console.log('Check!');
//         if (c) window.location = 'gamepage.php';
//     }
// }