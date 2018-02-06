import { connect } from 'react-redux';
import PathItemList from '../components/PathItemList';

// pathItemListのstateを切り出し
const mapStateToProps = state => {
  return {
    pathItemList: state.pathItemList
  };
};

// pathItemListのstateとcontainerを結合
const PathItemListPanel = connect(mapStateToProps)(PathItemList);

export default PathItemListPanel