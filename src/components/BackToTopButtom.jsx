import React from 'react'
import React, { useEffect, useState } from 'react'
import up_scroll from '../assets/up_scroll.svg'

function BackToTopButtom  () {

    const [backToTopButtom, setBackToTopButtom] = useState(false)

    useEffect(() =>{
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                setBackToTopButtom(true)
            }else{
              setBackToTopButtom(false)
            }
        })
    },[])

    const scrollUp = () =>{
      window.scrollTo({
        top:0,
        behavior:"smooth"
      })
    }


  return (
    <div>
      {
        backToTopButtom && (
          <img src={up_scroll} alt=""  />
        )
      }
      
    </div>
  )
}

export default BackToTopButtom
