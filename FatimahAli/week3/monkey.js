/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.
///Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.
Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes

*/
let monkey= {
    name: 'aaa',
    species: 'a1',
    foodsEaten: 'a2',
    eatSomething:function(food)
    {
        this.foodsEaten= food; 
    },
    introduce:function(name, species, foodsEaten)
    {
        this.name= name; 
        this.species= species;
        this.foodsEaten= foodsEaten;
        console.log("My name is : " + this.name + " my species is : " + this.species + " My Foodeaten is " + this.foodsEaten )
        return this;
    
    },
};
///Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.


let monkey1 = Object.create(monkey);

 monkey1= monkey.introduce('monkey1','chimpanzee','honey');
   
 console.log("^^^^^^monkey1^^^^^");
 console.log(monkey1);



let monkey2 = monkey.introduce('monkey2', 'baboon', 'apple');
console.log("^^^^^^monkey2^^^^^");
console.log(monkey2);

let monkey3 = monkey.introduce('monkey3', 'robbah', 'banana');
 
console.log("^^^^^^monkey3^^^^^");
console.log(monkey3);