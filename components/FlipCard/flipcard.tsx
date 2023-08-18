'use client'
import { useState } from 'react';
import './flipcard.scss'
import cn from 'classnames'

export default function FlipCard({ title, content, content2, classname }: {title: string, content:string, content2?:string, classname?: string}) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() { 
      setShowBack(!showBack);
  } 

  function handleHover() {
    if (!showBack) {
      setShowBack(!showBack)
    }
  }

    return (
        <div className={"flip-card-outer text-center text-lg lg:text-xl items-center justify-center"+" "+classname} onClick={handleClick} onMouseEnter={handleHover}>
          <div className={cn("flip-card-inner", {showBack})}>
              <div className="flex card front justify-center items-center">
                <div className="p-4">
                  <p><b>{title}</b></p>
                </div>
              </div>
              <div className="flex card back justify-center items-center">
                <div className="card-body d-flex justify-content-center align-items-center p-4">
                  <p><b>{title}</b></p>
                  <br/>
                  <p className='text-sm lg:text-md'>{content}<br/><br/>{content2}</p>
                </div>
              </div>
            </div>
        </div>
      )
}