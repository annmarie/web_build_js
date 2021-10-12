import { useState, useEffect } from 'react';
import styles from 'styles/components/Footer.module.scss';

export default function FooterComponent(props) {
  const [value, setValue] = useState('');

  useEffect(() => {
    localStorage.setItem('bob', 'bill');
    setValue(localStorage.getItem('bob'));
  }, [setValue]);

  return (
    <div className={styles.footer}>
      <div>{value}</div>
      <div className={styles.copyright}>{props.copyrightText}</div>
      <div className={styles.tiny}>huzzah!</div>
    </div>
  );
}
