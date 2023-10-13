import './main.css';
import react from '../svg/react.svg';
import js from '../svg/js.svg';
import python from '../svg/python.svg';
import bash from '../svg/bash.svg';
import git from '../svg/git.svg';
import C from '../svg/c.svg';
import node from '../svg/node.svg';
import mongodb from '../svg/mongodb.svg';
import ecommerce from './ecommerce.jpg';
import markDownEditor from './markdownEditor.jpg';
import technicalDocumentationPage from './technicalDocumentationPage.jpg';
import responsiveWebDesign from '../certifications/responsiveWebDesign.jpg';
import relationalDatabase from '../certifications/relationalDatabase.jpg';
import frontEndLibraries from '../certifications/frontEndLibraries.jpg';
import javaScriptAlgo from '../certifications/javascript.jpg';
import alexBulganinCv from '../alexBulganinCv.pdf';

import propTypes from 'prop-types';


//----------About Me Section-----------//
//----------------------------------------//
const Skills = ({ skills }) =>
    <div className='skills' >
        {
            skills.map((skill, i) =>
                <div className='skill' key={skill['name']}>
                    <img src={skill['image']} alt={`${skill['name']} logo`}></img>
                    <span>{skill['name']}</span>
                    <span className='experience'>{skill['experience']}</span>
                </div>
            )
        }
    </div>;

const AboutMe = ({ skills }) => {

    return (
        <section id="aboutMe">
            <div className="info">
                <div className='leftSide'>
                    <h1>About Me</h1>
                    <p>I am a MERN Stack developer who is passionate and eager to develop in a team atmosphere. With an open-minded attitude, I am always prepared to embrace and acquire new skills.</p>

                    <div className='hireCv'>
                        <a href="mailto:bulganinbralex@yahoo.com" ><button className='hireMe' >HIRE ME</button></a>
                        <a href={alexBulganinCv} target="__blank" >
                            <button className='downloadCv'>DOWNLOAD CV</button></a>
                    </div>
                </div>
                <div className='rightSide'>
                    <Skills skills={skills} />
                </div>
            </div>
        </section>
    )
}
Skills.propTypes = {
    skills: propTypes.array
};
AboutMe.propTypes = {
    skills: propTypes.array
};
//----------Certificate Section-----------//
//----------------------------------------//
const CertificateBox = ({ certificates }) =>
    certificates.map(
        (certificate, i) =>
            <a href={certificate['link']} key={i.toString()}>
                <div className='certificateBox' >
                    <img src={certificate['image']} alt="certificate"></img>
                    <div className='certificateInfo'>
                        <span className='name'>{certificate['name']}</span>
                        <span className='issuingOrg'>{certificate['issuingOrg']}</span>
                    </div>
                </div>
            </a>
    );
const Certificates = ({ certificates }) => {
    return (
        <section id='certificates'>
            <h1>Certifications</h1>
            <div className='certificateDisplay'>
                <CertificateBox certificates={certificates} />
            </div>
        </section>
    )
}
Certificates.propTypes = {
    certificates: propTypes.array
};
CertificateBox.propTypes = {
    certificates: propTypes.array
};
//-----------Porfolio Section----------//
//---------------------------------------//
const PortfolioBox = ({ portfolio }) =>
    portfolio.map((elem, i) =>
        <a href={elem['link']} key={i.toString()}>
            <div className='projectBox' key={i.toString()}>
                <img src={elem['image']} alt="project Display"></img>
                <div>
                    <h2 className='name'>{elem['name']}</h2>
                    <span className='description'>{elem['description']}</span>
                </div>
            </div>
        </a>
    );
const Portfolio = ({ portfolio }) => {
    return (
        <section id='portfolio'>
            <h1>Portfolio</h1>
            <p>The projects I have completed and those I am working on are listed below.</p>
            <div className='portfolioDisplay'>
                <PortfolioBox portfolio={portfolio} />
            </div>
        </section>
    )
}
PortfolioBox.propTypes = {
    portfolio: propTypes.array
};
Portfolio.propTypes = {
    portfolio: propTypes.array
};
//---------------------------------------//
//---------------------------------------//

function Main() {
    const skills = [
        {
            name: 'JavaScript',
            image: js,
            experience: '1 year+ of experience'
        }, {
            name: 'React.js',
            image: react,
            experience: '1 year of experience'
        }, {
            name: 'Python',
            image: python,
            experience: '2 years of experience'
        }, {
            name: 'C',
            image: C,
            experience: '3 years of experience'
        }, {
            name: 'Bash',
            image: bash,
            experience: '1 year+ of experience'
        },
        {
            name: 'Git',
            image: git,
            experience: '2 year of experience'
        },
        {
            name: 'mongodb',
            image: mongodb,
            experience: '1year of experience'
        },
        {
            name: 'node.js',
            image: node,
            experience: '9 months of experience'
        }
    ];
    const certificates = [
        {
            name: 'Response Web Design',
            image: responsiveWebDesign,
            issuingOrg: 'Issued by FCC(freeCodeCamp)'
            , link: 'https://www.freecodecamp.org/certification/fcc1609ce1d-ea08-4c43-ab2d-161da1cdae94/responsive-web-design'
        },
        {
            name: 'JavaScript Algorithms and Data Structures',
            image: javaScriptAlgo,
            issuingOrg: 'Issued by FCC(freeCodeCamp)'
            , link: 'https://www.freecodecamp.org/certification/fcc1609ce1d-ea08-4c43-ab2d-161da1cdae94/javascript-algorithms-and-data-structures'
        },
        {
            name: 'Front End Development Libraries',
            image: frontEndLibraries,
            issuingOrg: 'Issued by FCC(freeCodeCamp)'
            , link: 'https://www.freecodecamp.org/certification/fcc1609ce1d-ea08-4c43-ab2d-161da1cdae94/front-end-development-libraries'
        },
        {
            name: 'Relational Database',
            image: relationalDatabase,
            issuingOrg: 'Issued by FCC(freeCodeCamp)'
            , link: 'https://www.freecodecamp.org/certification/fcc1609ce1d-ea08-4c43-ab2d-161da1cdae94/relational-database-v8'
        }

    ];
    const portfolio = [
        {
            name: 'E-commerce website',
            description: 'The development of this online store is ongoing. The objective is to create a responsive, front-end and back-end integrated e-commerce website.',
            image: ecommerce,
            link: 'https://github.com/doal116/e-commerce-react-website'
        },
        {
            name: 'React MarkDownEditor',
            description: 'Markdown Previewer that was built using HTML, JavaScript, SASSY CSS, and React.',
            image: markDownEditor,
            link: 'https://codepen.io/chartam1/full/abYxOqy'
        },
        {
            name: 'Technical Documentation Page',
            description: 'Simple Technical Documentation page Built using just HTML and CSS.',
            image: technicalDocumentationPage,
            link: 'https://codepen.io/chartam1/full/PodzggK'
        }
    ];
    return (
        <main>
            <AboutMe skills={skills} />
            <Certificates certificates={certificates} />
            <Portfolio portfolio={portfolio} />
        </main>
    )
}
export default Main;