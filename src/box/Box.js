import React from "react";

const Box = ({ height, width, backgroundColor, deleteBox }) => {
    return (
        <div style={{
            height: height + "px",
            width: width + "px",
            backgroundColor: backgroundColor
        }}>
            <button onClick={()=>deleteBox(backgroundColor, height, width)} >X</button>
        </div>
    )
}
export default Box