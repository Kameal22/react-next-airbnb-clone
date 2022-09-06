import type { GetStaticProps, NextPage } from 'next'
import LandingPage from '../components/landingPage/landingPage';
import { apiDataTypes } from "../types/apiDataTypes";
import { MongoClient } from "mongodb";
import { useRouter } from "next/router";

interface Props {
  data: apiDataTypes[]
  changeTheme: () => void
}

const Home: NextPage<Props> = ({ data, changeTheme }) => {
  const router = useRouter();

  return (
    <LandingPage loggedIn={router.query.loggedIn} data={data} changeTheme={changeTheme} />
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
        image: place.image,
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