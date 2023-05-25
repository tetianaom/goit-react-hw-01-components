import { Profile } from './Profile';
import user from '../user.json'

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        avatar={user.avatar}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
};

