const Roll = {
    D4: () => Math.floor(Math.random() * 4) + 1,
    D6: () => Math.floor(Math.random() * 6) + 1,
    D8: () => Math.floor(Math.random() * 8) + 1,
    D10: () => Math.floor(Math.random() * 10) + 1, 
    D12: () => Math.floor(Math.random() * 12) + 1,
    D20: () => Math.floor(Math.random() * 20) + 1,
    D100: () => Math.floor(Math.random() * 100) + 1,
}

const diceRollForm = document.getElementById('diceRoll')
const diceRollButton = document.getElementById('diceRollButton')
const output = document.getElementById('rollOutput')
const quantity = document.getElementById('diceQuantity')

diceRollButton.addEventListener('click', handleRoll );

function handleRoll(event) {
    event.preventDefault();

    const selectedDice = diceRollForm.querySelector('select').value;
    const rollQuantity = parseInt(quantity.value);

    if (isNaN(rollQuantity) || rollQuantity <= 0) {
        output.textContent = "Enter a valid number";
        return;
    }

    let totalRoll = 0;
    for (let i = 0; i < rollQuantity; i++) {
        switch (selectedDice) {
            case 'D4':
                totalRoll += Roll.D4();
                break;
            case 'D6':
                totalRoll += Roll.D6();
                break;
            case 'D8':
                totalRoll += Roll.D8();
                break;
            case 'D10':
                totalRoll += Roll.D10();
                break;
            case 'D12':
                totalRoll += Roll.D12();
                break;
            case 'D20':
                totalRoll += Roll.D20();
                break;
            case 'D100':
                totalRoll += Roll.D100();
                break;
        }
    }

    output.textContent = `Total result for ${rollQuantity} ${selectedDice}: ${totalRoll}`;
}
