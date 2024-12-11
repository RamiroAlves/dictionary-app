import api from "./api";

export const getDefinition = async (search: string) => {
    try {
        const response = await api.get(`entries/en/${search}`);

        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(`${error.response.data.title}\n${error.response.data.message}`)
        }
        throw new Error("Palavra não encontrada, verifique se digitou corretamente.")
    }
}