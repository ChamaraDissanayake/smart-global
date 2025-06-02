// src/services/helpers/socket.ts
import { io, Socket } from "socket.io-client";
import type { ChatHistoryResponse } from "../ChatService";
const CHAT_BASE_URL = `${import.meta.env.VITE_CHAT_BASE_URL}`;

interface ServerToClientEvents {
    "new-message": (message: ChatHistoryResponse) => void;
}

interface ClientToServerEvents {
    "join-thread": (threadId: string) => void;
}

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    CHAT_BASE_URL,
    {
        path: "/socket.io",
        transports: ["websocket", "polling"],
        autoConnect: false,
        withCredentials: true,
    }
);

export default socket;