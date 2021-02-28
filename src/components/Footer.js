import InstagramIcon from '../images/instagramicon';
import FacebookIcon from '../images/facebookicon';
import PinterestIcon from '../images/pinteresticon';

const Footer = () => (
    <div className="footer">
        <div className="social-links">
            <InstagramIcon className="social-links-icon" />
            <FacebookIcon className="social-links-icon" />
            <PinterestIcon />
        </div>
        <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
            Coded by <a href="https://github.com/AnderBuendia">anderb</a>.
        </div>
    </div>
)

export default Footer;