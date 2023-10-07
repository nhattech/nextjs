import Link from 'next/link';
import { Fragment } from 'react';

export default function NewsPage(params) {
  return (
    <Fragment>
      <h1>News page</h1>
      <ul>
        <li>
          <Link href={'/news/football'}>News football</Link>
        </li>
        <li>
          <Link href={'/news/sport'}>News Sport</Link>
        </li>
      </ul>
    </Fragment>
  );
}
