"use client";
// BEM 예제
import "./Test.scss";

function Test() {
  return (
    <header className="header">
      <div className="header__content">
        <h1>Logo</h1>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__list__item">sub1</li>
            <li className="navigation__list__item">sub2</li>
            <li className="navigation__list__item">sub3</li>
            <li className="navigation__list__item">sub4</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Test;
