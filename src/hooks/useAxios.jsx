import { useState, useContext, useMemo } from "react";
import AxiosContext from './contexts/AxiosContext';
import axios from "axios";

export const useAxios = (url, method, payload) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    const contextInstance = useContext(AxiosContext);
    const instance = useMemo(() => {
        return contextInstance || axios;
    }, [contextInstance]);

    const call = async () => {
        try {
            setLoaded(false);
            const response = await instance.request({
                data: payload,
                method,
                url,
            });
            setData(response.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoaded(true);
        }
    }

    return { data, error, loaded, call };
};
