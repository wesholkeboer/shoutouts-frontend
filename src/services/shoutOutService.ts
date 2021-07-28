import axios from "axios";
import ShoutOut from "../models/ShoutOut";

const baseUrl = process.env.REACT_APP_API_URL;

export const getAllShoutOuts = async (): Promise<ShoutOut[]> => {
  const response = await axios.get(baseUrl!);
  return response.data;
};

export const getShoutOutsByTo = async (name: string): Promise<ShoutOut[]> => {
  const response = await axios.get(
    `${baseUrl}/user/${encodeURIComponent(name)}`
  );
  return response.data;
};

export const postShoutOut = async (shoutOut: ShoutOut): Promise<ShoutOut> => {
  const response = await axios.post(baseUrl!, shoutOut);
  return response.data;
};
