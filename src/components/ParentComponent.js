import React, {useState} from 'react'
import Form from './Form'

const ParentComponent = () => {

    const [firstName, setFirstName] = useState("John")
    const [lastName, setLastName] = useState("Henry")
    

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }

    return (
        <Form 
            firstName={firstName}
            lastName={lastName}
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}
            setFirstName={setFirstName}
            setLastName={setLastName}
        />
    )
}

export default ParentComponent