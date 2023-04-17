import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <section>
      <ul className={css.list}>
        <li className={css.item}>&#9989; Good: {good}</li>
        <li className={css.item}>&#9888; Neutral: {neutral}</li>
        <li className={css.item}>&#10060; Bad: {bad}</li>
        <li className={css.item}>Total: {total}</li>
        <li className={css.item}>
          Positive feedback:{' '}
          {isNaN(positivePercentage) ? 0 : positivePercentage} %
        </li>
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
