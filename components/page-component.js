import styles from 'styles/components/Well.module.scss';
import { useRouter } from 'next/router';

export default function PageComponent(_props) {
  const router = useRouter();
  const asPath = router.asPath;

  switch (asPath) {
    case '/hello':
      return <div className={styles.hello}> hello</div>
    case '/':
      return <h2>main</h2>;
    default:
      return 'error';
  }
}
