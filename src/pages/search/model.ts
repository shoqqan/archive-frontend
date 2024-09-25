import {createEffect, createStore} from "effector";
import axios from "axios";
import {APIURL} from "@/shared/lib/environments.ts";
import {createChatFx} from "@/pages/chat/model.ts";

export const getSearchResultsFx = createEffect(async (req) => {
    try {
        const res = await axios.post(`${APIURL}/doc/search`, req)
        return res.data
    } catch (error) {
        console.error(error);
    }
});

export const $search = createStore({
    docs: [],
    isLoading: false
})
    .on(createChatFx.doneData, ((_, res) => ({..._, isLoading: false, docs: res.doc_origins})))

