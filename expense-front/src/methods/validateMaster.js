export const validateMaster = async (masterInputParam) => {
    try {
        const response = axios.get("http://localhost:8085/validateMaster", { params: masterInputParam });
        return response.data;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}