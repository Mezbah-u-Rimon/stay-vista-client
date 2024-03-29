import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading/Heading";
import Loader from "../Shared/Loader";
import { getAllRooms } from "../../api/rooms";



const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [params, setParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const category = params.get('category');

    useEffect(() => {
        setLoading(true);
        getAllRooms()
            .then(data => {
                if (category) {
                    const filtered = data.filter(room => room.category === category)
                    setRooms(filtered)

                }
                else {
                    setRooms(data)
                }
                setLoading(false)
            })
    }, [category])

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <Container>
            {rooms && rooms.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {rooms?.map(room => <Card key={room._id} room={room}></Card>)}
                </div>
            ) : (
                <div className="flex flex-col gap-8 justify-center items-center min-h-[calc(100vh-300px)]">
                    <Heading title='No Rooms Available In This Category!' subtitle='Please Select Other Categories.' center={true}></Heading>
                </div>
            )
            }

        </Container>
    );
};

export default Rooms;