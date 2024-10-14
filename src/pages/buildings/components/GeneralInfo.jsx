import React from 'react'

const GeneralInfo = ({setCurrentStep}) => {
    const buttonClickHandler = () => setCurrentStep((prevStep) => prevStep + 1)
  return (
    <div>
        <h4 className='text-[#414141] text-lg md:text-xl font-medium text-center'>General Building Information</h4>
        
        <button onClick={buttonClickHandler}>Next</button>
    </div>
  )
}

export default GeneralInfo