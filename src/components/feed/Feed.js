import React from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from "./inputOptions/InputOption";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputsOptions">
          <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
          <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
          <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
          <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E' />
          
        </div>
      </div>
    </div>
  );
};

export default Feed;
