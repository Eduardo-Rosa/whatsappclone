import React from 'react';
import './ChatListItem.css';

export default({onClick}) => {
    return (
        <div 
        className="chatListItem"
        onClick={onClick}>
            <img className="chatListItem--avatar" src="https://www.w3schools.com/howto/img_avatar.png" alt=""/>
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Eduardo Rosa</div>
                    <div className="chatListItem--date">18:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>loremnldfwe wetr  qwetr  qwert qerwt qret qert qerytqert sdfqwetr ?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}