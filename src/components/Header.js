import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Savannah Schmidt MUA</strong><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed turpis mattis, eleifend nibh a, finibus massa. Nunc elementum semper felis non imperdiet. Praesent mauris lorem, feugiat nec commodo non, vestibulum ac ipsum. Morbi in augue cursus, molestie lectus a, pulvinar ipsum.
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
