import React, { createContext, useState } from 'react'

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

    const [formData, setFormData] = useState({url: ' ', type: 'POST'})
    const [paramData, setParamData] = useState([])
    const [headerData, setHeaderData] = useState([])

    return (
        <DataContext.Provider value={{
            formData,
            setFormData,
            paramData,
            setParamData,
            headerData,
            setHeaderData
        }}>
        { children }
        </DataContext.Provider>
    )
}

export default DataProvider
