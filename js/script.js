async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text)
    } catch (error) {
        alert((error && error.message) || 'コピーに失敗しました')
    }
}

const DATE = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6
}

const copyIcon = document.querySelectorAll(".btn-copy")

copyIcon.forEach(function (target) {
    target.addEventListener('click', function () {
        copyToClipboard(target.previousElementSibling.value)
        target.nextElementSibling.style.display = "block"
        setTimeout(function () {
            target.nextElementSibling.style.display = "none"
        }, 1200);
    });
});

const year = Number(moment().format("YYYY"))
const month = Number(moment().format("MM"))
const day = Number(moment().format("DD"))

// today
let label = document.getElementById("label-today")
let box = document.getElementById("box-today")
let line = moment().format("YYYY-MM-DD")
label.appendChild(document.createTextNode(line))
box.value = new Date(`${line}T00:00`).getTime() * 1000000

// 6 month
label = document.getElementById("label-hy")
box = document.getElementById("box-hy")
line = moment()
    .subtract(6, 'months')
    .subtract(DATE[moment().subtract(6, "months").format("ddd")], "days")
    .format("YYYY-MM-DD")
label.appendChild(document.createTextNode(line))
box.value = new Date(`${line}T00:00`).getTime() * 1000000

// 1 year
label = document.getElementById("label-1y")
box = document.getElementById("box-1y")
line = moment()
    .subtract(1, 'years')
    .subtract(DATE[moment().subtract(1, "years").format("ddd")], "days")
    .format("YYYY-MM-DD")
label.appendChild(document.createTextNode(line))
box.value = new Date(`${line}T00:00`).getTime() * 1000000

// 1 year
label = document.getElementById("label-2y")
box = document.getElementById("box-2y")
line = moment()
    .subtract(2, 'years')
    .subtract(DATE[moment().subtract(2, "years").format("ddd")], "days")
    .format("YYYY-MM-DD")
label.appendChild(document.createTextNode(line))
box.value = new Date(`${line}T00:00`).getTime() * 1000000

console.log("hello")