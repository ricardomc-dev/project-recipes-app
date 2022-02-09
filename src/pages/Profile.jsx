import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  const showSearchBtn = false;

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
      <div className="footerExplorer">
        <Footer />
      </div>
    </>
  );
}

export default Profile;
