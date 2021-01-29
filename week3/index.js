// Import Article
import Article from './Article.js';

// Pass the values to the constructor method of Article
const a = new Article (
  {
    title: "This is the title!",
    author: "Me",
    text: "This is an example article!"
  }
);

// Shows its HTML on the console
console.log(a.render() );
//didnt think this was supposed to be here 
class ArticleTitle {

  constructor(title) {
    this.props = {};
    this.props.title = title;
  }

  render() {
    return `<h1>${this.props.title}</h1>`;
  }

}