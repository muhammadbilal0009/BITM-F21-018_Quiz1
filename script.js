document.addEventListener("DOMContentLoaded", function () {
    const numInput = document.getElementById('num');
    const enterBtn = document.getElementById('enterBtn');
    const resetBtn = document.getElementById('resetBtn');
    const resultText = document.getElementById('result');
    const resultTable = document.getElementById('resultTable');
    const EOCell = document.getElementById('EO');
    const FacCell = document.getElementById('Fac');
    const PriCell = document.getElementById('Pri');

    enterBtn.addEventListener('click', function () {
        const num = parseInt(numInput.value);

        if (!isNaN(num) && num >= 0) {
            const isEven = num % 2 === 0;
            const factorial = calculateFactorial(num);
            const isPrime = isNumberPrime(num);

            EOCell.textContent = isEven ? 'Even' : 'Odd';
            FacCell.textContent = factorial;
            PriCell.textContent = isPrime ? 'Prime' : 'Not Prime';
            resultText.textContent = ''; 
            resultTable.style.display = 'table';
        } else {
            resultText.textContent = 'Enter a positive number!';
            resultTable.style.display = 'none';
        }
    });

    resetBtn.addEventListener('click', function () {
        numInput.value = '';
        resultText.textContent = '';
        resultTable.style.display = 'none';
        EOCell.textContent = '';
        FacCell.textContent = '';
        PriCell.textContent = '';
    });

    function calculateFactorial(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    function isNumberPrime(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;
        let i = 5;
        while (i * i <= n) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }
});
