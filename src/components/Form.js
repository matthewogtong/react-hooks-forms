import React, { useState } from "react";

function Form({ firstName, lastName, handleFirstNameChange, handleLastNameChange, setFirstName, setLastName }) {
  
  const [submittedData, setSubmittedData] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = { firstName: firstName, lastName: lastName }
    const dataArray = [...submittedData, formData]
    setSubmittedData(dataArray)
    setFirstName("")
    setLastName("")
    console.log(submittedData)
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    )
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
