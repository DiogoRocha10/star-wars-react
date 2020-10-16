import axios from "axios";

let api = "https://swapi.dev/api";

export const getPersons = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${api}/people/`)
            .then(dados => {
                resolve(dados.data.results)
            })
            .catch(erro => {
                reject(erro)
            })
    });
}
export const getFilms = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${api}/films/`)
            .then(dados => {
                resolve(dados.data.results)
            })
            .catch(erro => {
                reject(erro)
            })
    });
}
export const getPlanets = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${api}/planets/`)
            .then(dados => {
                resolve(dados.data.results)
            })
            .catch(erro => {
                reject(erro)
            })
    });
}
export const getSpecies = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${api}/species/`)
            .then(dados => {
                resolve(dados.data.results)
            })
            .catch(erro => {
                reject(erro)
            })
    });
}

export const getStarships = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${api}/starships/`)
            .then(dados => {
                resolve(dados.data.results)
            })
            .catch(erro => {
                reject(erro)
            })
    });
}
