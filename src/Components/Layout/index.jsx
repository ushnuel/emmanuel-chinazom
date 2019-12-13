import React, { Component } from 'react';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import './layout.css';

class Layout extends Component {
  state = {
    isSideDrawerOpen: false,
  };
  animate = (cb) => {
    window.requestAnimationFrame(cb);
  };
  isVisible = (elementSize) => {
    const innerHeight = window.innerHeight && document.documentElement.clientHeight;
    return (
      (elementSize.top <= 0 && elementSize.bottom >= 0) ||
      (elementSize.top <= innerHeight && elementSize.bottom >= innerHeight) ||
      (elementSize.top >= 0 && elementSize.bottom <= innerHeight)
    );
  };
  loop = () => {
    const scrollElements = document.querySelectorAll('.show-on-scroll');
    scrollElements.forEach((element) => {
      if (this.elementIsVisible(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });
    this.animate(this.loop);
  };

  elementIsVisible = (element) => {
    const elementSize = element.getBoundingClientRect();
    return this.isVisible(elementSize);
  };
  componentDidMount() {
    this.loop();
  }
  closeSideDrawer = () => {
    this.setState({ isSideDrawerOpen: false });
  };
  openSideDrawer = () => {
    this.setState({ isSideDrawerOpen: true });
  };
  render() {
    return (
      <div className='em-layout'>
        <Header
          isSideDrawerOpen={this.state.isSideDrawerOpen}
          closeSideDrawer={this.closeSideDrawer}
          openSideDrawer={this.openSideDrawer}
        />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Layout;
