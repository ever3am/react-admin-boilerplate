import { message } from 'antd';

function isPromise(v) {
  return v && typeof v.then === 'function';
}

const promiseMiddleware = store => next => async action => {
  if (isPromise(action.payload)) {
    const res = await action.payload;
    if (res && res.status === 200 && res.data && res.data.resCode === '200') {
      action.payload = res.data;
    } else {
      action.error = true;
      const resMsg = res && res.data && res.data.resMsg;
      message.error(resMsg);
      action.payload = resMsg;
    }
    store.dispatch(action);

    return;
  }

  next(action);
};

export default promiseMiddleware;
