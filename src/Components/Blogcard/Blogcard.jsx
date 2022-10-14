import { Button, Typography } from "@mui/material";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
// import { deleteYoutube, getUser } from "../../actions/user";
import "./Blogcard.css";

const Blogcard = () => {

  let id=1
  let url = "https://www.google.com/search?q=lion&rlz=1C1RLNS_enIN844IN844&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjM0u2_usn6AhWME4gKHeqaDu8Q_AUoAXoECAMQAw&biw=675&bih=608&dpr=1"
  let image = "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fwallpapers%2Fanimals%2Flion&psig=AOvVaw21VYXISDyBY6MgJCbkM5V3&ust=1665071948420000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJDn8J-7yfoCFQAAAAAdAAAAABAD"
  let title = "BOSS HERE "
  let isAdmin = false
  // const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    // await dispatch(deleteYoutube(id));
    // dispatch(getUser());
    console.log("Hello")
  }
  return (
    <div className="youtubeCard">
      <a href={url} target="blank">
        <img src={image} alt="Video" />
        <Typography>{title}</Typography>
      </a>
      {isAdmin && (
        <Button
          style={{
            margin: "auto",
            display: "block",
            color: "rgba(40,40,40,0.7)",
          }}
          onClick={() => deleteHandler(id)}
        >
          <FaTrash />
        </Button>
      )}
    </div>
  )
}

export default Blogcard