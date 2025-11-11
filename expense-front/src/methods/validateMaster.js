import axios from "axios";

//masterInputParam = {tableName: 'Table1', keyColumn: 'id', showColumn: 'name'}
export const validateMaster = async (masterInputParam, keyValue) => {
    try {
        const response = await axios.post("http://localhost:8085/validateMaster", {
                tableName: masterInputParam.tableName, 
                keyColumn: masterInputParam.keyColumn, 
                showColumn: masterInputParam.showColumn, 
                keyValue: keyValue
            }); 
        console.log(masterInputParam, keyValue)
        console.log(response);
        return response.data;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}