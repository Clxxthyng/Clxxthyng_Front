import React from 'react';
import './style/global-head.css'
export default () => {
    return (
        <>
          <header>
            <div className={"logo"}><a href="#!">Clxxthyng</a></div>
            <nav>
              <ul>
                <li><a href="#!">홈</a></li>
                <li><a href="#!">게시판</a></li>
                <li><a href="#!">캘린더</a></li>
              </ul>
              <a href="#!"><div className={"profile"}></div></a>
            </nav>
          </header>
        </>
    )
}