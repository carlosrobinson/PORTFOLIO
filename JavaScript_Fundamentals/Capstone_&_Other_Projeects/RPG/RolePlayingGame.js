/**
 *          Requirements
 */


// create package.json: npm init -y
// install readline-sync: npm install readline-sync
const readline = require("readline-sync");
//A greeting
//
console.log("Greetings Message!!!!")
const playerName = readline.question("What is your name: ");
console.log('Hi ' + playerName + '!');

// variables for player
let playersHealth = 40;
let trophy = []; 
const options = ['walk', 'exit', 'print'];
const enemies = ['vampire', 'wraith', 'killer clown', 'werewolf', 'radioactive zombie', 'swamp monster'];
let items = ['small health posion', 'magna sword', 'ice sword', 'chain mail'];
let userLoot= items[Math.floor(Math.random() * items.length)]


function startGame(){
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];
    let enemyHealth = 40;
    let playerAttack = Math.floor(Math.random() * (5) + 3);
    let enemyAttack = Math.floor(Math.random() * (4) + 3);
    const index = readline.keyInSelect(options, "OK choose a selection: ")

    if(options[index] == "exit"){
        console.log("Exiting....");
    }else if(options[index] == "print"){
        console.log("Printing....")
        console.log(playerName + ' You Win! \n' + playersHealth + "\nitems: " + trophy)
    }else if(options[index] == "walk"){
        let key = Math.random();
        if(key <= 0.3){
            console.log("Walking....")
        }else if(key >= 0.3){
            console.log(enemy + " appeard....");
            do{
                const player = readline.question('Choose wisely. Enter "r" to run or "a" to attack. ');
                switch(player){
                    case 'r': 
                        let run = Math.random();
                        if(run < 0.2){
                            console.log("You Coward " + enemy + " dealt you a blow of " + enemyAttack + " hits!")
                        } else {
                            console.log(" You have escaped! ");
                            break
                        }
                    case 'a': {
                        playersHealth -= enemyAttack;
                        console.log(playerName + " you attacked " + enemy + " with " + enemyAttack + " hits!")
                        
                        enemyHealth -= playerAttack;
                        console.log(enemy + " attack you with " + enemyAttack + " hits!")
                        if(playersHealth <= 0) {
                            console.log( enemy + " has killed you " + playerName);
                        }else if(enemyHealth <= 0) {
                            let loot = Math.random();
                            console.log(playerName + " you killed the " + enemy + "\n " + "you gained a " + userLoot);
                            if(loot >= 0) {
                                trophy.push(userLoot);
                                break;
                            } 
                            break;
                        }
                    }
                }
            }while(enemyHealth >=0 && playersHealth >=0);
        }
    }
}

while(playersHealth > 0){
    restorePlayerHealth = function(){
        playersHealth = 40;
    }
    restorePlayerHealth();
    startGame();
}
