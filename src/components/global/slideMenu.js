import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TagsList from './tagsList';

class SlideMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
      }
     
      handleMouseDown(e) {
        this.toggleMenu();
        
        e.stopPropagation();
      }
     
      toggleMenu() {
        this.setState(
          {
            visible: !this.state.visible
          }
        );
      }

     render() {
        return (
            <div className="slide-menu-wrapper">
                <button onClick={this.handleMouseDown}>
                    <svg height="35px" id="Layer_1" viewBox="0 0 30 30" width="35px">
                        <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
                    </svg>
                </button>


                <div className={"slide-menu-container " + (this.state.visible ? 'active' : 'hidden')} >
                    <div className={"slide-menu-content " + (this.state.visible ? 'active' : 'hidden')}>
                        <button onClick={this.handleMouseDown}>
                            <h3>CLOSE X</h3>
                        </button>
                        <nav aria-label="sitewide navigation">
                            <TagsList 
                                blogposts={this.props.blogposts} 
                                disablemenu={this.handleMouseDown}
                            />
                        </nav>
                    </div>
                </div>
            </div>
        )
     } 
    
}


SlideMenu.propTypes = {
    blogposts: PropTypes.array.isRequired
}


export default SlideMenu
