/* eslint-disable react/prop-types */
// import React from 'react'
import '../styles/adminCourseCard.css'
import { faStar , faUser , faBug  , faTrash , faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AdminCourseCard(props) {

  
  return (
    <div className="admin-course-card-wrapper">
      <div className="admin-course-card-img-wrapper">
        <img src={props.cardData.img} alt='card-img'/>
      </div>
      <div className="admin-course-card-details-wrapper">
        <p className='admin-course-mentor'>{props.cardData.mentor.userName}</p>
        <p className='admin-course-title'>{props.cardData.title}</p>
        <div className="admin-course-count-details">
            <div className="admin-course-stars-wrapper">
                <FontAwesomeIcon icon={faStar} color='#f7d74d' />
                <p>{props.cardData.stars}</p>
            </div>
            <p>|</p>
            <div className="admin-course-users-wrapper">
                <FontAwesomeIcon icon={faUser}/>
                <p>{props.cardData.participants.length}</p>
            </div>
            <p>|</p>
            <div className="admin-course-reports-wrapper">
                <FontAwesomeIcon icon={faBug}/>
                <p>{props.cardData.reports.length}</p>
            </div>
        </div>
        <div className="admin-course-card-buttons-wrapper">
            <button className='admin-course-delete-button'><FontAwesomeIcon icon={faTrash}/></button>
            <button className='admin-course-flag-button'><FontAwesomeIcon icon={faFlag}/></button>
        </div>
      </div>
    </div>
  )
}
