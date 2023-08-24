import React from 'react'

function Scroll() {
  return (
    <>
    <div style={{marginTop:"40px", marginBottom:"40px"}}>
        <h3 style={{textTransform:"capitalize",textAlign:"center"}}>Tourist places to Tamilnadu<br/>
            Here are the top places to visit in tamilnadu in 2023
        </h3>
        <h3 id={data.url}>{data.heading}</h3>
    </div>
    </>
    
  )
}

export default Scroll