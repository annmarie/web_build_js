import _ from 'lodash';
import appPageHandler from 'middleware/app-page-handler';
import styles from 'styles/components/Header.module.scss';

export default function Index(_props) {
  return (
    <div className={styles.well}>
      <div className="hello"> hello</div>
    </div>
  );
}

export function getServerSideProps(ctx) {
  // middleware
  appPageHandler(ctx.req, ctx.res);
  const appConfig = _.get(ctx, 'req.appConfig', {});

  // pass config data to page props
  return { props: { ...appConfig } };
}
