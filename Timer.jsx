/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {useState,useEffect} from 'react';

export const Timer = ({start,stop}) => {
    const [timer,setTimer] = useState(+start)

    useEffect(() =>{
        let id = setInterval(() =>{
            setTimer((prev)=>{
                if(prev === +stop){
                    return clearInterval(id)
                }
                else return prev+1
            })
        },1000)
        return ()=>{
            console.log('cleanup is working')
            clearInterval(id)
        }
    },[])
  return (
      <>
        <h1>Timer : {timer}</h1>
      </>
  )
}
