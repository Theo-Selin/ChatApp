import Message from "@chatapp/shared";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

axios.defaults.baseURL =
    process.env.REACT_APP_MESSAGE_API || "http://localhost:3001";

export const fetchMessages = async (): Promise<Message[]> => {
    const response = await axios.get<Message[]>("/messages");
    return response.data;
};

export const delay = (ms: number) => new Promise(
    resolve => setTimeout(resolve, ms)
  );