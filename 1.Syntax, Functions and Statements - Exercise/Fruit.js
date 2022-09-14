function CalculateNeededMoneyForFruits(fruitType, fruitQuantityGrams, fruitPriceForKilo){
    let fruitQuanityKg = fruitQuantityGrams /1000;
    let neededMoney = fruitQuanityKg * fruitPriceForKilo;

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${fruitQuanityKg.toFixed(2)} kilograms ${fruitType}.`);
}

CalculateNeededMoneyForFruits('orange', 2500, 1.80);
CalculateNeededMoneyForFruits('apple', 1563, 2.35);