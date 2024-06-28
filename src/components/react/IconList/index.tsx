import * as icons from '@ubie/ubie-icons';
import IconWrapper from './IconWrapper';
import styles from './index.module.css';
import type { FC } from 'react';

const iconArray = Object.values(icons);

const IconList: FC = () => {
  return (
    <div>
      <ul className={styles.list}>
        {iconArray.map((Icon, index) => (
          <li key={index}>
            <IconWrapper index={index}>
              <Icon />
            </IconWrapper>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IconList;
