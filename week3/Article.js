// Import Component
import Component from './Component.js';

// Article is a child object of Component
class Article extends Component {

  constructor (title, author, text) {
    //used the super for the extension of componenet
    //by making all the variables defined here as three seperate entities.
    super(title, author, text);
   
  
    
  }

  render () {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
    //returned only the values for title author and text here
    return `
        ${this.props.title}
        ${this.props.author}
        ${this.props.text}
      `;
    
  }

}

export default Article;
