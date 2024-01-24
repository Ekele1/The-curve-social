import "./signUp.css"
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const SignUp =()=>{
    const [show, setShow]= useState(false)
    const [show2, setShow2]= useState(false)
    const [firstName, setFirstName]= useState("")
    const [lastName, setLastName]= useState("")
    const [email, setEmail]= useState("")
    const [address, setAdress]= useState("")
    const [phoneNumber, setPhoneNumber]= useState("")
    const [password, setPassword]= useState("")
    const [confirmPassword, setConfirmPassword]= useState("")
    const [error, setError]= useState({isError: false, type: "", mssg: ""})
    const [loading, setLoading]= useState(false)
    const [member, setMember] = useState(false)
    const [usher, setUsher] = useState(false)
    const [Admin, setAdmin] = useState(false)
    const [Accountant, setAccountant] = useState(false)
    const [pastor, setPastor] = useState(false)
    const [token, setToken] = useState()


     const navigate = useNavigate()

    const handleSubmitw =(e)=>{
        e.preventDefault()
        setLoading(true)
        console.log(firstName)
        if(firstName === ""){
            setError({isError: true, type: "firstname", mssg: "enter first name"})
            setLoading(false)
        }else if(firstName.trim()=== ""){
            setError({isError: true, type: "empty", mssg: "you can't leave this field empty"})
            setLoading(false)
        }else if(firstName.length > 20){
            setError({isError: true, type: "lenght", mssg: "first name should not exceed 20 characters"})
            setLoading(false)
        }else if(!lastName){
            setError({isError: true, type: "lastname", mssg: "enter last name"})
            setLoading(false)
        }else if(lastName.trim()=== ""){
            setError({isError: true, type: "empty1", mssg: "you can't leave this field empty"})
            setLoading(false)
        }else if(lastName.length > 20){
            setError({isError: true, type: "lenght1", mssg: "first name should not exceed 20 characters"})
            setLoading(false)
        }else if(!email){
            setError({isError: true, type: "email", mssg: "enter email"})
            setLoading(false)
        }else if(email.trim()=== ""){
            setError({isError: true, type: "empty2", mssg: "you can't leave this field empty"})
            setLoading(false)
        }else if(!email.includes("@",".")){
            setError({isError: true, type: "letter", mssg: "email must include a '@' and a '.'"})
            setLoading(false)
        }else if(!address){
            setError({isError: true, type: "address", mssg: "enter address"})
            setLoading(false)
        }else if(address.trim()=== ""){
            setError({isError: true, type: "empty3", mssg: "you can't leave this field empty"})
            setLoading(false)
        }else if(!phoneNumber){
            setError({isError: true, type: "phone number", mssg: "enter phone number"})
            setLoading(false)
        }else if(phoneNumber.length > 15){
            setError({isError: true, type: "lenght2", mssg: "enter phone number"})
            setLoading(false)
        }else if(!password){
            setError({isError: true, type: "password", mssg: "enter password"})
            setLoading(false)
        }else if(password.trim() === ""){
            setError({isError: true, type: "empty4", mssg: "you cant leave this field empty"})
            setLoading(false)
        }else if(!confirmPassword){
            setError({isError: true, type: "confirm password", mssg: "confirm your password"})
            setLoading(false)
        }else if(confirmPassword.trim() === ""){
            setError({isError: true, type: "empty5", mssg: "you cant leave this field empty"})
            setLoading(false)
        }else if(password !== confirmPassword){
            setError({isError: true, type: "password match", mssg: "password must match"})
            setLoading(false)
        }else{

                
            const UserData =   {
                         firstName,
                         lastName,
                         email,
                         address,
                         phoneNumber,
                         password,
                         member,
                         Admin,
                         Accountant,
                         usher,
                         pastor,
                         token,
                    }
                 
                    const oldData = JSON.parse(localStorage.getItem("churchGoers")) || [];
                    const newData = [...oldData, UserData]
                    localStorage.setItem("churchGoers", JSON.stringify(newData))
                    console.log("newdata",newData.length)
                    const userId = newData.length +1
                    setToken(userId)
                    console.log("token",token)
                    setError({isError: false, type: "", mssg: alert("account created")})
                    setLoading(false)
                    navigate("/login")
             
        }
    }
    return(
        <div className="signUpwrapper1">
            <div className="signUpwrapper">
                <div className="signUpbody">
                    <div className="signuptop">
                        <div className="toppic">
                            <h1>HillSong</h1>
                            {/* <img src="https://media.istockphoto.com/id/1341060834/photo/close-up-of-mans-hands-while-reading-the-bible-outside-sunday-readings-bible-education.webp?b=1&s=170667a&w=0&k=20&c=JctbcEji7Z6EywxF2tn8-0DwBlZi4roWuJyDXI5n9MQ=" alt="" /> */}
                        </div>
                    </div>
                    <div className="signupbottom">
                        <img src="https://media.istockphoto.com/id/1681769423/photo/praying-worship-and-holding-hands-with-people-in-bible-study-for-support-christian-and.jpg?s=612x612&w=0&k=20&c=1UAF_Q-c6Yrv2jp_YEJ75ZDKYpPG73eXllBH-pc8Mfo=" alt="" />
                    </div>
                    
                    <div className="change">
                        <h1>THE WORD OF GOD</h1>
                    </div>

                </div>
                <div className="formwrapper">
                    <div className="signup">
                        <h1>Sign Up</h1>
                    </div>
                    <div className="cred">
                        <div className="inputinfo">
                        <div className="errortype"><p>First name</p>{error.isError && error.type ==="firstname" || error.isError && error.type === "empty" ||
                         error.isError && error.type === "lenght"? <span>{error.mssg}</span>: null}</div>
                            <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                        </div>
                        <div className="inputinfo">
                            <div className="errortype"><p>Last name</p>{error.isError && error.type ==="lastname" || error.isError && error.type ==="empty1" ||
                            error.isError && error.type === "lenght1" ? <span>{error.mssg}</span>: null}</div>
                            <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                        </div>
                        <div className="inputinfo">
                        <div className="errortype"><p>Email</p>{error.isError && error.type ==="email" || error.isError && error.type == "empty2" ||
                         error.isError && error.type === "letter"? <span>{error.mssg}</span>: null}</div>
                            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="inputinfo">
                        <div className="errortype"><p>Adress</p>{error.isError && error.type ==="address" || error.isError && error.type === "empty3" ? <span>{error.mssg}</span>: null}</div>
                            <input type="text" value={address} onChange={(e)=>setAdress(e.target.value)}/>
                        </div>
                        <div className="inputinfo">
                        <div className="errortype"><p>Phone</p>{error.isError && error.type ==="phone" || error.isError && error.type === "lenght2" ? <span>{error.mssg}</span>: null}</div>
                            <input type="number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
                        </div>
                        <div className="infoo">
                            <div className="infop">
                            <div className="errortype"><p>Password</p>{error.isError && error.type ==="password" || error.isError && error.type === "empty4" ? <span>{error.mssg}</span>: null}</div>
                                <input type={show2?"text": "password"} value={password} onChange={(e)=>setPassword(e.target.value)}/>{
                                    show2?<IoMdEyeOff className="eye" onClick={()=>setShow2(!show2)}/>:<IoMdEye className="eye" onClick={()=>setShow2(!show2)}/>
                                }
                            </div>
                        </div>
                        <div className="infoo">
                            <div className="infop">
                            <div className="errortype"><p>Confirm Password</p>{error.isError && error.type ==="confirm password" || error.isError && error.type === "empty5" ||
                             error.isError && error.type === "password match"? <span>{error.mssg}</span>: null}</div>
                                <input type={show?"text": "password"} value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/> {
                                    show?<IoMdEyeOff className="eye" onClick={()=>setShow(!show)}/>:<IoMdEye className="eye" onClick={()=>setShow(!show)}/>
                                }
                            </div>
                        </div>
                        <div><p>ROLE</p></div>
                        <div className="member">
                            <div>
                                <p>member</p>
                                <input type="checkbox" onChange={()=>setMember(!member)}/>
                            </div>
                            <div>
                                <p>Usher</p>
                                <input type="checkbox" onChange={()=>setUsher(!usher)}/>
                            </div>
                            <div>
                                <p>Acountant</p>
                                <input type="checkbox" onChange={()=>setAccountant(!Accountant)}/>
                            </div>
                            <div>
                                <p>Admin</p>
                                <input type="checkbox" onChange={()=>setAdmin(!Admin)}/>
                            </div>
                            <div>
                                <p>pastor</p>
                                <input type="checkbox" onChange={()=>setPastor(!pastor)}/>
                            </div>
                            
                        </div>

                        <div className="inputinfo">
                            <button className="signbutt" onClick={handleSubmitw}>
                                {
                                    loading?"SigningUp...": "SignUp"
                                }
                            </button>
                        </div>
                        <div className="inputinfo">
                            <p>already have an account? <Link id="log" to="/login">Login</Link></p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp