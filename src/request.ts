import { BASE_URL } from "./constants";

export default async (
  type: RequestType,
  query: string,
  limit: number,
  offset: number,
  params?: string
) => {
  const response = await fetch(
    `${BASE_URL}?${type}=${query}${
      params || ""
    }&limit=${limit}&offset=${offset}&order_by=score&has_definition=check&dictionary=WL`
  );
  const data = await response.json();

  return data;
};
