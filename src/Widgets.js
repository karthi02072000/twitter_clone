import React from 'react'
import "./Widgets.css";
import SearchIcon from '@material-ui/icons/Search';
import{
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed}
    from "react-twitter-embed";


function Widgets() {
    return (
        <div lclassName="widgets">
            <div className="widgets__input">
                <h2>Widgets</h2>
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="search twitter" type="text" />

            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId="858551177860055040" />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="cleverqazi"
                    options={{ height: 400 }}
                    />

                <TwitterShareButton
                   url={"https:://facebook.com/cleverprogrammer"}
                   options={{text:"#reactjs is awesome", via: "@cleverquaz"}}
                   />
            </div>
        </div>
    )
}

export default Widgets