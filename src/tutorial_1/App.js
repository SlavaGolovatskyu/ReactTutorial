import ProfileClass from './ProfileClass';
import Profile from './Profile';
import './style.css';

const TutorialFirstApp = () => {
  return (
    <div className="TutorialFirstApp">
      <Profile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
      <ProfileClass name="Alex Пупкин" registredAt={new Date(2006, 5, 22)} />
    </div>
  );
};

export default TutorialFirstApp;
