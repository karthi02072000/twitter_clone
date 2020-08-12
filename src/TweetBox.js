import React ,{useState} from 'react'
import "./TweetBox.css";
import {Avatar , Button} from "@material-ui/core";
import db from "./firebase";
function TweetBox() {
    const [tweetMessage, setTweetMessage]= useState("");
    const [tweetImage, setTweetImage]= useState("");
    const sendTweet= e =>{
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Karthikeyan',
            username: 'karthikn',
            verified: true,
            text: tweetMessage,
            image:tweetImage,
            avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQP4oCwgvmwKclHyOQDtcBS6Mt90N-QuFBVsA&usqp=CAU"

            

        })
        setTweetMessage("");
        setTweetImage("");
    };
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://images.news18.com/ibnlive/uploads/2016/04/ironman.jpg"></Avatar>
                    <input 
                    onChange={e=> setTweetMessage(e.target.value)} 
                    value={tweetMessage} 
                    placeholder="whats happening" 
                    type="text" />             
                </div>
                <input 
                value={tweetImage}
                onChange={e =>setTweetImage(e.target.value)}
                className=".tweeetBox__imageInput"
                 placeholder="enter url" /> 
                       
                <Button onClick={sendTweet} className="tweetBox_tweetButton">Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox
