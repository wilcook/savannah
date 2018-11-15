import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a href="https://www.instagram.com/funktionlust/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-envelope-o">
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Savannah Schmidt</li>
            <li>
              Webmaster: <a href="mailto:wil.cook.is@gmail.com">Wil Cook</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
