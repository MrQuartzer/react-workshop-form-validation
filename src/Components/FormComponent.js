import './FormComponent.css'
import {useState} from "react"

const FormComponent = () =>{
    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    return(
        <div className="Container">
            <form className="Form">
                <h2>แบบฟอร์มลงทะเบียน</h2>
                <div className="Form-Control">
                    <label>ชื่อผู้ใช้</label>
                    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
                    <small>error message</small>
                </div>
                <div className="Form-Control">
                    <label>อีเมล</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    <small>error message</small>
                </div>
                <div className="Form-Control">
                    <label>รหัสผ่าน</label>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                    <small>error message</small>
                </div>
                <div className="Form-Control">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="text" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></input>
                    <small>error message</small>
                </div>
                <button type="submit">ลงทะเบียน</button>
            </form>
        </div>
    )
}
export default FormComponent