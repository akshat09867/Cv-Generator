import { useState } from 'react'
import { Link } from "react-router-dom"
import '../style/base.css'

function Personinfo({ name, setname, gender, setgender, number, setnumber }) {
  const allFilled =
    (name ?? '').trim() !== '' &&
    (gender ?? '').trim() !== '' &&
    (number ?? '').trim() !== ''

  return (
    <>
      <h1 style={{ color: "wheat", maxWidth: "400px", margin: "2rem auto", fontSize: "40px", paddingTop: "10px" }}>
        Generate Your CV
      </h1>

      <form className="form-container" onSubmit={(e) => e.preventDefault()}>
        <h3>General Information:</h3>

        <span>Name: </span>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setname(e.target.value)} />

        <span>Gender: </span>
        <select value={gender} onChange={(e) => setgender(e.target.value)}>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <span>Phone number: </span>
        <input type="text" placeholder="Enter your number" value={number} onChange={(e) => setnumber(e.target.value)} />

        <Link
          to="/Edu"
          onClick={(e) => { if (!allFilled) e.preventDefault() }} 
          className={allFilled ? "next-link" : "next-link disabled"}
          aria-disabled={!allFilled}
          tabIndex={allFilled ? 0 : -1}
        >
          Next
        </Link>
      </form>
    </>
  )
}

export default Personinfo
