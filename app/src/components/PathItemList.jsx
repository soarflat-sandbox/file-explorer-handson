import React from 'react';
import PropTypes from 'prop-types';

const PathItemList = ({ pathItemList = [] }) => (
  <table>
    <thead>
    <tr>
      <th>Name</th>
      <th>Modified</th>
    </tr>
    </thead>
    <tbody>
    {
      pathItemList.map(pathItem =>
        <PathItem
          {...pathItem}
        />
      )
    }
    </tbody>
  </table>
);

PathItemList.propTypes = {
  pathItemList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    modified: PropTypes.string.isRequired,
    isDirectory: PropTypes.bool.isRequired
  }).isRequired).isRequired
};

const PathItem = ({ name, modified, isDirectory }) => (
  <tr>
    <td>
      {name}{isDirectory ? "/" : ""}
    </td>
    <td>
      {modified}
    </td>
  </tr>
);

PathItem.propTypes = {
  name: PropTypes.string.isRequired,
  modified: PropTypes.string.isRequired,
  isDirectory: PropTypes.bool.isRequired
};

export default PathItemList