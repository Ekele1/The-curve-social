import { useState } from 'react'
import './post.css'
import { useNavigate } from 'react-router-dom'

const Post=()=>{
    const navigate = useNavigate()
    const [post, setPost]= useState("")
    const [imgSrc, setImgSrc]= useState("")

    const onlineUsers = JSON.parse(localStorage.getItem("loginData"))
    const posterName = onlineUsers?.name
    const posterImage = onlineUsers?.img

    const postData = {
        post,
        posterName,
        posterImage,
        likers: [],
        likes: 0,
        imgSrc,
    }
    // console.log(post)

    const handlePost=()=>{
        const oldData = JSON.parse(localStorage.getItem("allposts")) || [];
        const newData = [...oldData, postData]
        localStorage.setItem("allposts", JSON.stringify(newData))
        navigate("/home")
    }
    const handleImage=(e)=>{
        const file = e.target.files[0]
        const url = URL.createObjectURL(file)
        if(url){
            setImgSrc(url)
        }
        console.log("img",imgSrc)
    }
    return(
        <div className='postwrapper'>
            <div className='postbody'>
                <div className='boxcontent' >
                    <div className='boxcontenttop'>what do you have in mind?</div>
                    <div className='boxcontentbottom'>
                        <div className='yoink' contentEditable="true" onInput={(e)=> setPost(e.target.textContent)}></div>
                        <div className='pixel'>
                            <p>upload image</p>
                            <input type="file" accept='imag/*' onChange={handleImage}/>
                        </div>
                    </div>
                </div>
                <div className='poster'>
                    
                    <button id='postid' onClick={handlePost}>post</button>
                </div>
            </div>
            
        </div>
    )
}

export default Post