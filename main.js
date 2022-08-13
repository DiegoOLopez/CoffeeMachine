//IMPLEMENTARE QUE SE PUEDA AGREGAR UN TIPO DE CAFE PERSONALIZADO!
//Y TAMBIEN HARE MAS SIMPLE EL CODIGO DE QUE FALTARIA AGREGAR A LA CAFETERA
/* Definicion de variables*/
let input = require('sync-input');
vasos = 9;
coffee = 120;
water = 400;
milk = 540;
money = 550;

/**
 * FUNCION MAIN
 */

function main() {
    let selection = input('Write action (buy, fill, take, remaining, exit):\n')
    /**
     * SELECCION PRINCIPAL
     */
    switch (selection) {
        case 'buy':
            buy();
            main();
            break;
        case 'fill':
            fill();
            main();
            break;
        case 'take':
            take();
            main();
            break;
        case 'remaining':
            theMachineData();
            main();
            break;
        case 'exit':
            break;
        default:
            console.log('Error');
            break;
    }

}

/**
 * Impresion de los recursos que tiene la maquina
 */

function theMachineData() {
    console.log(
        'The coffee machine has:\n' +
        water + ' ml of water\n' +
        milk + ' ml of milk\n' +
        coffee + ' g of coffee beans\n' +
        vasos + ' disposable cups\n' +
        '$' + money + ' of money\n'
    );
}

/**
 * FUNCION BUY Y FUNCION CONTADOR
 */

//CONTADOR
function contadorBuy(waterC, milkC, coffeeC, vasosC, moneyC) {
    if(water >= waterC && milk >= milkC && coffee >= coffeeC && vasos >= vasosC) {
        water -= waterC;
        milk -= milkC;
        coffee -= coffeeC;
        vasos -= vasosC;
        money += moneyC;
        console.log('I have enough resources, making you a coffee!\n');
    }else{
        if (water < waterC) {
            console.log('Sorry, not enough water!\n');
        }
        if(milk < milkC) {
            console.log('Sorry, not enough milk!\n');
        }
        if(coffee < coffeeC){
            console.log('Sorry, not enough coffee!\n')
        }
        if(vasos < vasosC) {
            console.log('Sorry, not enough cups!\n')
        }
    }
}

//Funcion buy
function buy() {
    let typeOfCoffee = parseInt(input('What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4 - personalized, back - to main menu:\n'));
    switch (typeOfCoffee){
        case 1:
            contadorBuy(250, 0,16,1,4)
            break;
        case 2:
            contadorBuy(350,75,20,1,7)
            break;
        case 3:
            contadorBuy(200,100,12,1,6)
            break;
        case 4:
            waterP = input('How many ml of water do you want your coffee to have?');
            milkP = input('How many ml of milk do you want your coffee to have?');
            coofeeP = input('How many ml of water do you want your coffee to have?');
            contadorBuy(waterP, milkP, coofeeP, 1, 9)
        case 'back':
            main();
            break;
        default:
            break;
    }
}

/**
 * FUNCION DE RELLENO DE INGREDIENTES
 */

function contadorFill(waterF, milkF, coffeeF, vasosF) {
    water += waterF;
    milk += milkF;
    coffee += coffeeF;
    vasos += vasosF;
}

function fill() {
    let waterF = parseInt(input('Write how many ml of water you want to add:\n'));
    let mikF = parseInt(input('Write how many ml of milk you want to add:\n'));
    let coffeeF = parseInt(input('Write how many grams of coffee beans you want to add:\n'));
    let vasosF = parseInt(input('Write how many disposable coffee cups you want to add:\n'))
    contadorFill(waterF, mikF, coffeeF, vasosF);
}

/**
 * FUNCION DE RETIRO DE DINERO
 */

function take() {
    console.log('I gave you $' + money);
    money -= money;
}

/**
 * SELECCION PRINCIPAL
 */
main()