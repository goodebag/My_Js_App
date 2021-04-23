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
 // functions make it easy and to avoid duplicate code example
 function add(a, b)
 {
 let result = a+b;
return result
 }
 let num= 1;
 console.log('ans = '+ add(5,5));//output is 10
 //example of a  function that is not returing any value
 function sub(a, b)
 { 
// defining a global varible in a local scope or function
 newvar = a+b;

 }
 //num += 
 sub(5,5);
 console.log(newvar);

 
 // boolean in js and if statements
 function checks(trueOrFalse)
 {
     if(trueOrFalse){
         return "yes it's true";
     }
     return "No it's false"
 }
   
 console.log(checks(true))
 console.log(checks(false))
 // comparison operators 
 //     equals 
 function equal(val) 
 {
     if(val == 12){ // note this type of  equal sign do conversion b4 checking if needed to ensure accurate  e.g if(3 =='3')  ans = true
         return "equal";
     }
     return "Not equal"
 }
 // strict equal  
 function equal2(val) 
 {
     if(val === 12){ // note this type of  equal sign do strict check e.g if(3 =='3')   ans = false
         return "equal";
     }
     return "Not equal";
 }
 console.log(equal('12'))
 console.log(equal2('12'))
 //  inequality and strict inequality
 function notequal(val) 
 {
     if(val != 12){ // note this type of  equal sign do conversion b4 checking if needed to ensure accurate  e.g if(3 !='3')  ans =                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
         return "true";
     }
     return "false"
 } 
 // switch statments
 function checkword(checkItem)
 {
    let ans= '';
     switch(checkItem)
     { 
         case 'chinaza': ans = "chinaza"; break;
         case 'Goodebag': ans = 'Goodebag'; break;
         default : ans = 'Egbule C Goodluck'; break;

     }
     return ans;
 }
 console.log(checkword('smart'));
// switch multiple cases to one thing statments
function checkwordX2(checkItem)
{
   let ans= '';
    switch(checkItem)
    { 
        case 'chinaza':
        case 'Goodebag': ans = 'Goodebag'; break;
        default : ans = 'Egbule C Goodluck'; break;

    }
    return ans;
}
console.log(checkwordX2('chinaza')); 

// declaring and accessing an object in js
let myDog =
{
Dname :'bully',
legs: 'four',
colour: 'black',
"it's  behavior": 'aggrasive'
};
//adding new property to an object  using Dot
myDog.Back = "boow boow";
myDog['meal'] = 'fish';
// deleting a property from an object
delete myDog["it's  behavior"];
delete myDog.meal;
console.log(myDog["Dname"]);// accessing an object porperty with [] bracket

console.log(myDog.colour);// accessing an object porperty with dot .notation
console.log(myDog["it's  behavior"]);// [] is the only way to access this kind of property
console.log(myDog);

// using object as a lookup instead of if or case statment 

function checkwordX3(checkItem)
{
    ans={
    chinaza:'chichi',
    Goodebag:'goodebag1',
    ' ':'please provide a name'
   };
   
    return ans[checkItem];
}
console.log(checkwordX3('chinaza'));
// check if object has a property
function chedckObj(prop)
{
    // wrapping it with an if statment is good practice
    if(ans.hasOwnProperty(prop))
    {
        return ans[prop];
    }
    else{ return 'not Found'}
}
console.log(chedckObj('chinaza')) 
// Accessing object inside another object
let storage = 
{ 'car':
            {'inside':
                        { 'glove box': "maps",
                        'passinger seat':'crumbs'
                        },

                'Outside':
                {
                    'trunk':'jack'
                }
            }

}
var mystore = storage.car.inside["glove box"];
console.log(mystore);
// collection, working with nested objects
let collection  =
{
   '2548':{ album : "The prince i become",
            artist:"Ric Hassani",
            tracks:['thunder fire u',
                'dont give up'] 
   },
   '2468':{ album : "1999",
            artist:"chike",
            tracks:['1999',
                'dance shoes'] 
   },
   '2466':{ album : "one call",
   artist:"chi",
   tracks:[] 
}
};
var Ccopy = JSON.parse(JSON.stringify(collection));

function updateRec(id,prop,value)
{
    if(value=== ""){
    delete Ccopy[id][prop];
    }
    else if(prop === 'tracks')
    {

        Ccopy[id][prop] = Ccopy[id][prop] || [];
        Ccopy[id][prop].push(value);
    }
    else
    {
        Ccopy[id][prop]= value;
    }
    return Ccopy;
}
console.log( updateRec(2468,'artist','Goodluck'))
console.log( updateRec(2466,'tracks','one more night'))
// loop in js
 // while loops
 let arr  = []
 let Arr  = []
 let i = 0;
 while(i<5){
arr.push(i);
i++;
 };
 console.log(arr);
 // for loop
for (let i = 0; i <5; i++){
    Arr.push(i+1);
}
console.log(Arr);
//  generate random decimal number(fractions)
function RandomFraction()
{
     return Math.random();
}
console.log(RandomFraction());
// generate random number
function RandomWhole()
{
     return Math.floor(Math.random() *  50)// append max number
}
console.log(RandomWhole());