import React from 'react'

export default function Footer() {
    const myStle={
        left:0,
        right:0,
        padding:"7px",
        backgroundColor:"black",
        color:"white",
        bottom:0,
        position:"fixed",
        textAlign:"center",
        borderTop:"2px solid red"
    }
  return (
<>
<footer style={myStle}>
    <strong>Powered & Developed By SK Technologies</strong>
</footer>
</>
  )
}
