import {createEffect, createStore} from "effector";
import axios from "axios";
import {APIURL} from "@/shared/lib/environments.ts";


export const createChatFx = createEffect(async (formData) => {
    try {
        const res = await axios.post(`${APIURL}/chat/new`, formData)
        return res.data
    } catch (error) {
        console.error(error);
    }
})

export const $chat = createStore({
    chatId: null,
    docId: null,
    title: "",
    history: [],
    docs: [],
    isChatLoading: false,
    isDocLoading: false
})
    .on(createChatFx.doneData, ((_, response) => ({
        ..._,
        chatId: response.chat_id,
        docId: response.doc_id,
        isChatLoading: false,
        isDocLoading: false
    })))
