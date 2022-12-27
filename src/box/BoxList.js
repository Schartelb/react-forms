import React, { useState } from "react";
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import { v4 as uuid } from "uuid";

const BoxList = () => {
    const addBox = box => {
        let newbox = { ...box, id: uuid() };
        setBoxList(boxes => [...boxes, newbox]);
    }
    const deleteBox = (backgroundColor, height, width) => {
        setBoxList(boxList.filter(box =>
            box.height!==height && box.backgroundColor!==backgroundColor && box.width!==width
        ))
         }
    const INITIALBOX = [{
        width: 100,
        height: 100,
        backgroundColor: "gray"
    }]
    const [boxList, setBoxList] = useState(INITIALBOX)

    const renderBoxes = () => {
        return (
            <>
                {boxList.map(box => (
                    <Box
                        height={box.height}
                        width={box.width}
                        backgroundColor={box.backgroundColor}
                        deleteBox={deleteBox}
                    />
                ))}
            </> 
        )
    }
    return (
        <>
            <NewBoxForm
                addBox={addBox}
            />
            {renderBoxes()}
        </>
    )
}

export default BoxList;