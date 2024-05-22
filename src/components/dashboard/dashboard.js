import React from "react";
import './dashboard.css';
import Video from "../../assests/video.mp4";
const dashboard = () => {
    return (
        <video muted autostart autoPlay src={Video} type="video/mp4" />
    )
}
export default dashboard;