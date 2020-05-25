import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "react-sidebar";
// import { slide as Menu } from 'react-burger-menu'
import './style.scss';

const MOBILE_WIDTH = 1024;




class Header extends Component {

  constructor(props) {
    super(props);
    this.onMenuStateChange = this.onMenuStateChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.state = {
      isMenuOpen: false,
    };

    this.state.windowWidth = window.innerWidth;
    window.onresize = () => {
      if (window.innerWidth != this.state.innerWidth) {
        this.setState({ windowWidth: window.innerWidth });
      }
    };


    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('beforeinstallprompt');
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 100 && window.scrollY > this.lastScrollY) {
      this.headerRef.style.top = '-55px';
    } else if (window.scrollY < this.lastScrollY) {
      this.headerRef.style.top = '0';
    }

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.headerRef.style.top = '0';
    }
    this.lastScrollY = window.scrollY;
  }

  closeMenu() {
    this.setState({ isMenuOpen: false });
  }

  installToDesktop() {
    //Trigger the installation prompt
    this.deferredPrompt.prompt();
  }

  onMenuStateChange(state) {
    this.setState({ isMenuOpen: state.isOpen })
  }


  renderLogo() {
    return (
      <div className="header-logo">
        {/* <img
          src={require('../../assets/img/logo.png')}
          className="App-logo"
          alt="logo"
        /> */}
        <h1 className="App-title">Noka.dev</h1>
      </div>
    );
  }

  onSetSidebarOpen = () => {

  }
  render() {

    return (
      <header ref={(ref) => { this.headerRef = ref }} className="App-header">
        <Link to="/">
          {this.renderLogo()}
        </Link>
        {this.state.windowWidth > MOBILE_WIDTH &&
          <div className="container-menu-items-desktop">
            <div>
              <Link onClick={() => this.closeMenu()} className="menu-item menu-item-desktop" to="/work">Work</Link>
              <Link onClick={() => this.closeMenu()} className="menu-item menu-item-desktop" to="/experiments">Experiments</Link>
              <Link onClick={() => this.closeMenu()} className="menu-item menu-item-desktop" to="/blog">Blog</Link>
            </div>
          </div>
        }

        {this.state.windowWidth <= MOBILE_WIDTH &&
          <div>
            <Sidebar
              sidebar={<b>Sidebar content</b>}
              open={this.state.sidebarOpen}
              onSetOpen={this.onSetSidebarOpen}
              styles={{ sidebar: { background: "white" } }}
            />
          </div>
        }

      </header>
    );
  }
}

export default Header;
