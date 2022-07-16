import { NextPage } from "next";
import type { GetStaticProps, GetStaticPaths } from 'next'
import { MongoClient } from "mongodb";
import { apiDataTypes } from "../../types/apiDataTypes";

interface Props {
    place: apiDataTypes
}

const Announcement: NextPage<Props> = ({ place }) => {

    console.log(place)

    return (
        <div><h1>Announcement</h1></div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const client = await MongoClient.connect(
        "mongodb+srv://kameal:kameal1996@next.bgzwk.mongodb.net/places?retryWrites=true&w=majority"
    );

    const db = client.db();

    const placesCollection = db.collection("placesCollection");

    const places = await placesCollection.find({}, { projection: { _id: 1 } }).toArray();

    client.close();

    return {
        fallback: false,
        paths: places.map(place => ({ params: { announcementId: place._id.toString() } }))
    }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
    const announcementId = context.params.announcementId;

    const client = await MongoClient.connect(
        "mongodb+srv://kameal:kameal1996@next.bgzwk.mongodb.net/places?retryWrites=true&w=majority"
    );

    const db = client.db();

    const placesCollection = db.collection("placesCollection");

    const viewedPlace = await placesCollection.findOne({ _id: announcementId });

    client.close();

    return {
        props: {
            data: viewedPlace
        }
    }
}

export default Announcement;