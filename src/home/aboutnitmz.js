import React from 'react';
import './aboutnitmz.scss';
import Nitmz from '../assets/nit_mz.jpg'
import Nitmz2 from '../assets/nit_mz_2.jpg'

const AboutNitmz = () => {


    return (
        <div className='about-insti-page-container'>
            <div className="v-shape"></div>
            <h2 className='about-insti-title'>NIT MIZORAM</h2>
            <h4 className=''>(An Institution of National Importance under the Ministry of Education, Govt. of India)</h4>
            <div className='insti-details-container'>
                <div className='about-nit-mz-text'>The Ministry of Education (Shiksha Mantralaya), Govt. of India vide its order no. F. 23-13-2009-TS-III Dated 30th of Oct. 2009 and 3rd March 2010, had decided to set up ten new NITs. In view of the above NIT Mizoram was started in the year 2010 in the state of Mizoram with an objective to impart education, research & training leading to B.Tech, M.Tech & PhD. degrees. This institute has been declared as an Institute of National Importance by an Act of Parliament. Here the students are admitted through All India Entrance Exam- Joint Entrance Exam (JEE Main).

                    NIT Mizoram is an Institute situated in the scenic beauty of Mizoram, wrapped between clouds and mountain rocks, which adds to its beauty. Being amongst the most educated states of our country with a literacy rate of 91%, it beholds a very peaceful and calm environment suitable for studies. The Institute, to cope with the present competitive needs, comprises of laboratories with the latest equipments and installed with best & latest softwares.</div>
                <div className='insti-details-right-container'>
                    <img className='nitmz-pic-2' src={Nitmz2} alt="" />
                    <img className='nitmz-pic-1' src={Nitmz} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutNitmz;