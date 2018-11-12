export default function createSearchNode(data, textValue, parentNode, callback) {
  const { sources } = data;
  const wrapper = document.createDocumentFragment();
  const selectNode = document.createElement('select');
  const label = document.createElement('label');
  label.textContent = textValue;
  const defaultOption = {
    name: 'All sources',
    id: '',
  };

  callback(defaultOption, selectNode);
  sources.map(source => callback(source, selectNode));

  wrapper.appendChild(label);
  wrapper.appendChild(selectNode);
  parentNode.appendChild(wrapper);
  return selectNode;
}
