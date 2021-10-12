import Link from 'next/link'
import _ from 'lodash'
import { useRouter } from "next/router"

const makeNavLink = (link) => {
  const { id, title, path } = link;
  const router = useRouter();
  const pagePath = _.get(router, 'asPath', '/');

  return (pagePath == path) ? <li key={id}>{title}</li> : 
    <li key={id}> 
      <Link href={path}><a>{title}</a></Link>
    </li>
}

export default function NavigationComponent(props) {

  return <> 
    <nav>
      <ul>
        {props.navLinks.map(makeNavLink)}
      </ul>
    </nav>
  </>
} 