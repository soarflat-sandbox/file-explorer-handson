import { combineReducers } from 'redux';
import folderTreeItem from './folderTreeItem';
import pathItemList from './pathItemList';

// 分割したreducersをcombineReducersで結合
const explorerApp = combineReducers({
  folderTreeItem,
  pathItemList
});

export default explorerApp