// let myDate=new Date()
// console.log(myDate.toString()); 
// console.log(typeof myDate); 
// let mycreatedate=new Date(2023,0,23)
// console.log(mycreatedate)
// let mytimestamp=Date.now()
// console.log(mytimestamp);
// console.log(mycreatedate.getTime());

// console.log(Math.floor(Date.now()/1000));

// let newdate=new Date()
// console.log(newdate);
// console.log(newdate.getMonth()+1);
// console.log(newdate.getDay());

// // `${newdate.getDay()} and the time `

// newdate.toLocaleString(``)

// const a=["a","b","c"];
// const b=["d","e","f"];
// // const c=a.concat(b)
// const c=[...a,...b]
// console.log(c);



// // object literal
// const mysym=Symbol("key1")
// const jsuser={
//     name:"hitesh",
//     age:18,
//     location:"jhansi",
//     email:"as@gmail.com",
//     isloggdin: false,
//     [mysym]:"mykey1",
//     lastlogindays:["monday","saturday"]
// }

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser[mysym]);

// jsuser.email="an@gmail.com"
// Object.freeze(jsuser)
// // console.log(jsuser);
// jsuser.greeting=function(){
//     console.log("hello js user");
    
// }
// console.log(jsuser.greeting);
// jsuser.greetingtwo=function() {
//     console.log(`hello js user,${this.name}`);
        
// }
// console.log(jsuser.greeting());
// console.log(jsuser.greetingTwo());

// const td={}
// td.id="123abc"
// td.name="ankit"
// td.islogin=false
// console.log(td);
// const ru={
//     email:"s@gmail.com",
//     fullname:{
//         userfullname:{
//             fname:"ankit",
//             lastname:"sahu"
//         }
//     }
// }

// // console.log(ru.fullname.userfullname.fname);
// const o1={1:"a",2:"b"}
// const o2={3:"a",4:"b"}
// // const o3={o1,o2}  
// // const o3=Object.assign({},o1,o2)
// const o3={...o1,...o2}
// console.log(o3);


// const course={
//     coursename:"js in hindi",
//     price:"999",
//     courseinstructor: "ankit"
// }
// const{courseinstructor}=course
// console.log(courseinstructor);


// {
//     "name":"ankit",
//     "coursename":"js in hindi",
//     "price":"free"

// }

