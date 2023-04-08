import github from '../svg/github.svg';
import linkedin from '../svg/linkedin.svg';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import alexBulganinCv from '../alexBulganinCv.pdf';

function scroller(elem) {
    let e = document.getElementById(elem);
    e.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    });
}
function Header() {
    return (
        <header>
            <div className="upperPart">
                <div className="webDevName">
                    <span className='firstName'>A</span>
                    <span className='LastName'>B</span>
                </div>

                <div className='menu'>
                    <div className='menuIcon'><FontAwesomeIcon icon={faBars} /></div>
                    <div className='phoneViewMenu'>
                        <nav>
                            <li onClick={() => scroller('aboutMe')}>About</li>
                            <li onClick={() => scroller('certificates')}>Certifications</li>
                            <li onClick={() => scroller('portfolio')}>Portfolio</li>
                        </nav>
                        <a href={alexBulganinCv} target="__blank" ><button className='resume'>Resume</button></a>
                    </div>
                </div>
            </div>
            <div className='middlePart'>
                <div className='intro' >
                    <div className='helloIntro'>
                        <span>Hello, I’m</span>
                        <span className='name'> Alex Bulganin</span>
                    </div>
                    <div className='shortStatement'>
                        Mern Full stack Developer.
                        Quality work is my priority.
                    </div>
                </div>
                <a href='mailto:bulganinbralex@yahoo.com'><button className='getInTouch'>GET IN TOUCH</button></a>
            </div>
            <ul className='bottomPart'>
                <li><a href="https://github.com/doal116?tab=overview" target="__blank" ><img src={github} alt={'github logo'} /></a></li>
                <li><a href="https://www.linkedin.com/in/alex-bulganin-00740525b/" target="__blank" ><img src={linkedin} alt={'linkedin logo'} /></a></li>
            </ul>
        </header>
    )
}
export default Header;