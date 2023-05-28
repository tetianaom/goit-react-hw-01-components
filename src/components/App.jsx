import user from 'user.json'
import data from 'data.json'
import friends from 'friends.json'
import transactions from 'transactions.json'
import { Profile } from './Profile/Profile';
import { StatisticsSection } from './StatisticsSection/StatisticsSection';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        avatar={user.avatar}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <StatisticsSection statisticItem={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

