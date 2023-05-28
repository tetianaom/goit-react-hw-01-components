import { Friend } from "components/Friend/Friend";
import PropTypes from 'prop-types';
import css from './FriendList.module.css'

export const FriendList = ({ friends }) => {
  return (
    <div className={css.wrap}>
      <ul className={css.friendList}>
        {friends.map(({id, name, avatar, isOnline}) => { return <Friend key={id} name={name} avatar={avatar} isOnline={isOnline} />})}
      </ul>
    </div>
  )
}

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
