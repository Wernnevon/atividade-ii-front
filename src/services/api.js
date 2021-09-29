import axios from "axios";

const ApiUrl = "http://localhost:3001/";

export const getArtist = (artistId) => axios.create({
    baseUrl: `${ApiUrl}/artista/${artistId}`
});

export const getArtistRelated = (artistId) => axios.create({
    baseUrl: `${ApiUrl}/artistasRelacionados/${artistId}`
});

export const findArtist = (artistName) => axios.create({
    baseUrl: `${ApiUrl}/artistas/${artistName}`
});