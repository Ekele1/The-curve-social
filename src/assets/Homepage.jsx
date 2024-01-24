import { useState } from 'react'
import './homepage.css'
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const HomePage=()=>{
    const navigate = useNavigate()
    const [post, setPost] = useState("")
    const [mssg, setMssg] = useState("")
    const [like, setLike] = useState(false)
    const [likeCount, setLikeCount] = useState(0)
    const [comment, setComment2] = useState("")
    const [color, setColor] = useState()

    const onlineUsers = JSON.parse(localStorage.getItem("loginData"))
    const posterName = onlineUsers.name

    const handlePost=()=>{
        setMssg(post)

        const postData = {
            posterName,
            post,
            likeCount,
            comment,


        }
        const oldData = JSON.parse(localStorage.getItem("allposts")) || [];
        const newData = [...oldData, postData]
        localStorage.setItem("allposts", JSON.stringify(newData))
    }

    const getPost = JSON.parse(localStorage.getItem("allposts"))
    console.log(getPost)
    const handleLikes=(index)=>{
    
       setColor(index)
       setCount(likeCount +1)
       localStorage.setItem("number", JSON.stringify(likeCount))
    }
    const handleLikes2=(index)=>{
       setColor(index)
       setLike(!like    )

    }

    const handleLogout=()=>{
        localStorage.removeItem("loginData")
        navigate("/")
    }
    return(
        <div className='wrapper'>
            <h1>welcome <span className='username'>{onlineUsers.name}</span></h1>
            <p>what do you have in mind?</p>
            <button className='butt butt22' onClick={handleLogout}>logout</button>
            <div className='postbox'>
                <input type="text" id='textbox' value={post} onChange={(e)=> setPost(e.target.value)}/>
                <button className='butt' onClick={handlePost}>post</button>
            </div>

            <div className='allposts'>
                <h3 style={{marginBottom: "30px"}}>what's your thought on this</h3>
                {
                    
                        getPost?.map((e, index)=>(
                            <div>
                            <p style={{color: "blue",}}>{e.posterName} <span style={{color: "black"}}>said</span></p>
                            <p style={{width: "50px"}}>{e.post}</p>
                            <div>
                                {
                                    color === index || like ?<IoMdHeart style={{color: "red"}} onClick={()=>handleLikes2(index)}/>:<IoMdHeartEmpty onClick={()=>handleLikes2(index)}/>
                                }
                            <p>likes {likeCount}</p>
                            </div>
                        </div>
                        ))
                    
                }
            </div>
        </div>
    )
}

export default HomePage