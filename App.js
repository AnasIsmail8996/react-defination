
import './App.css';
function App() {
  return (
    <div>
      <div>
        <h1>What is React?</h1>
        <div style={{textAlign:'center'}}>
        <img  src='https://www.simplilearn.com/ice9/free_resources_article_thumb/React-Frontend_Language.PNG' alt='react-logo'/>
        </div>
        <p  style={{fontSize:'25px'}}>React is a Javascript-Based UI development <br/> library. 
        Facebook and an opne-source developer<br/>  community run it.
        Although React is<br/>  a library rather then a language,
        It is widely used in web development.
        </p>
    </div>
    <hr/>
    <div>
        <h1>Single Page Application vs Multi Page Application</h1>
        <div style={{textAlign:'center', alignItems:'center'}}>
        <img  style={{width:'75%'}}  src='https://www.expertappdevs.com/sitebucket/blog/20230201134713-single-page-application-vs-multipage-app.jpg' alt='single-page vs multiple-page'/>
        </div>
        <p  style={{fontSize:'25px'}}><span>Single Page Application:</span>
        A single-page application is<br/>  an app that works inside a browser and <b>does not require<br/>  page  reloading</b><br/>  during use
        </p>
        <p   style={{fontSize:'25px'}}><span>Mutli Page Application:</span>
        A multi-page application is an app that consist of more than one page and<br/>  <b>requires page reloading every time the content changes</b> during use
        </p>
    </div>
    <hr/>
    <div>
        <h1>React vs Angular</h1>
        <div style={{textAlign:'center'}}>
        <img  src=' https://moweex.com/wp-content/uploads/2022/05/vergleich_angular-vs-reactjs.png' alt='React vs Angular'/>
        </div>

       
        <p  style={{fontSize:'25px'}}><span>React:</span>
            &#8226 React is a JavaScript library, and it is much older compared with Angular. <br/>
            &#8226 ReactJS can be packaged with other progamming libraries. <br/>
            &#8226 It is easier to learn compared Angular.
        </p>
        <p  style={{fontSize:'25px'}}><span>Angular:</span>
            &#8226 Angular is a complete framework. <br/>
            &#8226 Angular is a complete solution in itself. <br/>
            &#8226 Learning  Angular is not easy for beginners. <br/> &nbsp Thus, <br/> it requires lots of training.
        </p>
    </div>
    <hr/>
    <div>
        <h1>Library vs Framework</h1>
        <div style={{textAlign:'center'}}>
        <img  src='  https://miro.medium.com/v2/resize:fit:700/1*00ANLqZE8ygr2u5YXqW6IA.jpeg' alt='React vs Angular'/>
        </div>
       
        <p  style={{fontSize:'25px'}}><span>Library:</span>
        Library is a collection of prewritten code that users can use to optimize tasks.
        </p>
        <p  style={{fontSize:'25px'}}><span>Framework:</span>
        Frameworks is a tool that provides<br/>  ready-made components or solutions that are <br/> customized in order to speed up development.<br/>
        A Framework may include a library
        </p>
    </div>
    <hr/>
    <div>
        <h1>DOM vs Virtual DOM</h1>
        <div style={{textAlign:'center'}}>
        <img style={{width:'75%'}} src='  https://miro.medium.com/v2/resize:fit:1400/1*zwUJnM_DjFn7929Hu6Rrrw.png' alt='React vs Angular'/>
        </div>

       
        <p  style={{fontSize:'25px'}}><span>DOM:</span>
        DOM stands for Document Object Model. <br/> It is a programming interface that allows us to create,<br/>  change or remove elements from the document. <br/><br/>
        &#8226 It updates slower. <br/>
        &#8226 Can directly update HTML. <br/>       
        &#8226 Creates a new DOM if element updates. <br/>
        &#8226 DOM manipulation is very expensive. <br/>
        &#8226 Too much memory waste. <br/>
        </p>
        <p  style={{fontSize:'25px'}}><span>Virtual DOM:</span>
        Virtual Dom is a lightweight JavaScript <br/> representation of the Document Object Model,<br/>  that allow us to create, change or<br/>  remove particular elements or components from the document without effect whole document. <br/> <br/>
        &#8226 It updates faster. <br/>
        &#8226 Cannot update HTML directly. <br/>
        &#8226 Updates the JSX if element updates. <br/>
        &#8226 DOM manipulation is very easy. <br/>
        &#8226 No memory waste.<br/>
        </p>
    </div>
    <hr/>
    <div>
        <h1>One-way Data Binding vs Two-way Data Binding</h1>
        <div style={{textAlign:'center'}}>
        <img style={{width:'75%'}} src='  https://keyua.org/media/blog_images/angular_vs_react_5.png' alt='React vs Angular'/>
        </div>


       
        <p style={{fontSize:'25px'}}><span>One-way Data Binding:</span>
        One-way data binding means the data flows<br/>  in a single direction so that whenever the data<br/>  changes in a component, It also updates the view with new data.
        </p>
        <p  style={{fontSize:'25px'}}><span>Two-way Data Binding</span>
        Two-way data binding means data flows <br/> in both direction, It means any change happens in the  view updates the data <br/> and any change happens in the data updates the view.</p>
    </div>
    </div>
  );
}

export default App;






