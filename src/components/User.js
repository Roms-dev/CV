import React from 'react'
import "./User.css"
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function User() {
  return (
    <div className='user'>
        <img src='./images/image-cv.png' className='user__avatar'/>
        <h1 className='user__name'>BERTRAND Romain</h1>
        <p className='user__profession'>Étudiant en informatique</p>
        <div className='user__infos'>
            <p className='user__info'>
                <HomeIcon /> 80 boulevard Lafayette 63000 Clermont-ferrand
            </p>
            <p className='user__info'>
                <a href="tel : +33783232324">
                    <PhoneIcon />0783232324
                </a> 
            </p>
            <p className='user__info'>
                <a href='mailto:bromain210@gmail.com'>
                    <MailIcon />bromain210@gmail.com 
                </a>
            </p>
            <p className='user__info'>
                <EventIcon />Date de naissance : 28 février 2002
            </p>
            <p className='user__info'>
                <LocationOnIcon />Lieu de naissance : Aurillac, 15000
            </p>
        </div>
    </div>
  )
}

export default User