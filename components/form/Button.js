import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Button = ({ className, children, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'whitespace-nowrap w-fit rounded-full text-sm md:text-base py-3 px-8 text-center font-semibold transition-all',
        { 'shadow-accent-volume bg-accent  hover:bg-accent-dark text-white hover:text-jacarta-800': color === 'primary' },
        { 'shadow-white-volume custom-shadow hover:shadow-accent-volume bg-white hover:text-white text-accent hover:bg-accent-dark ': color === 'secondary' },
        { 'bg-white border-primary-200 text-black-300 hover:bg-green-100 hover:text-white': color === 'teritary' },

        className
      )}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  color: 'primary',
  className: null,
  onClick: () => { }
};

export default Button;
