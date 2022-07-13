import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router';
import LandingPage from '../components/landingPage/landingPage';
import { apiDataTypes } from "../types/apiDataTypes";

interface Props {
  data: apiDataTypes[]
}

const Home: NextPage<Props> = ({ data }) => {
  const router = useRouter();

  const showAnnouncementHandler = () => {
    router.push('/1id');
  }

  return (
    <LandingPage />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const example = await import('../data/data.json');

  return {
    props: {
      data: example.default
    }
  }
}

export default Home;