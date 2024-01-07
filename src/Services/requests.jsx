import axios from "axios";
//dsds
export const serverUrl =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

const SendRequest = ({ endpoint, body, success, failed, end, method }) => {
  switch (method) {
    case "post" || "POST":
      axios
        .post(serverUrl + endpoint, body)
        .then(success)
        .catch(failed)
        .finally(end);
      break;
    case "get" || "GET":
      axios
        .get(serverUrl + endpoint, { params: body })
        .then(success)
        .catch(failed)
        .finally(end);
      break;
    case "put" || "PUT":
      axios
        .put(serverUrl + endpoint, body)
        .then(success)
        .catch(failed)
        .finally(end);
      break;
    case "delete" || "DELETE":
      axios
        .delete(serverUrl + endpoint, { params: body })
        .then(success)
        .catch(failed)
        .finally(end);
      break;
    default:
      axios
        .get(serverUrl + endpoint)
        .then(success)
        .catch(failed)
        .finally(end);
      break;
  }
};
export default SendRequest;

export const SendRequestThunk = async ({
  endpoint,
  body,
  success,
  failed,
  end,
  method,
}) => {
  switch (method) {
    case "post" || "POST":
      return await axios
        .post(serverUrl + endpoint, body)
        .then(success)
        .catch(failed)
        .finally(end);

    case "get" || "GET":
      return await axios
        .get(serverUrl + endpoint, { params: body })
        .then(success)
        .catch(failed)
        .finally(end);

    case "put" || "PUT":
      return await axios
        .put(serverUrl + endpoint, body)
        .then(success)
        .catch(failed)
        .finally(end);

    case "delete" || "DELETE":
      return await axios
        .delete(serverUrl + endpoint, { params: body })
        .then(success)
        .catch(failed)
        .finally(end);

    default:
      return await axios
        .get(serverUrl + endpoint)
        .then(success)
        .catch(failed)
        .finally(end);
  }
};

export const getRequest = async ({
  endpoint,
  body,
  success,
  failed,
  end,
  method,
}) => {
  return fetch(serverUrl + endpoint, { params: body });
};
