import _ from 'lodash';
import appPageHandler from 'middleware/app-page-handler';
import styles from 'styles/components/Well.module.scss';
import appConfig from 'app-config';

export default function Index(_props) {
  return (
    <div>
      <div className={styles.hello}> hello</div>
    </div>
  );
}

export function getServerSideProps(ctx) {
  // middleware
  appPageHandler(ctx.req, ctx.res);

  // pass config data to page props
  return { props: { ...appConfig } };
}
