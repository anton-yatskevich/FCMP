function createSelectNode(data, textValue, parentNode, callback) {
  const { sources } = data;
  const defaultOption = {
    name: 'All sources',
    id: '',
  };

  const wrapper = document.createDocumentFragment();
  const selectNode = document.createElement('select');
  const label = document.createElement('label');
  label.textContent = textValue;

  callback(defaultOption, selectNode);
  sources.map(source => callback(source, selectNode));

  wrapper.appendChild(label);
  wrapper.appendChild(selectNode);
  parentNode.appendChild(wrapper);

  return selectNode;
}
