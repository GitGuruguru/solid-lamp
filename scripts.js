
let click_b = document.querySelector("#Mi");
click_b.addEventListener('click', () => {
    const tag = document.querySelector('.name').value;
    const secondName = document.querySelector('.secondName').value;

    document.querySelector('.resultName').textContent = tag;
    document.querySelector('.resultSecondName').innerHTML = secondName;
});
