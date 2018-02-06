import { connect } from 'react-redux';
import { folderTreeItemClickEvent, toggleExpandClickEvent } from '../actions';
import FolderTreeItem from '../components/FolderTreeItem';

const mapStateToProps = state => {state.folderTreeItem};

// イベントハンドラ関数とactionをマッピング
const mapDispatchProps = (dispatch) => ({
  onFolerClick: (fullpath) => {
    console.log(`==> イベント発行(コンテナ) folderTreeItemClickEvent fullpath=${fullpath}`);
    dispatch(folderTreeItemClickEvent(fullpath));
  },
  onExpandClick: (fullpath, isExpanded) => {
    console.log(`==> イベント発行(コンテナ) toggleExpandClickEvent fullpath=${fullpath}`);
    dispatch(toggleExpandClickEvent(fullpath, isExpanded));
  }
});

const FolderTreePanel = connect(
  mapStateToProps,
  mapDispatchProps
)(FolderTreeItem);

export default FolderTreePanel;