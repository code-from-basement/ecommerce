import Styles from "./UserProfile.module.css";

function UserProfile() {
  return (
    <div className={Styles.userProfile}>
      <h1 className={Styles.pageTitle}>Welcome, Mahyar Nafisi</h1>
      <p>You are logged In</p>
    </div>
  );
}

export default UserProfile;
