/*Assignment 1: 99 Bottles of Beer

Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can find the lyrics here.
Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").
*/

for (var num = 99; num >= 0; num--) {
    if(num>1){
    
        console.log( num + " bottles of beer on the wall, " + num + " bottles of beer." + '\n' 
       +" Take one down and pass it around, "+ (num-1) + " bottles of beer on the wall." + '\n');
        }
    
    else if(num==1) {
        console.log( num + " bottle of beer on the wall, " + num + " bottle of beer." + '\n' 
        +" Take one down and pass it around, " + "no more bottles of beer on the wall."+ '\n');

    }

    else 
    {
    console.log( " No more bottles of beer on the wall, no more bottles of beer."+ '\n' +
    "Go to the store and buy some more, 99 bottles of beer on the wall.");
}
}


    