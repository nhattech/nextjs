import { useRouter } from 'next/router';

export default function NewDetail(params) {
  const router = useRouter();

  const newsId = router.query.newsId;
//   console.log('router: ', router);
  return <h1>News Detail id: {newsId}</h1>;
}
