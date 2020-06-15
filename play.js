
const person = Object.create({group: 'users'});
person.name = 'MaximumImpact';
person.age = 43;

for(const key in person) {
    //console.log(key);
    console.log('Key:'+key+'--> '+person[key]);
}

//to eliminate inherited properties in JavaScript for-in use hasOwnPrperty() method
console.log('\n');
for(const key in person) {
    if(person.hasOwnProperty(key)) {
    console.log(key);
    }
}



//Understanding Callback functions in JavaScript
function greet() {
    console.log('Hello, this is greet method!');
}

function executeCallBack(myCallBack){
    console.log('This is executeCallBack()');
    myCallBack();
    console.log('executeCallBack() execution ended');
}
//console.log('Calling executeCallBack');
//executeCallBack();
console.log('\nCalling executeCallBack method with callback method');
executeCallBack(greet);

