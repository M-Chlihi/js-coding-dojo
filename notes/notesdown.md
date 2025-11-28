# Js Notes

# creat products 2 methodes:

methode 1

```JS
for (let i = 0; i < 10; i++) {
  let myele = document.createElement("div");
  let myheadele = document.createElement("h1");
  let mytextele = document.createElement("p");

  let myheader = document.createTextNode("Product Title " + i);
  let myparag = document.createTextNode("this is one of the best product " + i);

  // append header to the div
  myheadele.appendChild(myheader);
  myele.appendChild(myheadele);

  // append parag to the div
  mytextele.appendChild(myparag);
  myele.appendChild(mytextele);

  myele.className = "product";
  document.body.appendChild(myele);
}
```

---

methode 2

```JS
const frag = document.createDocumentFragment();
for (let i = 0; i < 10; i++) {
let mydiv = document.createElement("div");
   mydiv.className = "product";
   mydiv.innerHTML = `
    <h1>Product Title ${i}</h1>
    <p>This is one of the best products ${i}</p>
   `
   frag.appendChild(mydiv)
}
document.body.appendChild(frag);
```
# EVENTS IN JS
### click event
```JS
// first form 
document.getElementById("but1").onclick = function(){
      console.log("Button clicked!");
}
// second form using addEventListener
const btn = document.getElementById("but1");
btn.addEventListener("click", function(){
          console.log("Button clicked succesfully!");
})
```














<!--
# Markdown Cheat Sheet
---
## Headings

## H2 - Heading 2

<<<<<<< HEAD
=======
### H3 - Heading 3

#### H4 - Heading 4
---

>>>>>>> b7cd295ef71fce9bd477bb639087f2128879531b
## Text Formatting

_italic_ - Italic
**bold** - Bold
**_bold italic_** - Bold Italic
~~strikethrough~~ - Strikethrough

---

### Unordered List

- Item 1 - Unordered List Item
- Item 2
  - Subitem 2.1 - Nested Unordered List
  - Subitem 2.2

### Ordered List

1. First item - Ordered List Item
2. Second item
   1. Subitem 2.1 - Nested Ordered List
   2. Subitem 2.2

<<<<<<< HEAD
## Links and Images
=======
### Task List

- [ ] Task not done - Task List
- [x] Task done - Task Completed

---

# Links and Images
>>>>>>> b7cd295ef71fce9bd477bb639087f2128879531b

[Link text](https://example.com) - Hyperlink

---

## Code

## Inline Code

`inline code` - Inline Code

### Code Block

```JS
console.log("Hello World");
console.log("hey brother");
<<<<<<< HEAD
``` -->
=======
```
>>>>>>> b7cd295ef71fce9bd477bb639087f2128879531b
