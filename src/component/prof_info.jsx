import '../style/base.css'
import { Link } from "react-router-dom"

export default function Prof({companyn, setcompanyn, postit, setpostit, res, setres, startdate, setstartdate, enddate, setenddate}){
    const allFilled = 
    (companyn?? '').trim()!=='' &&
    (postit?? '').trim() !=='' &&
    (res ??'').trim() !=='' &&
    (startdate??'').trim() !=='' &&
    (enddate?? '').trim() !== ''
    return(
        <>
        <h1 style={{color:"wheat",maxWidth:"400px",margin:"2rem auto", fontSize:"40px",paddingTop:"10px"}}>Generate Your CV</h1>
        <div className="form-container" onSubmit={(e)=>e.preventDefault()}>
            <h3>Practical Experience:</h3>
            <span>Company Name: </span>
            <input type="text" placeholder="Enter company name" value={companyn} onChange={(e)=>setcompanyn(e.target.value)} />
            
            <span>Position Title: </span>
            <input type="text" placeholder="Enter position title" value={postit} onChange={(e)=>setpostit(e.target.value)} />
            
            <span>Responsibilities: </span>
            <textarea placeholder="Describe your main responsibilities..." value={res} onChange={(e)=>setres(e.target.value)} />
            
            <span>Date of starting work: </span>
            <input type="date" value={startdate} onChange={(e)=>setstartdate(e.target.value)} />
            
            <span>Date until worked: </span>
            <input type="date" value={enddate} onChange={(e)=>setenddate(e.target.value)} />
            
            <Link to='/resl'
            onClick={(e)=>{if(!allFilled) e.preventDefault()}}
            className={allFilled ? "next-link" : "next-link disabled"}
          aria-disabled={!allFilled}
          tabIndex={allFilled ? 0 : -1}
            >Submit</Link>
        </div>
        </>
    )
}