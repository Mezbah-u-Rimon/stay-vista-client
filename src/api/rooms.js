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

// Delete a room
export const deleteRoom = async id => {
    const { data } = await axiosSecure.delete(`/rooms/${id}`)
    return data
}

// update a room
export const updateRoom = async (roomData, id) => {
    const { data } = await axiosSecure.put(`/rooms/${id}`, roomData)
    return data
}