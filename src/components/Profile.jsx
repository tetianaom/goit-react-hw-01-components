import PropTypes from 'prop-types';
// import { BsAlarm } from 'react-icons/bs';
// import { HiOutlineChartPie, HiOutlineChartBar } from 'react-icons/hi';

export const Profile = ({ avatar, username, tag, location, followers, views, likes },
) => {
  return (
    <div>
      <div>
        <img
          src={avatar}
          alt="User avatar"
        />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};