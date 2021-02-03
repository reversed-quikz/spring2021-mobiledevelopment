import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
   
    let responseHTML = '';
//this loops until all items have been run through
    this.props.menu.forEach( (item) => {
      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
    //for each item it runs through this will add <li> to the beginning and </li> to the end
      responseHTML += '<li>' + item + '</li>';
    });
    //this takes the entire array of items and adds <ul> to the beginning and </ul> to the end
    responseHTML = '<ul>' + responseHTML + '</ul>';
    return responseHTML;
  }
}

export default Sidebar;
