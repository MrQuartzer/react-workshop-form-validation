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

    const [userNameColor,setUserNameColor] = useState('') 
    const [emailColor,setEmailColor] = useState('')
    const [passwordColor,setPasswordColor] = useState('')
    const [confirmPasswordColor,setConfirmPasswordColor] = useState('')

    const validateForm = (e)=>{
        e.preventDefault()

        if(userName.length>8){
            setErrorUserName('')
            setUserNameColor('green')
        }else{
            setErrorUserName('ป้อนชื่อผู้ใช้จำนวนมากกว่า 8 ตัวอักษร')
            setUserNameColor('red')
        }

        if(email.includes('@')){
            setEmail('')
            setEmailColor('green')
        }else{
            setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
            setEmailColor('red')
        }

        if(password.length>8){
            setErrorPassword('')
            setPasswordColor('green')
        }else{
            setErrorPassword('รหัสผ่านต้องมีจำนวน 8 ตัวอักษร')
            setPasswordColor('red')
        }
    }

    return(
        <div className="Container">
            <form className="Form" onSubmit={validateForm}>
                <h2>แบบฟอร์มลงทะเบียน</h2>
                <div className="Form-Control">
                    <label>ชื่อผู้ใช้</label>
                    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}></input>
                    <small style={{color:userNameColor}}>{errorUserName}</small>
                </div>
                <div className="Form-Control">
                    <label>อีเมล</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}></input>
                    <small style={{color:emailColor}}>{erroremail}</small>
                </div>
                <div className="Form-Control">
                    <label>รหัสผ่าน</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}></input>
                    <small style={{color:passwordColor}}>{errorpassword}</small>
                </div>
                <div className="Form-Control">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} style={{borderColor:confirmPasswordColor}}></input>
                    <small style={{color:confirmPasswordColor}}>{errorconfirmPassword}</small>
                </div>
                <button type="submit">ลงทะเบียน</button>
            </form>
        </div>
    )
}
export default FormComponent