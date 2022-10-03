import { BREEDS, API_URL, HEADERS, INITIAL_STATE } from "../data/constants";
import { DogoResult } from "../data/types";

export const getDogoResult = async (): Promise<DogoResult> => {

    const apiCallUrls: string[] = BREEDS.map(breed => `${API_URL}breeds/search?q=${breed}`);

    return await Promise.all(apiCallUrls.map(url => fetch(url, { headers: HEADERS })))

        .then(async (response: any) => {
            // check for errors before sending to json
            if (response.filter((elem: any) => elem.ok).length === response.length) {
                return Promise.all(response.map(async (data: any) => await data.json()))
            }
            throw new Error('Something went wrong');
        })
        .then((responseJson) => {

            const initialState = INITIAL_STATE;

            responseJson.map((elem: any, index: number) => {
                let validData: any;

                // check in case I get more than 1 dog breed
                if (elem.length === 1) {
                    validData = elem[0];
                } else {
                    // get the dog breed that has 1 word name
                    validData = elem.filter((item: { name: { split: (arg0: string) => { (): any; new(): any; length: number; }; }; }) => item.name.split(' ').length === 1)[0];
                }

                initialState[index].name = validData.name;
                initialState[index].temperament = validData.temperament;

            });

            const response: DogoResult = {
                status: 'success',
                data: initialState,
            }

            return response;
        })
        .catch((error) => {
            const errorResponse: DogoResult = {
                status: 'error',
                data: [],
            }

            return errorResponse;
        });
}