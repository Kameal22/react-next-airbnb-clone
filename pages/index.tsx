import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router';
import LandingPage from '../components/landingPage/landingPage';
import { apiDataTypes } from "../types/apiDataTypes";
import { MongoClient } from "mongodb";

interface Props {
  data: apiDataTypes[]
}

const Home: NextPage<Props> = ({ data }) => {
  const router = useRouter();

  const showAnnouncementHandler = () => {
    router.push('/1id');
  }

  return (
    <LandingPage data={data} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://kameal:kameal1996@next.bgzwk.mongodb.net/places?retryWrites=true&w=majority"
  );

  const db = client.db();

  const placesCollection = db.collection("placesCollection");

  const places = await placesCollection.find().toArray();

  client.close();

  return {
    props: {
      data: places.map(place => ({
        country: place.country,
        city: place.city,
        area: place.area,
        images: place.images,
        host: place.host,
        cost: place.cost,
        rating: place.rating,
        term: place.term,
        description: place.description,
        amenties: place.amenties,
        id: place._id.toString()
      }))
    },
    revalidate: 1
  }
}

export default Home;