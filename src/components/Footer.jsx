import PropTypes from 'prop-types';
import "../styles/Footer.css";
import MusicOnIcon from "../assets/sound_on.png";
import MusicOffIcon from "../assets/sound-off.png";
import SoundOnIcon from "../assets/volumeon.jpg";
import SoundOffIcon from "../assets/volumeoff.jpg";
import helpIcon from "../assets/question-logo.png";
import closeIcon from "../assets/close-x.png";

export default function Footer({
    props: {
        isMusicPlaying,
        setIsMusicPlaying,
        isSoundPlaying,
        setIsSoundPlaying,
        playClickSound,
        isHelpVisible,
        setIsHelpVisible,
    } }) {

    const handleMusic = () => {
        setIsMusicPlaying(!isMusicPlaying)
    }

    const handleSound = () => {
        setIsSoundPlaying(!isSoundPlaying)
    }

    const handleHelp = () => {
        setIsHelpVisible(!isHelpVisible)
    }

    return (
        <div className="footer">
            <div className="settings">
                <button onClick={() => { handleMusic(); playClickSound() }} className="footerBtn">
                    {isMusicPlaying ? (
                        <img src={MusicOnIcon} alt="Music toggle icon" />
                    ) : (
                        <img src={MusicOffIcon} alt="Music toggle icon" />
                    )}
                </button>
                <button onClick={() => { handleSound(); playClickSound() }} className="footerBtn">
                    {isSoundPlaying ? (
                        <img src={SoundOnIcon} alt="Sound toggle icon" />
                    ) : (
                        <img src={SoundOffIcon} alt="Sound toggle icon" />
                    )}
                </button>
            </div>
            <div className="help">
                <button onClick={() => { handleHelp(); playClickSound() }} className="footerBtn">
                    {isHelpVisible ? (
                        <img src={closeIcon} alt="Help toggle icon" />
                    ) : (
                        <img src={helpIcon} alt="Help toggle icon" />
                    )}

                </button>
            </div>
        </div>
    )
}

Footer.propTypes = {
    props: PropTypes.object.isRequired
}