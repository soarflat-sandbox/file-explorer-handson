import React from 'react';
import { connect } from 'react-redux';
import { openButtonClickEvent } from '../actions';

const inputStyle = { 'width': '300px' };
const AddressBar = ({ dispatch }) => {
  let folderPath;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!folderPath.value.trim()) {
          return;
        }
        console.log(`==> イベント発行(コンテナ) openButtonClickEvent rootPath=${folderPath.value}`);
        dispatch(openButtonClickEvent(folderPath.value));
      }}>
        <input style={inputStyle} ref={node => {
          folderPath = node
        }}/>
        <button type="submit">
          開く
        </button>
      </form>
    </div>
  )
};

// folderTreeItemのstateを切り出し
const mapStateToProps = (state) => {
  return {
    folderTreeItem: state.folderTreeItem
  }
};

// folderTreeItemのstateとcontainerを結合
const AddressBarPanel = connect(mapStateToProps)(AddressBar);

export default AddressBarPanel