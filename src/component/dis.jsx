import '../style/cvgen.css' 

export default function CvGen({name, gender, number, sname, titles, datefrom, dateto, companyn, postit, res, startdate, enddate}){
    return(
        <>
        <h1 style={{color:"wheat",maxWidth:"500px",margin:"3rem auto", fontSize:"40px",paddingTop:"10px",textAlign:"center"}}>Your CV</h1>
        <div className="cv-container">
            <div className="cv-header">
                <h1>{name || "Your Name"}</h1>
                <h4>Gender: {gender || "Not specified"}</h4>
                <h6>Phone Number: {number || "Not provided"}</h6>
            </div>
            
            <div className="cv-section">
                <h2>Education</h2>
                <div className="cv-info-grid">
                    <div className="cv-info-item">
                        <h6>Student Name</h6>
                        <p>{sname || "Not provided"}</p>
                    </div>
                    <div className="cv-info-item">
                        <h6>Study Title</h6>
                        <p>{titles || "Not provided"}</p>
                    </div>
                    <div className="cv-info-item">
                        <h6>Date From</h6>
                        <p>{datefrom || "Not provided"}</p>
                    </div>
                    <div className="cv-info-item">
                        <h6>Date To</h6>
                        <p>{dateto || "Not provided"}</p>
                    </div>
                </div>
            </div>
            
            <div className="cv-section">
                <h2>Work Experience</h2>
                <div className="cv-info-grid">
                    <div className="cv-info-item">
                        <h6>Company Name</h6>
                        <p>{companyn || "Not provided"}</p>
                    </div>
                    <div className="cv-info-item">
                        <h6>Position</h6>
                        <p>{postit || "Not provided"}</p>
                    </div>
                    <div className="cv-info-item">
                        <h6>Start Date</h6>
                        <p>{startdate || "Not provided"}</p>
                    </div>
                    <div className="cv-info-item">
                        <h6>End Date</h6>
                        <p>{enddate || "Not provided"}</p>
                    </div>
                    <div className="cv-info-item cv-responsibilities">
                        <h6>Responsibilities</h6>
                        <p>{res || "Not provided"}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}