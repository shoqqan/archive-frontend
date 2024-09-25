import {createEffect, createEvent, createStore} from "effector";
import axios from "axios";
import {APIURL} from "@/shared/lib/environments.ts";
import {v4} from "uuid";

export const addMessage = createEvent()

export const createChatFx = createEffect(async (formData) => {
    try {
        const res = await axios.post(`${APIURL}/chat/new`, formData)
        return res.data
    } catch (error) {
        console.error(error);
    }
})

export const getChatFx = createEffect(async (chatId) => {
    try {
        const res = await axios.get(`${APIURL}/chat/${chatId}`)
        return res.data
    } catch (error) {
        console.error(error);
    }
})

export const createMessageFx = createEffect(async (data) => {
    try {
        const res = await axios.post(`${APIURL}/chat/message`, data)
        addMessage(data.content)
        return res.data
    } catch (error) {
        console.error(error);
    }
})


const initialState = {
    chatId: null,
    docId: null,
    title: "",
    history: [],
    docs: [],
    isChatLoading: true,
    isDocLoading: false
}
export const $chat = createStore(initialState)
    .on(createChatFx.doneData, ((_, response) => {
        return {..._, chatId: response.chat_id, docId: response.doc_version_id}
    }))
    .on(getChatFx.doneData, ((_, response) => {
        return {
            ..._,
            history: response.messages,
            docs: response.doc_versions,
            title: response.title,
            isChatLoading: false
        }
    }))
    .on(addMessage, (state, message) => ({
        ...state,
        history: [...state.history, {content: message, is_user: true, createdAt: v4()}]
    }))
    .on(createMessageFx.doneData, (state, response) => ({
        ...state,
        docId: response.new_doc_version_id !== null ? response.new_doc_version_id : state.docId,
        history: [...state.history, {content: response.content, is_user: false, createdAt: v4()}]
    }))


export const resetChat = createEvent();


$chat.on(resetChat, (() => {
    return {...initialState}
}))

