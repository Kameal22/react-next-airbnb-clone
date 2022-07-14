import { NextPage } from "next";
import { useRouter } from "next/router";

const Announcement: NextPage = () => {
    const router = useRouter();

    const ID = router.query.announcementId;;

    return (
        <div><h1>Announcement: {ID}</h1></div>
    )
}

export const getStaticPaths = async () => {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    announcementId: '1',
                }
            }
        ]
    }
}

export async function getStaticProps(context: any) {
    const announcementId = context.params.announcementId;

    console.log(announcementId);

    const todos = ['asd', 'ok']

    return {
        props: {
            todos
        }
    }
}

export default Announcement;