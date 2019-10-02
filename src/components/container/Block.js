import React from "react"
import "./css/block.css"

const Block = (props) => {
    return (
        <div  className="block">
            <div  className="container">
                <div {...props} className="block-layout">

                </div>
            </div>
        </div>
    )
}
export default Block