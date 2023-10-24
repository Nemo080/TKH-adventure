function startAdventure(){
    const choice1 = prompt("You are planning what you want to eat for lunch today. You decide you might want to have ramen or sushi but you can only pick one. What do you pick, Ramen (type a) or Sushi (type b)?");

    if (choice1 === "a") {
        alert("You have chosen ramen! [Click OK to continue]")
        const ramen = prompt("What type of ramen would you like? Chicken (a) or Beef (b)?")
        if (ramen === "a") {
            alert("Chicken it is! [Click OK to continue]")
            const toppings1 = prompt("You have the option of adding kimchi or egg to your ramen. What would you like to add to that? Kimchi (a) or egg (b)?")
            if (toppings1 === "a"){
                alert("Here's your chicken ramen with kimchi as your topping. Enjoy!")
            }
            else if (toppings1 === "b"){
                alert("Here's your chicken ramen with egg as your topping. Enjoy!")
            }
            else {
                alert("Here's your chicken ramen without any toppings. Enjoy!")
            }
        }
        else if (ramen === "b") {
            alert("Beef it is! [Click OK to continue]")
            const toppings2 = prompt ("You have the option of adding kimchi or egg to your ramen. What would you like to add to that? Kimchi (a) or egg (b)?")
            if (toppings2 === "a"){
                alert("Here's your beef ramen with kimchi as your topping. Enjoy!")
            }
            else if (toppings2 === "b"){
                alert("Here's your beef ramen with egg as your topping. Enjoy!")
            }
            else {
                alert("Here's your beef ramen without any toppings. Enjoy!")
            }
        }
        else {
            alert("Veggie option is always great! Here's you vegetable ramen. Enjoy!")
        }

    }
    else if (choice1 ==="b"){
        alert("You have chosen sushi! [Click OK to continue]")
        const sushi = prompt("You have the option to get 2 rolls, 3 rolls or 1 roll of sushi. How many rolls of sushi would you like to get? 2 rolls (a), 3 rolls (b) or 1 roll (press any key)?")
        if (sushi === "a"){
            alert("Great! You chose to get 2 rolls of sushi. [Click OK to continue]")
            const twoRolls = prompt("You only have options for shrimp tempura roll and spicy tuna roll. Would you like to have 2 rolls of shrimp tempura (a), 2 rolls of spicy tuna roll (b), or 1 roll of shrimp tempura and 1 roll of spicy tuna roll (press any key)?")
            if (twoRolls === "a"){
                alert("Here's your 2 rolls of shrimp tempura. Enjoy!")
            }
            else if(twoRolls === "b"){
                alert("Here's your 2 rolls of spicy tuna. Enjoy!")
            }
            else {
                alert("Here's your 1 roll of shrimp tempura and 1 roll of spicy tuna. Enjoy!")
            }
        }
        else if (sushi === "b"){
            alert("Great! You chose to get 3 rolls of sushi. [Click OK to continue]")
            const twoRolls = prompt("You only have options for shrimp tempura roll, spicy tuna roll and eel roll. The eel roll is only available in the variety special of all 3 rolls. Would you like to have 3 rolls of shrimp tempura (a), 3 rolls of spicy tuna roll (b), or a variety of all 3 rolls (press any key)?")
            if (twoRolls === "a"){
                alert("Here's your 3 rolls of shrimp tempura. Enjoy!")
            }
            else if(twoRolls === "b"){
                alert("Here's your 3 rolls of spicy tuna. Enjoy!")
            }
            else {
                alert("Here's your variety special. Enjoy!")
            }
        }
        else {
            alert("You chose 1 roll of sushi. The only roll that's served as 1 roll is the vegetable roll. So, here's your 1 roll of vegetable roll. Enjoy! ")
        }
    }
    else {
        alert("Unfortunately you did not choose from the menu of ramen and sushi. If you would like to have ramen and sushi, PLEASE TRY AGAIN. If not, thank you for your time. Have a good day!")
    }

}