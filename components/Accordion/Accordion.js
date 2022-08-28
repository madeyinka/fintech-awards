import React, { useState } from 'react';
import classNames from 'classnames';
import { Arrow } from '@/public/assets/svgsIcons';

const AccordionLayout = ({ options }) => {
  const [isActive, setIsActive] = useState(null);

  return (
    <>
      {options.map(({ title, content }, index) => (
        <div
          key={title}
          className="overflow-hidden flex w-full flex-col my-3 border-[1.5px] rounded-md dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100  bg-white transition-shadow hover:shadow-lg"

        >
          <div
            onClick={() => setIsActive(isActive === index ? null : index)}
            className={classNames(" p-5 lg:p-6 cursor-pointer   dark:bg-jacarta-700 text-jacarta-700  dark:text-white ", { 'bg-light-base/60 dark:bg-light-base ': isActive === index })}
          >
            <div className="flex items-center justify-between gap-4">
              <p
                className={classNames(' font-bold text-sm md:text-base', {
                  'text-jacarta-800 dark:text-jacarta-800': isActive === index
                })}
              >
                {title}
              </p>
              <div>
                {isActive === index ? (
                  <Arrow className={classNames("rotate-0 fill-jacarta-700 h-[1.125rem] y-[1.125rem] transition-transform")} />
                ) : (
                  <Arrow className={classNames("rotate-45 fill-jacarta-700 h-4 dark:fill-white w-4 transition-transform",)} />
                )}
              </div>

            </div>
          </div>
          {index === isActive && (
            <div className="w-full transition-all duration-700 p-4 px-10 mb-6">
              {content}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default AccordionLayout;
