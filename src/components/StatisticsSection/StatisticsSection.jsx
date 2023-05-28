import PropTypes from 'prop-types';
import { StatisticItem } from "components/StatisticItem/StatisticItem";
import css from './StatisticsSection.module.css';

export const StatisticsSection = ({ title, statisticItem }) => {
  return (
    <>
      <section className={css.statisticItem}>
        {title && <h2 className={css.title}>{title}</h2>}
        
        <ul className={css.statList}>
          {statisticItem.map(({ id, label, percentage }) => {
            return (
            <StatisticItem
              key={id}
              label={label}
              percentage={percentage}
            />
          )
          })}
        </ul>
      </section>
    </>
  );
};

StatisticsSection.propTypes = {
  statisticItem: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
