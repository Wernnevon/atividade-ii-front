import axios from "axios";

export const init = () => axios.create()

export const getArtist = () => axios.create({baseURL: "http://localhost:3001/"});

export const getArtistRelated = () => axios.create({baseURL: "http://localhost:3001/"});

export const findArtist = () => axios.create({baseURL: "http://localhost:3001/"});