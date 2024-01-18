import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import Calender from "./Calender";
import { useState } from "react";

const RoomReservation = ({ room }) => {
    const [value, setValue] = useState({
        startDate: new Date(room?.from),
        endDate: new Date(room?.to),
        key: 'selection',
    })

    // days calculate
    const totalDays = parseInt(formatDistance(new Date(room.to), new Date(room.from)).split(' ')[0]);

    //total days * price calculate
    const totalPrice = totalDays * room.price;

    return (
        <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white">
            <div className="flex items-center gap-1 p-4">
                <h1 className="text-2xl font-semibold">
                    $ {room?.price}
                </h1>
                <h5 className="font-medium text-neutral-600"> night </h5>
            </div>
            <hr />
            <div className="flex justify-center">
                <Calender value={value}></Calender>
            </div>
            <hr />
            <div className="p-4">
                <Button label={'Reserve'}></Button>
            </div>
            <hr />
            <div className="p-4 flex items-center justify-between text-lg font-semibold">
                <div>Total</div>
                <div>$ {totalPrice}</div>
            </div>
        </div>
    );
};

export default RoomReservation;