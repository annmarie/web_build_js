import { useEffect } from 'react';
import appPageHandler from 'middleware/app-page-handler';
import appConfig from 'app-config';
import Head from 'next/head';
import HeaderComponent from 'components/header-component';
import FooterComponent from 'components/footer-component';
import NavigationComponent from 'components/navigation-component';
import PageComponent from 'components/page-component';
import _ from 'lodash'

export default function Index(props) {

  useEffect(() => {
    console.log('Index rendered');
    console.log(props);
  }, [props]);

  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className="main">
        <HeaderComponent {...props} />
        <NavigationComponent {...props} />
        <PageComponent {...props} />
        <FooterComponent {...props} />
      </div>
    </>
  );
}

export function getServerSideProps(ctx) {
  // middleware
  appPageHandler(ctx.req, ctx.res);

  // check query paths with navLinks list
  let queryPath = _.get(ctx, 'query.path', '');
  queryPath = _.isArray(queryPath) ? `/${queryPath.join('/')}` : `/${queryPath}`;
  const navPaths = appConfig.navLinks.map(navLink => navLink.path);
  const validUrl = navPaths.includes(queryPath) ? true : false;
  // if no valid url path is found render 404 page
  if (!validUrl) return { notFound: true }

  // pass config data to page props
  return { props: { ...appConfig } };
}
