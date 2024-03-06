import resume from './img/Resume_Samin_Saberi_052317.pdf';

function Footer() {

  // TODO: replace font-awesome className with react package: https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
  return (
    <footer>
        <h4>Contact me</h4>
        <ul className="contact">
            <li><a href={resume}>Take a look at my resume here!</a></li>
            </li>
        </ul>
    </footer>
  );
}

export default Footer;
