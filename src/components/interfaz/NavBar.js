import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class MenuExampleInvertedSegment extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    window.location.href = '/dashboard';
  }

  handleItemLogOutClick = (e, { name }) => {
      this.setState({ activeItem: name });
      localStorage.removeItem('ApiToken');
      window.location.href = '/';
  }
  handleItemRegistrarClick = (e, { name }) => {
    this.setState({ activeItem: name });
    window.location.href = '/todo/register';
  }

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Add Todo'
            active={activeItem === 'Add'}
            onClick={this.handleItemRegistrarClick}
          />
          <Menu.Item
            name='Log Out'
            active={activeItem === 'Log Out'}
            onClick={this.handleItemLogOutClick}
          />
        </Menu>
      </Segment>
    )
  }
}

MenuExampleInvertedSegment.propTypes = {
  history: PropTypes.shape({
      push: PropTypes.func.isRequired
  }).isRequired,
};

export default MenuExampleInvertedSegment;