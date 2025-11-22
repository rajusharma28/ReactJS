// const header1 =document.createElement('h1');
// header1.innerText="coder Army";
// header1.style.backgroundColor="blue";
// header1.style.fontSize="25px";
// header1.style.color="white";



//  const header2 =document.createElement('h2');
//  header2.innerText="Hello coder";
// header2.style.backgroundColor="red";
// header2.style.fontSize="25px";
// header2.style.color="white";

//  const root =document.getElementById("root");
//   root.append(header1);
//   root.append(header2);




// const root = document.getElementById("root");
// // Append to root
// root.append(header1);
// root.append(header2);

  
const React = {
  createElement: function (tag, style, children) {
    const element = document.createElement(tag);

    if(typeof children ==='object'){
        for(let val of children)
            element.append(val);
    }else
        element.innerText=children;
    element.innerText = children;

    // Apply styles
    for (let key in style) {
      element.style[key] = style[key];
    }

    return element;
  }
}; 

const RecatDOM ={
    render:function(element,root){
        root.append(element);
    }
}


// Create elements
const header1 = React.createElement('h1', { fontSize: "30px", backgroundColor: "blue", color: "red" }, "Hello Coder Army");
const header2 = React.createElement('h2', { fontSize: "25px", backgroundColor: "red", color: "white" }, "Kaise ho aap sab log");



const l1= React.createElement('li',{},"HTML");
const l2 = React.createElement('li',{},"css");
const l3 = React.createElement('li',{},"js");


const ul =React.createElement('ul',{fontSize:"30px",backgroundColor:"blue",color:"white"},{l1,l2,l3});


RecatDOM.render(header1,document.getElementById('root'));
RecatDOM.render(header2,document.getElementById('root'));
RecatDOM.render(ul,document.getElementById('root'));

