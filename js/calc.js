


let a = ``; // first number
let b = ``; // second number
let sign = ``; // знак операции
let finish = false;

const digit = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `.`];
const action = [`-`, `+`, `x`, `/`];

// Экран

const out = document.querySelector(`.calc-screen p`);

function clearAll() {
    a = ``;
    b = ``;
    sign = ``;
    finish = false;
    out.textContent = 0;
}

// document.querySelector(`.ac`).onclick = clearAll;
document.querySelector(".ac").addEventListener("click", clearAll);

// document.querySelector(`.buttons`).onclick = (event) => {
document.querySelector(".buttons").addEventListener("click", (event) => {
    // нажата не кнопка
    if (!event.target.classList.contains("btn")) return;
    // нажата кнопка clearAll
    if (event.target.classList.contains("ac")) return;
    out.textContent = ``;
    // получаю нажатую кнопку
    const key = event.target.textContent;
    // если нажата цифровая кнопка
    if (digit.includes(key)) {
        if (b == "" && sign == "") {
            a += key;
            console.log(a, b, sign);
            out.textContent = a;
        } else if (a !== "" && b !== "" && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key;
            out.textContent = b;
        }
        console.log(a, sign, b);
    }

    // усли нажата кнопка знака
    if (action.includes(key)) {
        sign = key;
        console.log(sign);
        out.textContent = sign;
        return;
    }

//    нажата кнопка равно

    if (key === "="){
        if (b === "") b = a;
        switch (sign) {
            case "+":
                a = Number(a) + Number(b);
                break;
            case "-":
                a = a - b;
                break;
            case "x":
                a = a * b;
                break;
            case "/":
                if (b === "0"){
                    out.textContent = "Error";
                    a = ``;
                    b = ``;
                    sign = ``;
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, sign, b);
    }
//    нажата кнопка %
    if (key === "%"){
        // if (b === "") b = a;
        a = Number(a);
        b = a * b / 100;
        switch (sign) {
            case "+":
                a = Number(a) + Number(b);
                break;
            case "-":
                a = a - b;
                break;
            case "x":
                a = b;
                break;
            case "/":
                if (b === "0"){
                    out.textContent = "Error";
                    a = ``;
                    b = ``;
                    sign = ``;
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, sign, b);
    }
    if (key === "+/-") {
        a = "-";
        console.log(a);
        out.textContent = a;
    }
});


// Тема
// Кнопка переключения темы
let switchDiv = document.querySelector(".switch-btn");
switchDiv.addEventListener("click", (event) => {
    switchDiv.classList.toggle("switch-on");
});

//


