import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router';
import axios from 'axios';
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
    <div>
      <button onClick={showAnnouncementHandler}>Visit this place</button>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get('./data.json');

  const apiData = response.data;

  return {
    props: {
      data: apiData
    }
  }
}

export default Home;