// @flow

import requests from "./requests";

export function fetchUsers(data: { lastUser: number }, success: Function = () => {}, reject: Function = () => {}) {
  const {
    lastUser = 0
  } = data;
  requests(`users?since=${lastUser}`, 'get', {}, {}).then((res) => {
    console.log('RES', res);
    success(res);
  }).catch((err) => {
    console.log("ERR", err);
    reject(err);
  });
}

export function getFollowers(data: { userName: string }, success: Function = () => {}, reject: Function = () => {}) {
  const {
    userName = ''
  } = data;
  // TODO sorry I don't have enough time to do pagination
  requests(`users/${userName}/followers?per_page=1000`, 'get', {}, {}).then((res) => {
    console.log('RES', res);
    success(res);
  }).catch((err) => {
    console.log("ERR", err);
    reject(err);
  });
}
