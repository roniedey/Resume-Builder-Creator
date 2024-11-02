import React, { useContext } from 'react';
import { Box, Heading, Text, Badge, Image } from '@chakra-ui/react';
import { ImLocation } from 'react-icons/im';
import { GrMail } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';
import ResumeContext from '../../Context/ResumeContext';
import './theme5.css';

const Theme5 = (props) => {
    const { themeData, componentRef } = props;
    const { name, profile, address, phone, email, skill, image } = themeData.personalData;
    const { projectTitles, projectDesc } = themeData.projectData;
    const { educationTitles, educationDesc } = themeData.educationData;
    const { workTitles, workDesc } = themeData.workData;
    const { awards } = themeData.awardData;

    return (
        <Box id="section-to-print" ref={componentRef} className="cv-container">
            <Box className="cv-header">
                <Image src={image} alt={`${name}'s profile`} className="profile-image" />
                <Box className="header-text">
                    <Heading as='h1' size='2xl' className='name'>
                        {name}
                    </Heading>
                    <Text fontSize='md' className='contact-info'>
                        <span><ImLocation /> {address}</span> |
                        <span><GrMail /> {email}</span> |
                        <span><BsFillTelephoneFill /> {phone}</span>
                    </Text>
                    <Text fontSize='lg' className='profile'>
                        {profile}
                    </Text>
                </Box>
            </Box>

            <section className="skills-section">
                <Heading as='h3' size='lg' className='section-title'>
                    TECHNICAL SKILLS
                </Heading>
                <Box className='skills-set'>
                    {skill.split(',').map((element, index) => (
                        <Badge key={index} className='skill-badge'>{element}</Badge>
                    ))}
                </Box>
            </section>

            {/* Projects Section */}
            <section className="projects-section">
                <Heading as='h3' size='lg' className='section-title'>
                    PROJECTS
                </Heading>
                {Object.entries(projectTitles).map(([key, title], index) => (
                    <Box key={index} className="project">
                        <Text className='project-title'>{title}</Text>
                        <Text className='project-desc'>
                            {projectDesc[key]?.split(',').map((desc, idx) => <li key={idx}>{desc}</li>)}
                        </Text>
                    </Box>
                ))}
            </section>

            {/* Education Section */}
            <section className="education-section">
                <Heading as='h3' size='lg' className='section-title'>
                    EDUCATION
                </Heading>
                {Object.entries(educationTitles).map(([key, title], index) => (
                    <Box key={index} className="education">
                        <Text className='education-title'>{title}</Text>
                        <Text className='education-desc'>
                            {educationDesc[key]?.split(',').map((desc, idx) => <li key={idx}>{desc}</li>)}
                        </Text>
                    </Box>
                ))}
            </section>

            {/* Work Experience Section */}
            <section className="experience-section">
                <Heading as='h3' size='lg' className='section-title'>
                    WORK EXPERIENCE
                </Heading>
                {Object.entries(workTitles).map(([key, title], index) => (
                    <Box key={index} className="experience">
                        <Text className='experience-title'>{title}</Text>
                        <Text className='experience-desc'>
                            {workDesc[key]?.split(',').map((desc, idx) => <li key={idx}>{desc}</li>)}
                        </Text>
                    </Box>
                ))}
            </section>

            {/* Awards Section */}
            <section className="awards-section">
                <Heading as='h3' size='lg' className='section-title'>
                    AWARDS & ACHIEVEMENTS
                </Heading>
                <Box className='awards-set'>
                    {awards.split(',').map((award, index) => (
                        <Text key={index} className='award-item'>{award}</Text>
                    ))}
                </Box>
            </section>
        </Box>
    );
}

export default Theme5;
