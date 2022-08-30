import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Button = ({ className, children, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'whitespace-nowrap w-fit font-DmSans rounded-lg lg:text-[1.125rem] xl:text-lg tracking-wider font-bold py-[1.125rem] px-8 text-center transition-all',
        { 'bg-primary-800 hover:bg-primary-900 text-white hover:text-white': color === 'primary' },
        { ' bg-white hover:text-white border border-primary-900 text-primary-900 hover:bg-primary-900 ': color === 'secondary' },
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
