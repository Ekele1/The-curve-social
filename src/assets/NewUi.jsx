import './newui.css'
import { IoSearchOutline, } from "react-icons/io5";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { IoMdHeart, IoMdHeartEmpty, } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
const NewUi=()=>{

    const onlineUsers = JSON.parse(localStorage.getItem("loginData"))
    const posterCred = JSON.parse(localStorage.getItem("allposts"))
    const allUsers = JSON.parse(localStorage.getItem("allmyusers"))
    const posterName = onlineUsers?.name
    return(
        <div className='instawrap'>
            <div className='instaleft'>
                <div className='lefttop'>
                    <img src="./instagram.png" alt="" />
                    <i>instagram</i>
                </div>
                <div className='leftmidle'>
                    <div className='picturexx'>
                        <div className='userprofile'>
                            <img src={onlineUsers?.img} alt="" />
                        </div>
                    </div>
                    <div className='userprofileinfo'>
                        <h1>{onlineUsers?.name}</h1>
                    </div>
                    <div className='userprofilefollow'>
                        <div className='fyp'>
                            <h1>558</h1>
                            <p>POSTS</p>
                        </div>
                        <div className='fyp'>
                            <h1>37.2k</h1>
                            <p>FOLOWERS</p>
                        </div>
                        <div className='fyp'>
                            <h1>989</h1>
                            <p>FOLOWING</p>
                        </div>
                    </div>
                </div>
                {/* <div className='leftbottom'> */}
                    {/* <div className='navbar3'>
                        <div className='obo'></div>
                        <div className='obo2'></div>
                    </div>
                    <div className='navbar3'>
                        <div className='obo'></div>
                        <div className='obo2'></div>
                    </div>
                    <div className='navbar3'>
                        <div className='obo'></div>
                        <div className='obo2'></div>
                    </div>
                    <div className='navbar3'>
                        <div className='obo'></div>
                        <div className='obo2'></div>
                    </div>
                    <div className='navbar3'>
                        <div className='obo'></div>
                        <div className='obo2'></div>
                    </div>
                    <div className='navbar3'>
                        <div className='obo'></div>
                        <div className='obo2'></div>
                    </div>
                    <div className='navbar3'>
                        <div className='obo'></div>
                        <div className='obo2'></div>
                    </div> */}
                    
                {/* </div> */}
                <div className='leftlast'></div>
            </div>
            <div className='instamidle'>
                <div className='midle1'>
                    <div className='searchink'>
                        <IoSearchOutline className='zx'/>
                        <input type="search" className='searchbutt' placeholder='Search'/>
                        <HiOutlineMicrophone className='zx'/>
                    </div>
                    <button className='newpost'>+ Create New Post</button>
                </div>
                <div className='midle2'>
                    <div className='stories'>
                        <h1>Stories</h1>
                        <h4>Watch all</h4>
                    </div>
                    <div className='storypost'>
                        <div className='storypic'>
                            <img src={allUsers[0].img} alt="" />
                        </div>
                        <div className='storypic'>
                            <img src={allUsers[1].img} alt="" />
                        </div>
                        <div className='storypic'>
                            <img src={allUsers[6].img} alt="" />
                        </div>
                        <div className='storypic'>
                            <img src={allUsers[3].img} alt="" />
                        </div>
                        <div className='storypic'>
                            <img src={allUsers[4].img} alt="" />
                        </div>
                        <div className='storypic'>
                            <img src={allUsers[5].img} alt="" />
                        </div>
                        
                    </div>
                </div>
                <div className='midle3'>
                    <div className='xxxx'>
                        <h1>Feeds</h1>
                        <button className='latest latest3'>Latest</button>
                        <button className='latest latest2'>Popular</button>
                    </div>
                </div>
                <div className='midle4'>
                    <div className='raman'>
                        <div className='jago'>
                            <div className='jagopic'>
                                <div className='picjago'>
                                  <img src="./instagram.png" alt="" />
                                </div>
                                <h3>{posterName}</h3>
                            </div>
                            
                            <div className='slash'><PiDotsThreeOutlineFill /></div>
                        </div>
                        <div className='actualimage'></div>
                        <div className='likingthings'>
                            <IoMdHeart /> <IoMdHeartEmpty />
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className='instaright'>
                <div className='right1'>
                    <IoNotificationsOutline />
                    <GiHamburgerMenu />
                </div>
                <div className='right2'>

                </div>
                <div className='right3'></div>
                <div className='right4'></div>
            </div>

        </div>
    )
}

export default NewUi