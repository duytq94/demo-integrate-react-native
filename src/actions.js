export const SEND_NETWORK_FAIL = 'SEND_NETWORK_FAIL';
export const sendNetworkFail = err => {
  return {type: SEND_NETWORK_FAIL, payload: {err}};
};
export const CLEAR_NETWORK_FAIL = 'CLEAR_NETWORK_FAIL';
export const clearNetworkFail = () => {
  return {type: CLEAR_NETWORK_FAIL};
};
