$( document ).ready(function() {
    
var picture = $("#figure1");
var picture2 = $("#figure2");
var picture3 = $("#figure3");
var picture4 = $("#Maul");
var picture5 = $("#Droid");
var playerHealth = 100;
var enemyHealth = 100;
var attackPower = Math.floor(Math.random() * 15);
var counterAttack = Math.floor(Math.random() * 20)
var maulSelect = 0;
var droidSelect = 0;
var characterSelect = false;
var numberOfAttackers = 2;    
$("#winText").hide();
$("#enemiesWin").hide();
    
$("#figure1").on("click", function(){
    if (characterSelect == false) {
    $("#allyPlayer").append(picture);
    characterSelect = true;
    $("#allyHealth").html(playerHealth);
    }
})  

$("#figure2").on("click", function(){
    if (characterSelect == false) {
    $("#allyPlayer").append(picture2);
    characterSelect = true;
    $("#allyHealth").html(playerHealth);
    }
}) 
    
$("#figure3").on("click", function(){
    if (characterSelect == false) {
    $("#allyPlayer").append(picture3);
    characterSelect = true;
    $("#allyHealth").html(playerHealth);
    }
}) 

$("#Maul").on("click", function(){
    if (maulSelect == 0) {
    $("#enemyPlayer").append(picture4);
    maulSelect = 1;
    droidSelect = 3;
    $("#enemyHealth").html(enemyHealth);
    }
}) 

$("#Droid").on("click", function(){
    if (droidSelect == 0) {
    $("#enemyPlayer").append(picture5);
    droidSelect = 1;
    maulSelect = 3;
    $("#enemyHealth").html(enemyHealth);
    }
}) 

$("#attack").on("click", function(){
if (characterSelect && (droidSelect === 1 || maulSelect === 1)) {
    enemyHealth-=attackPower;
    playerHealth-=counterAttack;
    attackPower = attackPower + attackPower;
    updateHealth();
    enemyDead();
    
    } 
})



function updateHealth() {
    $("#enemyHealth").html(enemyHealth);
    $("#allyHealth").html(playerHealth);
}
    
function updateEnemy() {
    if (maulSelect == 2) {
        $(picture4).hide();
        $("#enemyPlayer").append(picture5);
        enemyHealth = 100;
        attackPower = Math.floor(Math.random() * 15);
        $("#enemyHealth").html(enemyHealth);
    } else {
        $("#Droid").hide();
        $("#enemyPlayer").append(picture4);
        enemyHealth = 100;
        $("#enemyHealth").html(enemyHealth);
}
    
}
    
function enemyDead() {
    if (enemyHealth <= 0) {
        if (numberOfAttackers == 1) {
            $("#winText").show();
             $("#enemyHealth").html("0");
        } else {
            alert("You have defeated the enemy!");
            if (maulSelect === 1) {
                maulSelect = 2;
                droidSelect = 1;
                numberOfAttackers--;
        }   else {
                maulSelect = 1;
                droidSelect = 2;
                numberOfAttackers--;
        }
            updateEnemy();
            }
    } else if (playerHealth <= 0) {
        $("#enemiesWin").show();
        $("#allyHealth").html("0");
        
    }
}
   
    
});



