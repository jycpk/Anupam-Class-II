b = document.getElementById("btn1");


mylist = ['mango', 'apple', 'grapes', 'watermelon', 'guava', 'banana', 'orange']

myCars = ['maruti', 'mahindra', 'tata', 'toyota', 'honda', 'bmw']


b.addEventListener('click', myFunction)

function myFunction() {
  for (let i = 0; i<myCars.length; i++) {
    const item = document.createElement("li");
    item.innerText = myCars[i];
    document.body.appendChild(item);
  }
}

