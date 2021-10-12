import Link from 'next/link';
import _ from 'lodash';
import { useRouter } from 'next/router';

const makeNavLink = (link, asPath) => {
  const { id, title, path } = link;

  return asPath == path ? (
    <li key={id}>{title}</li>
  ) : (
    <li key={id}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </li>
  );
};

export default function NavigationComponent(props) {
  const router = useRouter();
  const asPath = _.get(router, 'asPath', '/');
  const navLinks = props.navLinks;

  return (
    <nav>
      <ul>{navLinks.map((link) => makeNavLink(link, asPath))}</ul>
    </nav>
  );
}
