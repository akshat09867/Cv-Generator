import '../style/base.css'
import { Link } from "react-router-dom"

export default function Edux({sname, setsname, titles, settitles, datefrom, setdatefrom, dateto, setdateto}){
    const allFilled = 
    (sname?? '').trim()!=='' &&
    (titles?? '').trim() !=='' &&
    (datefrom ??'').trim() !=='' &&
    (dateto??'').trim() !==''
    return(
        <>
        <h1 style={{color:"wheat",maxWidth:"400px",margin:"2rem auto", fontSize:"40px",paddingTop:"10px"}}>Generate Your CV</h1>
        <div className="form-container" onSubmit={(e)=>e.preventDefault()}>
            <h3>Educational Experience:</h3>
            <span>Student Name: </span>
            <input type="text" placeholder="Enter student name" value={sname} onChange={(e)=>setsname(e.target.value)} />
            
            <span>Study Title: </span>
            <input type="text" placeholder="Enter study title" value={titles} onChange={(e)=>settitles(e.target.value)} />
            
            <span>From: </span>
            <input type="date" value={datefrom} onChange={(e)=>setdatefrom(e.target.value)} />
            
            <span>To: </span>
            <input type="date" value={dateto} onChange={(e)=>setdateto(e.target.value)} />
            
            <Link to='/Prof'
            onClick={(e)=>{if(!allFilled) e.preventDefault()}}
            className={allFilled ? "next-link" : "next-link disabled"}
          aria-disabled={!allFilled}
          tabIndex={allFilled ? 0 : -1}
            >Next</Link>
        </div>
        </>
    )
}