/** @format */
import imageGitHub from '../Component/img/GithubNegative.svg'

function Footer() {
  return (
    <footer className="page-footer green darken-4">
      <div className="footer-copyright">
        <div className="container" 
        style={{
          display:"flex",
          alignItems:"center",
          justifyContent:"space-between",
          
          }}>
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="https://github.com/girgen2019">
            <img src={imageGitHub}/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
