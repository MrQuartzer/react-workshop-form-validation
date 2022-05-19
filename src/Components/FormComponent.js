import './FormComponent.css'

const FormComponent = () =>{
    return(
        <div className="Container">
            <form className="Form">
                <h2>แบบฟอร์มลงทะเบียน</h2>
                <div className="Form-Control">
                    <label>ชื่อผู้ใช้</label>
                    <input type="text"></input>
                    <small>error message</small>
                </div>
                <div className="Form-Control">
                    <label>อีเมล</label>
                    <input type="text"></input>
                    <small>error message</small>
                </div>
                <div className="Form-Control">
                    <label>รหัสผ่าน</label>
                    <input type="text"></input>
                    <small>error message</small>
                </div>
                <div className="Form-Control">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="text"></input>
                    <small>error message</small>
                </div>
                <button type="submit">ลงทะเบียน</button>
            </form>
        </div>
    )
}
export default FormComponent