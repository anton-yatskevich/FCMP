import './index.css';

class NewsSourcesCtrl {
  createSelectNode({ sources }) {
    this.wrapper = document.getElementById('select-wrapper');
    this.sources = sources;
    const defaultOption = {
      name: 'All sources',
      id: '',
    };
    const wrongSource = {
      name: 'WRONG SOURCE',
      id: 'something',
    };
    const wrapper = document.createDocumentFragment();
    this.selectNode = document.createElement('select');
    const label = document.createElement('label');

    label.textContent = 'Select news source: ';
    this.createSelectOption(defaultOption, this.selectNode);
    this.createSelectOption(wrongSource, this.selectNode);
    this.sources.map(source => this.createSelectOption(source, this.selectNode));
    wrapper.appendChild(label);
    wrapper.appendChild(this.selectNode);
    this.wrapper.appendChild(wrapper);

    return this.selectNode;
  }

  createSelectOption(source) {
    const { name, id } = source;
    const option = document.createElement('option');
    option.value = id;
    option.textContent = name;
    this.selectNode.appendChild(option);
  }
}

export default NewsSourcesCtrl;
