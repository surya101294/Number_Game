import React, { useEffect, useLayoutEffect, useState } from 'react'

const ConceptCheck = () => {

    const [profile,setProfile]= useState({
        developer:"",
        skills:{
            id:1,
            name:""
        }
    })
    // setProfile(()=>({   //not work-> id will be empty
    //     developer:"",
    //     skills:{
    //         id:"",
    //         name:"react"
    //     }
    // }))
    // setProfile((prevProfile)=>({   //correct method
    //     ...prevProfile,
    //     skills:{...prevProfile.skills, name:"react"  }
    // }));
    // setProfile((prevProfile)=>({    //not work=> id will be removed
    //     ...prevProfile, 
    //     skills:{
    //         name:"React"
    //     }
    // }))
    console.log(profile);
    useEffect(()=>{
        console.log("useeffect");
      },[])
    // useEffect(()=>{
    //     console.log("useeffect 1");
    //   })
    //   useLayoutEffect(()=>{
    //     console.log("useLayout effect 1");
    //   })
    //   useLayoutEffect(()=>{
    //     console.log("useLayout effect 2");
    //   })
    //   useEffect(()=>{
    //     console.log("useeffect 2");
    //   })
      console.log("rendering..");

      /* Ways of creating the function 
  const double=x=> x*2
// const double=function(x){return x*2}
}
console.log(double(2));
*/
/*
//Generator function
function * gen1(){
    console.log(yield 1);
    console.log(yield 2);
    console.log(yield 3);
}
const iterator=gen1()
console.log(iterator.next('a').value);  //  o/p==>  1 b 2 c 3
console.log(iterator.next('b').value);
console.log(iterator.next('c').value);
*/

let sparsearray=[,1,,2,,3,,4]
let sum=0
// for(let val of sparsearray)   //o/p => NAN
// sum+=val
// for(let i=0;i<sparsearray.length;i++) //o/p => Nan
// sum+=+sparsearray[i]
// sparsearray.forEach((el)=>{   // o/p=>10
//     sum+=el
// })
// sparsearray.map((el)=>{   // o/p=>10
//     sum+=el
// })
console.log(sum);

for(var i=0;i<3;i++){
    setTimeout(function(){
        console.log("var",i);
    })
}
for(let i=0;i<3;i++){
    setTimeout(function(){
        console.log("let",i);
    })
}
let flag=true
if(!!flag) console.log("True");//same as if(flag)
if(!flag) console.log("false");

const a=0, b=""
console.log("ans", b||0);
return (
    <div>
      <h1>Conceptes..</h1>
    </div>
  )
}

export default ConceptCheck
