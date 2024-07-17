const mongoose =require("mongoose");


let url="https://localhost:8080/users";

// mongoose.connect('mongodb://localhost:27017/test');

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
     age: Number,
})

const User = mongoose.model("User",userSchema);
// const Employee= mongoose.model("Employee",userSchema);

const user1= new User({
 name:"Adam",
 email: "adam@25gmail.com",
 age: 30,


});

// const user2= new User({
//   name:"eve",
//   email: "eve@25gmail.com",
//   age: 30,
 
 
//  });

// Finding by the id to see the result :

User.findOne({ _id :"6696a1114e3d6c864fa4d4e2"}).then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err);
});

// User.find({ age :{$gt:24}}).then((res)=>{
//   console.log(res[0].name);
// })
// .catch((err)=>{
//   console.log(err);
// });

user1.save()
.then((err)=>console.log(err))
.catch((err)=>{
  console.log(err);
});

// User.insertMany([

// {name : "jake " , email:"jakie@gmail.com", age:34},
// {name : "logan " , email:"logan@gmail.com", age:24},
// {name : "Mrbeast " , email:"jimmy@gmail.com", age:23},
// ]).then((res)=>{
//  console.log(res);
// });
