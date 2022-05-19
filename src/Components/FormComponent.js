import './FormComponent.css'
import {useState} from "react"

const FormComponent = () =>{
    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const [errorUserName,setErrorUserName] = useState('')
    const [erroremail,setErrorEmail] = useState('')
    const [errorpassword,setErrorPassword] = useState('')
    const [errorconfirmPassword,setErrorConfirmPassword] = useState('รหัสผ่านไม่ตรงกัน')

    const validateForm = (e)=>{
        e.preventDefault()

        if(userName.length>8){
            setErrorUserName('')
        }else{
            setErrorUserName('ป้อนชื่อผู้ใช้จำนวนมากกว่า 8 ตัวอักษร')
        }

        if(email.includes('@')){
            setEmail('')
        }else{
            setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
        }

        if(password.length>8){
            setErrorPassword('')
        }else{
            setErrorPassword('รหัสผ่านต้องมีจำนวน 8 ตัวอักษร')
        }
    }

    return(
        <div className="Container">
            <form className="Form" onSubmit={validateForm}>
                <h2>แบบฟอร์มลงทะเบียน</h2>
                <div className="Form-Control">
                    <label>ชื่อผู้ใช้</label>
                    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
                    <small>{errorUserName}</small>
                </div>
                <div className="Form-Control">
                    <label>อีเมล</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    <small>{erroremail}</small>
                </div>
                <div className="Form-Control">
                    <label>รหัสผ่าน</label>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                    <small>{errorpassword}</small>
                </div>
                <div className="Form-Control">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="text" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></input>
                    <small>{errorconfirmPassword}</small>
                </div>
                <button type="submit">ลงทะเบียน</button>
            </form>
        </div>
    )
}
export default FormComponent