import React from 'react';
 import {useState,useEffect} from "react"

function Users(props) {
   const [search, setSearch] = useState(""); 
  const [state,setState]=useState([])

   //const [pegi,setPegi]=useState(1)
   // const GetData=()=>{
   //   fetch(`https://jsonplaceholder.typicode.com/comments?_page=${pegi}&_limit=10`)
   //   .then((res)=>res.json())
   //   .then((data)=>{
   //    // console.log(data);
   //    setState(data)
   //   })
   // }

   useEffect(()=>{
    const handlechange=setTimeout(()=>{
      fetch(`https://jsonplaceholder.typicode.com/comments?q=${search}`)
      .then((res)=>res.json())
      .then((data)=>{
        setState(data)
      })

   },2000)
   return ()=>clearTimeout(handlechange)
},[search])
  

   //  const Pre=()=>{
   //    setPegi((pre)=>pre-1)
   //    // GetData()
   //  }
   // const Next=()=>{
   //  setPegi((pre)=>pre+1)
   // //  GetData()
   // }
   // closure
   // const add = (function () {
   //    let counter = 0;
      
   //    return function () {counter += 1; return counter}
      
   //  })();
    
   //  add();
   //  add();
   //  add();
   
    const add =(function(){
      let counter =0;
      return function(){counter+=1;return counter}
    })();
    
    add()
    add()
    add()
    console.log(add())

    var promise = new Promise(function(resolve, reject) {
      const x = "geeksforgeeks";
      const y = "geeksforgeeks"
     
      if(x>y) {
         resolve();
       
      }else{
        reject();
      }

       });
        console.log("Pending")
      promise.then(function () {
        
          console.log(promise); 
        }).
        catch(function () {
          console.log('Some error has occurred');
        });





        // callBack Function

        function myDisplayer(some) {
         var newsum=30+some;
         console.log(newsum)
        }
        
        function myCalculator(num1, num2) {
          var sum = num1 + num2;
          console.log(sum)
           return sum;
        }
        
        myDisplayer(myCalculator(5,20))
        // here myDisplayer is a callBack functon
        // closuer function
        function outerFunction() {
          var message = 'Hello';
        
          function innerFunction() {
            console.log(message);
          }
        
          return innerFunction;
        }
        
        const inner = outerFunction();
        inner(); // logs 'Hello'


        // currying
        // A regular function that takes two arguments
function add(x, y) {
  return x + y;
}

// const arr = [2, 4, 5, 2, 4, 5, 6, 7, 7];
// const count = {};

// for (let i = 0; i < arr.length; i++) {
//   const num = arr[i];
   
//   if (count[num]) {
//     count[num] += 1;
//     console.log(count[num])
//   } else {
//     count[num] = 1;
//     console.log(count[num])
//   }
// }
// Object.keys(count).forEach(num => {
//   console.log(num + " repeats " + count[num] + " times");
// });

// A curried function that takes one argument at a time
function curriedAdd(x) {
  return function(y) {
    return x + y;
  }
}

// We can call the curried function like this
const addTwo = curriedAdd(2); // returns a new function that takes one argument
console.log(addTwo(3)); // output: 5
console.log(addTwo(5)); // output: 7

const compose = (f, g) => x => f(g(x));
const addOne = y => y + 3;
const double = u => u * 2;
// console.log()
const addOneThenDouble = compose(addOne, double);
console.log(addOneThenDouble(4));

      
//  const url='https://jsonplaceholder.typicode.com'

//         async function beautifulFunctionName(url) {
//           let response = await fetch(url);
//           console.log(response);
//           return response;
//           }
//           console.log(beautifulFunctionName(url))



    //  fetch(`https://jsonplaceholder.typicode.com/comments?_limit=20`)
    
     //   console.log(state)
    return (
        <div>
            <h1>Welcome Users page</h1> 
            <input  placeholder='text....here'  onChange={(event) => setSearch(event.target.value)}/>
              <button >GetData</button>
             {state.map((el,i)=>{
               return(
                  <p key={i}>
                   {el.email}
                  </p>
               )
             })}
               
        </div>
    );
}

export default Users;