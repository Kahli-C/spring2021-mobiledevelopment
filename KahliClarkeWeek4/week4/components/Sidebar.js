import Component from './Component.js';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let responseHtml = '';
    this.props.menu.forEach((item) => {
      // TODO: Add concatenate the value of each item to the variable responseHtml. Each should be wrapped in a <li></li>
      // concatenating li to item value and return string
      responseHtml = responseHtml + `<li>${item}</li>`;
    });
    return responseHtml;
  }
}

export default Sidebar;
