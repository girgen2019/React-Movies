/** @format */

import imageGitHub from '../Component/img/GithubNegative.svg';

export const Header = () => {
  return (
    <nav className="green darken-2">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          React movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down padding:0">
          <li>
            <a
              href="https://github.com/girgen2019"
              style={{
                margin: '10px',
                height: '48px',
                width: '48px',
              }}
            >
              <img src={imageGitHub} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
