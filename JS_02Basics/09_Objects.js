//singleton

// object literals
// Object.create  == it is also on of the method of making array

const mysym = Symbol("key1")
const jsuser = {
    name: "Hitesh", // here by default system processes the name like "name"
    "full name" : "Hitesh Choudry",
    [mysym]: "mykey1",
    age: 18,
    location: "jaipur",
    email:"hitexh@google.com",
    isloggedIn: false,
    lastLoggedinDays: ["Monday", "Saturday"]

}

console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser["full name"])
console.log(jsuser[mysym])

jsuser.email = "hitesh@chatgpt.com"
Object.freeze(jsuser) // by using object.freeze objects gets freeze and doesn't propagates
jsuser.email = "hitesh@microsoft.com"
console.log(jsuser);

jsuser.gretting = function(){
    console.log("Hello js user");
}
// console.log(jsuser.gretting);  // it will give the outpur undefined
// console.log(jsuser.gretting()); // it will give the output Hello js user

jsuser.grettingTwo = function(){
    console.log('Hello js user,${this.name}'); 
}
// console.log(jsuser.grettingTwo()); //output will be Hello js user, Hitesh

// more in objects ///////////////////////////////////////////////////////////////////////////////////////////////

// const tinderUser = new Object(); // it is singleton object
// const tinderUser {}

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // by this method we can find out the keys of the tinderuser
// console.log(Object.values(tinderUser));  // similarly here we can find out the values and
// console.log(Object.entries(tinderUser)); // here we can find out entries

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

// for more about javascript we should prefer to read objects mdn website 