let x = "goodluck";
let Name = "egbule";
let username = Name+" " + x;


//primitives/value type
let person ={
 myName : 'egbule',
 age : 25,
 isApproved :false,
firstName :undefined

};
let select = "myName";
person[select] = 'Chinaza'
//  arrays
 let selectedColour =['red , blue']
 selectedColour[2] =2000;
 // function
function reply (namme1){
if('Goodebag'=== namme1['myName']){
    return 'hi'+' '+namme1['myName'];
}
else return 'hello'+' '+ namme1['myName'];
}
let qoutes = `'here is a qoute = "yeah i just did it"'`;
let qoutes2 = 'here is a qoute = "yeah i just did it"';
let qoutes3 = "here is a qoute = \"yeah i just did it\"";
console.log(qoutes3);
console.log(qoutes2);
console.log(qoutes);

// working with arrays
function worldblack(myNounOrPronoun, myAdjective, mypronoun)
{
let result = '';
result +="Don't you think that "+ myNounOrPronoun+" is a "+myAdjective+" "+mypronoun+".";
return result;
}



console.log(worldblack("Goodluck","hansome","guy"));
let firstArray =  ["chima",'mary'];
let secondArray= ['Goodluck','dozie','labi'];
let staffArray= [ firstArray,secondArray,Name];


//add data to the end of an and existing array
staffArray.push("Amara",['eliaza'])
//printing to the console
console.log( firstArray);
console.log(secondArray);
console.log(staffArray[0][1],staffArray[0][0],staffArray[1][0],staffArray[1][1],
    staffArray[1][2], staffArray[2], staffArray[3],staffArray[4][0] );

//removing the last item from an array
let result= staffArray.pop(); 
//printing to the console
console.log( result);//remove item
 
//removing the First item from an array 
var result2 = staffArray.shift();
console.log(result2); //remove item
 console.log(staffArray); //remaining
 // adding an item  an array to become the 1st element of the array
 let result3 =  result.unshift('Chichi') 
 console.log(result)
 
   