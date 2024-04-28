import React from 'react';
import './team.scss';
import SukantaRoy from '../assets/dr_sukanta_roy.png';
import AshishSingh from '../assets/dr_ashish_singh.png';
import Zela from '../assets/dr_zela.png';
import Puia from '../assets/dr_puia.png';
import Vijay from '../assets/dr_vijay.png';
import Ramesh from '../assets/dr_ramesh.png';
import Amit from '../assets/dr_amit.png';

import Nishant from '../assets/nishant_nitin_mishra.png';
import Mukul from '../assets/mukul_pathak.png'
import Avishek from '../assets/avishek_gope.png'
import Ayush from '../assets/ayush_raj.png'
import Nihal from '../assets/nihal_kumar.png'
import Chanikya from '../assets/chanikya.png'

import Shashvat from '../assets/sashvat_rane.png'
import Sanskar from '../assets/sanskar_sharma.png'
import Prakash from '../assets/prakash_jha.png'
import Krishna from '../assets/krishna_raj.png'
import Krishan from '../assets/krishan_kumar.png'

import Rahul from '../assets/rahul_prajapati.png'
import Siddharth from '../assets/siddharth_bhatt.png'
import Sanjeevani from '../assets/sanjeevani_joshi.png'
import Girish from '../assets/girish_chawda.png'
import Vikash from '../assets/vikash_kumar.png'

const Team = () => {
    // Array containing information for each team member
    const teamMembers = [
        { name: "Dr. Sukanta Roy", position: "Faculty In-charge (FIC), Training and Placement Office <br> Chairman, Training and Placement Committee", phone: "+91-9035385841", email: "sukanta.me@nitmz.ac.in / tnp@nitmz.ac.in", image: SukantaRoy },
        { name: "Dr. Ashish Singh Patel", position: "FIC, Alumni", phone: "+91-8839341501", email: "", image: AshishSingh },
        { name: "Dr. Amit Yadav", position: "TPO, CE", phone: "+91-9755007773", email: "", image: Amit },
        { name: "Dr. Lalhruaizela", position: "TPO, CSE", phone: "+91-9487678402", email: "", image: Zela },
        { name: "Dr. K. Vanlalawmpuia", position: "TPO, ECE", phone: "+91-9774912755", email: "", image: Puia },
        { name: "Dr. Ramesh Kumar", position: "TPO, EEE", phone: "+91-8822097049", email: "", image: Ramesh },
        { name: "Dr. Vijay Mandal", position: "TPO, ME", phone: "+91-9661164031", email: "", image: Vijay },
    ];

    const studentCoordinators = [
        { name: "Nitin Mishra", position: "Team Lead, Coordinator", phone: "+91-8271367165",image: Nishant },
        { name: "Mukul Pathak", position: "Coordinator, CE", phone: "Coordinator, CE",image: Mukul },
        { name: "Abhishek", position: "Coordinator, CSE", phone: "+91-9264270247",image: Avishek },
        { name: "Ayush Raj", position: "Coordinator, ECE", phone: "+91-7254905694",image: Ayush },
        { name: "Nihal Kumar", position: "Coordinator, EEE", phone: "+91-7379082567",image: Nihal },
        { name: "Palli Chanikya", position: "Coordinator, ME", phone: "+91-8520934874",image: Chanikya },
    ]

    const executiveMembers = [
        { name: "Krishan kumar", position: "4th Year, CE", phone: "+91-9035385841",image: Krishan },
        { name: "Shashvat Rane", position: "4th Year, CSE", phone: "+91-8839341501",image: Shashvat },
        { name: "Sanskar Sharma", position: "4th Year, ECE", phone: "+91-9487678402", image: Sanskar },
        { name: "Krishna Raj vatsh", position: "4th Year,EEE", phone: "+91-9774912755",image: Krishna },
        { name: "Prakash Jha", position: "4th Year, ME", phone: "+91-9661164031",image: Prakash },
    ]

    const associateMembers = [
        { name: "Rahul Kumar Prajapati", position: "3rd Year, CE", phone: "+91-6009926880",image: Rahul },
        { name: "Siddharth Bhatt", position: "3rd Year, CSE", phone: "+91-8104399697",image: Siddharth },
        { name: "Sanjeevni Joshi", position: "3rd Year, ECE", phone: "+91- 8414069740",image: Sanjeevani },
        { name: "Girish Chawda", position: "3rd Year, EE", phone: "+91-6260882502", image: Girish },
        { name: "Vikash Kumar", position: "3rd Year, ME", phone: "+91-9508279514", image: Vikash },
    ]

    return (
        <div className='team-container'>
            <h2 className='team-container-title'>OUR TEAM</h2>
            <h4 className='team-container-sub-title'>HEAD'S</h4>
            <div className='team-card-container'>
                {/* Mapping over the teamMembers array to generate card elements */}
                {teamMembers.map((member, index) => (
                    <div className='team-card' key={index} style={{ backgroundImage: `url(${member.image})` }}>
                        <div className='team-card-bottom'>
                            <div>{member.name}</div>
                        </div>
                        <div className="team-card-bottom-on-hover">
                            <div>{member.name}</div>
                            <div dangerouslySetInnerHTML={{ __html: `${member.position}` }}></div>
                            <div>Phone: {member.phone}</div>
                            <div>Email: {member.email}</div>
                        </div>
                    </div>
                ))}
            </div>
            <h4 className='team-container-sub-title'>CORE TEAM STUDENT COORDINATORS</h4>
            <div className='team-card-container'>
                {/* Mapping over the teamMembers array to generate card elements */}
                {studentCoordinators.map((coordinator, index) => (
                    <div className='team-card' key={index} style={{ backgroundImage: `url(${coordinator.image})` }}>
                        <div className='team-card-bottom'>
                            <div>{coordinator.name}</div>
                        </div>
                        <div className="team-card-bottom-on-hover">
                            <div>{coordinator.name}</div>
                            <div dangerouslySetInnerHTML={{ __html: `${coordinator.position}` }}></div>
                            <div>Phone: {coordinator.phone}</div>
                        </div>
                    </div>
                ))}
            </div>
            <h4 className='team-container-sub-title'>EXECUTIVE MEMBERS</h4>
            <div className='team-card-container'>
                {/* Mapping over the teamMembers array to generate card elements */}
                {executiveMembers.map((executive, index) => (
                    <div className='team-card' key={index} style={{ backgroundImage: `url(${executive.image})` }}>
                        <div className='team-card-bottom'>
                            <div>{executive.name}</div>
                        </div>
                        <div className="team-card-bottom-on-hover">
                            <div>{executive.name}</div>
                            <div dangerouslySetInnerHTML={{ __html: `${executive.position}` }}></div>
                            <div>Phone: {executive.phone}</div>
                        </div>
                    </div>
                ))}
            </div>

            <h4 className='team-container-sub-title'>ASSOCIATE MEMBERS</h4>
            <div className='team-card-container'>
                {/* Mapping over the teamMembers array to generate card elements */}
                {associateMembers.map((associate, index) => (
                    <div className='team-card' key={index} style={{ backgroundImage: `url(${associate.image})` }}>
                        <div className='team-card-bottom'>
                            <div>{associate.name}</div>
                        </div>
                        <div className="team-card-bottom-on-hover">
                            <div>{associate.name}</div>
                            <div dangerouslySetInnerHTML={{ __html: `${associate.position}` }}></div>
                            <div>Phone: {associate.phone}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
