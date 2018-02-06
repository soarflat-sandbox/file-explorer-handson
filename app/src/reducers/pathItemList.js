import { SHOW_PATH_LIST } from '../actions';

const initialState = [];

const pathItemList = (state = initialState, action) => {
  console.log('--イベント(action)の内容---');
  console.log(JSON.stringify(action));
  console.log('--------------------------');
  console.log('--変更前の状態(state)------');
  console.log(state);
  console.log('--------------------------');
  switch (action.type) {
    case SHOW_PATH_LIST: // 'フォルダの一覧表示イベント'
      let fullpath = action.fullpath;
      console.log(`* 表示するフォルダパス=${fullpath}`);
      const fs = window.require('fs');
      const path = window.require('path');
      let names = fs.readdirSync(fullpath);
      let pathItemList = [];
      names.map(name => {
        let stat = fs.statSync(path.join(fullpath, name));
        let modified = toLocaleTimeString(stat.mtime);
        let isDirectory = stat.isDirectory();
        pathItemList.push(createPathItem(name, modified, isDirectory))
      });
      console.log(`* 表示するパス一覧の数=${pathItemList.length}`);
      return pathItemList;
    default:
      return state;
  }
};

const createPathItem = (name, modified, isDirectory) => {
  return {
    name: name,
    modified: modified,
    isDirectory: isDirectory,
  }
};

const toLocaleTimeString = (date) => {
  return [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  ].join('/') + ` ${date.toLocaleTimeString()}`;
};

export default pathItemList
