import styles from 'styles/components/Footer.module.scss';

export default function FooterComponent(props) {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>{props.copyrightText}</div>
      <div className={styles.tiny}>huzzah!</div>
    </div>
  );
}
