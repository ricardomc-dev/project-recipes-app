import React, { Component } from 'react';
import Header from '../components/Header';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      showSearchBtn: false,
    };
  }

  render() {
    const { showSearchBtn } = this.state;
    return (
      <>
        <Header
          showSearchBtn={ showSearchBtn }
        >
          Profile
        </Header>
        {/* <button data-testid="profile-done-btn" type="button">Profile</button>
        <button data-testid="profile-favorite-btn" type="button">Profile</button>
        <button data-testid="profile-logout-btn" type="button">Profile</button> */}
      </>
    );
  }
}

export default Profile;
