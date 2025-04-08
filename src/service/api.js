import axios from 'axios';
import { getHeaderAndParams } from '../utils/common-utils' 

export const getData = async (formData, jsonText, paramData, headerData) => {
    const apiType = formData.type.toLowerCase();
    const apiURL = formData.url;
    const apiHeader = getHeaderAndParams(headerData)
    const apiParams = getHeaderAndParams(paramData)
    try {
        return await axios({
            method: apiType,
            url: apiURL,
            body: jsonText,
            headers: apiHeader,
            params: apiParams
        })
    } catch (error) {
        console.log('Error while calling API', error);
        return 'error';
    }
}