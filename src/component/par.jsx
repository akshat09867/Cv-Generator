import Personinfo from "./person_info.jsx";
import Edux from "./edu_info.jsx";
import Prof from "./prof_info.jsx";
import CvGen from "./dis.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from "react";

export default function Par(){
  const [name, setname] = useState("");
  const [gender, setgender] = useState("");
  const [number, setnumber] = useState("");

  const [sname, setsname] = useState("");
  const [titles, settitles] = useState("");
  const [datefrom, setdatefrom] = useState("");
  const [dateto, setdateto] = useState("");

  const [companyn, setcompanyn] = useState("");
  const [postit, setpostit] = useState("");
  const [res, setres] = useState("");
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");

 const allprops = {
      name, gender, number,
    sname, titles, datefrom, dateto,
    companyn, postit, res, startdate, enddate
  };

  return (
    <>
     <Router>
      <div style={{ display: "flex", gap: 24 }}>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={
              <Personinfo
                name={name} setname={setname}
                gender={gender} setgender={setgender}
                number={number} setnumber={setnumber}
              />
            } />
            <Route path="/Edu" element={
              <Edux
                sname={sname} setsname={setsname}
                titles={titles} settitles={settitles}
                datefrom={datefrom} setdatefrom={setdatefrom}
                dateto={dateto} setdateto={setdateto}
              />
            } />
            <Route path="/Prof" element={
              <Prof
                companyn={companyn} setcompanyn={setcompanyn}
                postit={postit} setpostit={setpostit}
                res={res} setres={setres}
                startdate={startdate} setstartdate={setstartdate}
                enddate={enddate} setenddate={setenddate}
              />
            } />
            <Route path="/resl" element={<CvGen {...allprops} />} />
          </Routes>
        </div>
             {/* <aside style={{ width: 320, padding: 12, borderLeft: "1px solid #ddd" }}>
          <h3>Live CV Preview</h3>
          <CvGen {...allprops} />
        </aside> */}
      </div>
    </Router>
    </>
  )
}
