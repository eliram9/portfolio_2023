import React from 'react'

const AminatedText = ({ text, className="" }) => {
    return ( 
        <div className="w-full mx-auto py-3 flex items-center justify-center text-center dark:text-light overflow-hidden sm:py-2">
            <h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light ${className}`}>
                {
                    text.split(" ").map((word, index) => 
                        <span key={word+"-"+index} className='inline-block'>
                            {word}&nbsp;
                        </span>
                    )
                }  
            </h1>
        </div>
    ) 
}

export default AminatedText  