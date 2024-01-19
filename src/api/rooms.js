import axiosSecure from "."

export const getAllRooms = async () => {
    const { data } = await axiosSecure('/rooms');
    return data
}

//fetch all rooms for host
export const getHostRooms = async (email) => {
    const { data } = await axiosSecure(`/rooms/${email}`)
    return data
}

export const getSingleRoom = async (id) => {
    const { data } = await axiosSecure(`/room/${id}`);
    return data
}

export const addRoom = async (roomData) => {
    const { data } = await axiosSecure.post('/rooms', roomData)
    return data
}
