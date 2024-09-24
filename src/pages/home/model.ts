import {createStore} from "effector";
import {createChatFx} from "@/pages/chat/model.ts";


export const $home = createStore({
    isLoading: false
})
    .on(createChatFx.pending, ((_) => ({..._, isLoading: true})))
    .on(createChatFx.doneData, ((_) => ({..._, isLoading: false})))
