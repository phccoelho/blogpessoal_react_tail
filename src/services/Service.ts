import axios from "axios"

const api= axios.create({
    baseURL: "https://blogpessoal-jdte.onrender.com",
})

// eslint-disable-next-line @typescript-eslint/o-unsafe-function-type
export const cadastrarUsuario = async (url: string, dados: object, setDados: Function ) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)   
}

// eslint-disable-next-line @typescript-eslint/o-unsafe-function-type
export const login = async (url: string, dados: object, setDados: Function ) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)   
}