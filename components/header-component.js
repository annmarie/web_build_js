import Link from 'next/link';
import styles from 'styles/components/Header.module.scss';

export default function HeaderComponent(props) {
  return (
    <div className={styles.logo}>
      <h2>
        <Link href="/">
          <a>{props.title}</a>
        </Link>
      </h2>
    </div>
  );
}
