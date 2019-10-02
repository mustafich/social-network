import React from "react"
import "./css/settings.css"

const Settings = ({state,user,dispatch}) => {
    let onChangeUser = (text,numberArray) =>{

        let obgName = document.querySelectorAll("input")[numberArray].value
        dispatch(obgName,user.id,text)
    }

    return (
        <div>
            <h2>Редактация страницы</h2>
            <div className="settings">
                <div className="settings-block">
                    <div className="settings-block_left">
                        <div className="settings-block_left__photo">
                            <img src={user.photo} alt=""/>
                            <div className="settings-block_left__photo___box">
                                <p>Вставьте url картинки:</p>
                                <input type="text" onChange={()=>onChangeUser("photo",0)}   value={user.photo}/>
                            </div>

                        </div>
                    </div>
                    <div className="settings-block_right">
                        <div className="settings-block_right__box">
                            <p>ИМЯ:</p>
                            <input type="text" onChange={()=>onChangeUser("name",1)} value={user.name}/>
                        </div>
                        <div className="settings-block_right__box">
                            <p>ФАМИЛИЯ:</p>
                            <input type="text" onChange={()=>onChangeUser("family",2)}  value={user.family}/>
                        </div>
                        <div className="settings-block_right__box">
                            <p>СТАТУС:</p>
                            <input type="text" onChange={()=>onChangeUser("status",3)}  value={user.status}/>
                        </div>
                        <div className="settings-block_right__box">
                            <p>ДАТА:</p>
                            <input type="text" onChange={()=>onChangeUser("data",4)}  value={user.data}/>
                        </div>
                        <div className="settings-block_right__box">
                            <p>СТРАНА:</p>
                            <input type="text" onChange={()=>onChangeUser("from",5)}  value={user.from}/>
                        </div>
                        <div className="settings-block_right__box">
                            <p>ГОРОД:</p>
                            <input type="text" onChange={()=>onChangeUser("city",6)}  value={user.city}/>
                        </div>
                        {/*<div className="settings-block_right__box">*/}
                            {/*<p>ЦВЕТ ФОНА:</p>*/}
                            {/*<input type="text" value={user.color}/>*/}
                        {/*</div>*/}
                    </div>

                </div>
                {/*<button>Изменить</button>*/}
            </div>
        </div>
    )
}
export default Settings