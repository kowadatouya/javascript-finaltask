let display = document.getElementById('display');
function appendToDisplay(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert('計算式が正しくありません');
        clearDisplay();
    }
}