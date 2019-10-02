import React from "react"
import "./css/wrapper.css"


const Wrapper = (props)=>{

    return (
        <div className="wrapper">
            {props.children}
        </div>
    )
}
export default Wrapper

// const Wrapper = (props)=>{
//     return (
//         <div {...props} className="wrapper">
//
//         </div>
//     )
// }
// export default Wrapper
