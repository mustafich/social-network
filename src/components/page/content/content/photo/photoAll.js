import React, {Fragment} from "react"
import "./css/photoA.css"
import { useState } from 'react';


export default class PhotoAll extends React.Component{
    state = {
        lookPopUpImg: "",
        addImgValue:""

    }
    render() {

    let {addPhotoAll,deletePhotoAll} = this.props.dispatch
    let deletePhoto = (idPhoto)=>{
        deletePhotoAll(this.props.user.id,idPhoto)
    }
    let lookPhoto = (img)=>{

        this.setState({
            lookPopUpImg: img,
        })
            let popUpp = document.querySelector(".photoAll-look")
            popUpp.style.display = "flex"
    }

    let photoAll = this.props.user.photoAll.map((img,index) => {

        return (
            <div key={index} className="photoAll-block_box">
                <div onClick={()=>{lookPhoto(img)}} className="photoAll-block_box__look">
                    <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                </div>
                <div onClick={()=>{deletePhoto(index)}} className="photoAll-block_box__delete">
                    <i className="fa fa-minus-square-o" aria-hidden="true"></i>
                </div>
                <img src={img} alt=""/>
            </div>
        )
    })

        let addPhotoValueChange =(e)=>{

        this.setState({
            addImgValue:e.target.value
        })
        }
    let addPhotoAllClick=()=>{
        addPhotoAll(this.props.user.id,this.state.addImgValue)
    }
        return (
        <Fragment>
            <div className="photoAll">
                <h2>Фотографии</h2>
                <div className="photoAll-block">
                    {photoAll}
                    <p onClick={() => {
                        let popUp = document.querySelector(".photoAll-add")
                        popUp.style.display = "flex"
                    }}>+</p>
                </div>
            </div>
            <div className="photoAll-look">
                <div className="photoAll-look_box">
                    <div className="photoAll-look_box__photo">
                        <img src={this.state.lookPopUpImg} alt=""/>
                    </div>
                    <div onClick={()=>{
                        let popUp = document.querySelector(".photoAll-look")
                        popUp.style.display = "none"
                    }} className="photoAll-add_box__close"><i className="fa fa-times-circle" aria-hidden="true"></i></div>
                </div>
            </div>
            {/*popup*/}
            <div className="photoAll-add">
                <div className="photoAll-add_box">
                    <p>Вставте картинку</p>
                    <input onChange={(e)=>{addPhotoValueChange(e)}} type="text"/>
                    <button onClick={()=>{addPhotoAllClick()}}>Добавить картинку</button>
                    <div onClick={()=>{
                        let popUp = document.querySelector(".photoAll-add")
                        popUp.style.display = "none"
                    }} className="photoAll-add_box__close"><i className="fa fa-times-circle" aria-hidden="true"></i></div>
                </div>
            </div>
        </Fragment>
    )

    }
}

