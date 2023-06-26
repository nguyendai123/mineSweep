import React,{useState} from "react";
import "./Button.css";

const Button = ({arr,i,j,data,setData}) => {
  const[ display, setDisplay] =useState("");
  const handleclick = ()=>{
    setDisplay("display");
  }
  var h,k;
  const load= (i,j)=>{
    setDisplay("display1");
    console.log("check array",arr,i,j);
    var m=i,n=j;
   
      while (arr[m][n]==0 && m<=7 ){
        n=j;
        while ( arr[m][n]==0 && n<=7){
       arr[m][n]=100;
        n++;
      }
      m++;n=j;
      }  
    
   m=i;n=j
   while ( arr[m][n]==0 && m<=7){
    n=j;
    while (  arr[m][n]==0 &&  n>=1){
      if(arr[m][n]==0 ) arr[m][n]=100;
    n--;
  }
    m++;n=j;
  }  
  m=i;n=j
  while (  arr[m][n]==0 &&  m>=1 ){
    n=j;
    while (  arr[m][n]==0 &&  n>=1){
      if(arr[m][n]==0 ) arr[m][n]=100;
    
    }
    m--;n=j;
 }  
 m=i;n=j
 while (   arr[m][n]==0 &&  m>=1 ){ 
  n=j;
  while(   arr[m][n]==0 &&  n>=1){
    if(arr[m][n]==0 ) arr[m][n]=100;
  n--;
}
m--;n=j;
}  
    
    console.log("check after arr",arr);
  }
  const handleclickZero= ()=>{
    
    alert("Click");
    
    load(i,j)
   
    setData([...arr]);
  }
  return <>
  {data>0 && <div className={display } onClick={()=>handleclick()}>{data}</div>}
  {data ==0 && <div className={display } onClick={()=>handleclickZero()}>{data}</div>}
  </>
};

export default Button;
