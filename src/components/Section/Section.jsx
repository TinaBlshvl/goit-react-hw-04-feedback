import PropTypes from 'prop-types';
import css from '../Section/Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={css.container}>
      <h1 className={css.title}>{title}&#127775;</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
