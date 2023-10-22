/** @format */

import imageGitHub from '../Component/img/GithubNegative.svg';

export const Header = () => {
  return (
    <nav className="green darken-2">
      <div className="nav-wrapper">
        <a href="#" className="logo">
          React movies
        </a>
        <ul >
          <li>
            <a
              href="https://github.com/girgen2019"
              style={{
                margin: '10px',
                height: '48px',
                width: '48px',
              }}
            >
              <img src={imageGitHub} className='github'/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
