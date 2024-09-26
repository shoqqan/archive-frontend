import {createEffect, createStore} from "effector";
import axios from "axios";
import {APIURL} from "@/shared/lib/environments.ts";
import {createChatFx} from "@/pages/chat/model.ts";


export const getUserChatsFx = createEffect(async () => {
    try {
        const res = await axios.get(`${APIURL}/chat/list`)
        return res.data
    } catch (error) {
        console.error(error);
    }
})

export const $home = createStore({
    userChats: [],
    isLoading: true
})
    .on(createChatFx.doneData, ((_) => ({..._, isLoading: false})))
    .on(getUserChatsFx.doneData, ((_, res) => ({..._, userChats: res, isLoading: false})))
    .on(getUserChatsFx.pending, ((_) => ({..._, isLoading: true})))

