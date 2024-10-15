import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import photoJhonathan from '../../assets/jonathan.jpg'
import photoGabriel from '../../assets/gabriel.png';
import '../Footer/Footer.css';
// import ImageDisplay from '../ImageDisplay/ImageDisplay';

export const Footer = () => {
    return (
        <div className="footer-aboutUs">
            <div className="social-media">
                <h1>Redes Sociais</h1>
                <div className="icons-social-media">
                    <span>
                        <a href="https://www.linkedin.com/in/techthink-solutions-4641882b4/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon color='primary' fontSize='large' />
                        </a>
                    </span>
                    <span>
                        <a href="https://www.instagram.com/techthinksolutions/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon color='secondary' fontSize='large' />
                        </a>
                    </span>
                    <span>
                        <a href="https://www.facebook.com/profile.php?id=61566947338544&is_tour_dismissed" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon color='primary' fontSize='large' />
                        </a>
                    </span>
                    <span>
                        <a href="mailto:contato@techthinksolutions.com" target="_blank" rel="noopener noreferrer">
                            <AlternateEmailIcon color='success' fontSize='large' />
                        </a>
                    </span>
                </div>
            </div>

        </div>
    );
};
