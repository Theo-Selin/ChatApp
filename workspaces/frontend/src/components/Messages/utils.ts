import Message from "@chatapp/shared";
import axios from "axios";
import React, { useState, useEffect } from "react";

axios.defaults.baseURL =
    process.env.REACT_APP_MESSAGE_API || "http://localhost:3001";

export const fetchMessages = async (): Promise<Message[]> => {
    const response = await axios.get<Message[]>("/messages");
    return response.data;
};