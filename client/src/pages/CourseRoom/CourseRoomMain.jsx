import React, { useState } from "react";
import document from "./assets/document.png";
import assignment from "./assets/assignment.png";
import "./styles/courseRoomMain.css";
import CourseRoomAssignments from "./components/courseRoomAssignments";
import RatingComponent from "../MentorDashboard/components/RatingComponent";
import courseCardImg from "./assets/Course app-amico.png";
import MusicPlayerCard from "./components/musicPlayerCard";
import CourseRoomDocuments from "./components/courseRoomDocuments";
import CourseRoomSchedules from "./components/courseRoomSchedules";
import CourseRoomParticipants from "./components/courseRoomParticipants";
import Schoolboy from './assets/Raise a Hand to Answer.png'
import { useSelector } from "react-redux";

export default function CourseRoomMain() {
  const user = useSelector((state) => state.wishList.user);
  const staticRating = 3;
  const [selectedItem, setSelectedItem] = useState("Assignments");
  const renderSelectedComponent = () => {
    switch (selectedItem) {
      case "Assignments":
        return <CourseRoomAssignments />;
      case "Documents":
        return <CourseRoomDocuments />;
      case "Schedules":
        return <CourseRoomSchedules />;
      case "Participants":
        return <CourseRoomParticipants/>
      default:
        return <CourseRoomAssignments />;
    }
  };

  return (
    <div className="course-room-main">
      <div className="cr-sidebar">
        <div className="cr-sidebar-user-data">
          <div className="cr-sidebar-name">
            <p>{user.userName}</p>
          </div>
          <div className="cr-sidebar-email">
            <p>{user.email}</p>
          </div>
        </div>
        <h2>Python</h2>
        <div
          className="cr-sidebar-item"
          onClick={() => setSelectedItem("Assignments")}
        >
          <div className="cr-sidebar-item-icon">
            <img className="cr-sidebar-item-img" src={assignment} />
          </div>
          <div className="cr-sidebar-item-text">
            <p>Assignments</p>
          </div>
        </div>
        <div
          className="cr-sidebar-item"
          onClick={() => setSelectedItem("Documents")}
        >
          <div className="cr-sidebar-item-icon">
            <img className="cr-sidebar-item-img" src={document} />
          </div>
          <div className="cr-sidebar-item-text">
            <p>Documents</p>
          </div>
        </div>
        <div
          className="cr-sidebar-item"
          onClick={() => setSelectedItem("Schedules")}
        >
          <div className="cr-sidebar-item-icon">
            <img className="cr-sidebar-item-img" src={assignment} />
          </div>
          <div className="cr-sidebar-item-text">
            <p>Schedules</p>
          </div>
        </div>
        <div
          className="cr-sidebar-item"
          onClick={() => setSelectedItem("Participants")}
        >
          <div className="cr-sidebar-item-icon">
            <img className="cr-sidebar-item-img" src={Schoolboy} />
          </div>
          <div className="cr-sidebar-item-text">
            <p>Participants</p>
          </div>
        </div>
      </div>
      <div className="cr-main-component">
        <div className="cr-main-top">
          <div className="cr-main-top-left">
            <div className="cr-main-top-content">
              <p className="cr-main-top-content-course">
                Google Project Management
              </p>
              <p className="cr-main-top-content-mentor">
                Mentor: Chandra Sai Teja
              </p>
              <p className="cr-main-top-content-skills">
                Skills: Html, CSS, Bootstrap, JavaScript
              </p>
              <p className="cr-main-top-content-duration">Duration: 47hrs</p>
              <RatingComponent
                className="cr-main-top-rating"
                staticRating={5 - staticRating}
              />
            </div>
            <div className="cr-main-top-image">
              <img
                className="cr-main-top-img"
                src={courseCardImg}
                alt="Course"
              />
            </div>
          </div>
          <div className="cr-main-top-middle">
            <MusicPlayerCard />
          </div>
        </div>
        <div className="cr-main-bottom">
          <div className="cr-rendering-component">
            {renderSelectedComponent()}
          </div>
          <div className="cr-mail-component">
            <p>Send Message</p>
            <hr />
            <form>
              <div className="cr-mail-subject-input">
                <label>Subject:</label>
                <input type="text" placeholder="Enter subject" />
              </div>
              <div className="cr-mail-subject-input-text-area">
                <label>Message:</label>
                <textarea type="text" placeholder="Enter your message" />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
