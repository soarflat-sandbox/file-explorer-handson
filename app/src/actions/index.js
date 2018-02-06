/* アクションを定義する */

export const EXPAND_ROOT = 'EXPAND_ROOT';
export const TOGGLE_EXPAND = 'TOGGLE_EXPAND/折畳イベント';
export const SHOW_PATH_LIST = 'SHOW_PATH_LIST';

export const openButtonClickEvent = (rootpath) => ({
  // typeフィールドには一意な識別子をいれる
  type: EXPAND_ROOT,
  rootpath
});

export const toggleExpandClickEvent = (fullpath, isExpanded) => ({
  type: TOGGLE_EXPAND,
  fullpath,
  isExpanded
});

export const folderTreeItemClickEvent = (fullpath) => ({
  type: SHOW_PATH_LIST,
  fullpath
});