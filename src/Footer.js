
// should have contact info (linkedIn and email)
  // little pop up box for these would be cool
// resume linked there too
import resume from "./WyattNapierResume.pdf";
import emaillogo from "./favicons/email-32.png";
import linkedinlogo from "./favicons/linkedin-32.png";
import resumelogo from "./favicons/pdf-32.png";
import githublogo from "./favicons/github-32.png";
import spotifylogo from "./favicons/spotify-32.png";

function Footer () {
  return (
    <div className="footer-wrapper">
      <div className="contact-links">
        {/* might have to use ul and li instead of just doing it lazily with p tags */}
        <p>If you would like to contact me, feel free to reach out on either of the following platforms. My information is linked below!</p>
        <p><a href="mailto:wnapier@bu.edu" target="_blank"><img src={emaillogo} alt="Email logo" className="logo-email"/> Email</a></p>
        <p><a href="https://www.linkedin.com/in/wyatt-napier/" target="_blank"><img src={linkedinlogo} alt="LinkedIn logo" className="logo-linkedin"/> LinkedIn</a></p>
      </div>
      <div className="other-links">
        {/* might have to use ul and li instead of just doing it lazily with p tags */}
        <p>Below are some other important links that you might want to explore.</p>
        <p><a href={resume} target="_blank"><img src={resumelogo} alt="PDF logo" className="logo-pdf"/> Resume</a></p>
        <p><a href="https://github.com/wyattnapier/" target="_blank"><img src={githublogo} alt="GitHub logo" className="logo-github"/> GitHub</a></p>
        <p><a href="https://open.spotify.com/user/wyatt~n.?si=ca4612e7bed54639" target="_blank"><img src={spotifylogo} alt="Spotify logo" className="logo-spotify"/> Spotify</a></p>
      </div>
    </div>
  )
}

export default Footer;