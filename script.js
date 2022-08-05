const attributeName = 'PUT_YOUR_ATTRIBUTE_NAME'
const filterDiv = document.querySelector("#PUT_YOUR_CODEBLOCK_ID") // keep the #
const elements = document.querySelectorAll('['+attributeName+']');
let obj = {};


elements.forEach(el => {
  const keys = el.getAttribute(attributeName).split(',');
  keys.forEach(key => {
    if(obj[key] === undefined){
      obj[key] = [];
    }
    obj[key].push(el.id)
  })
})

Object.keys(obj).forEach(key => {
            const label = document.createElement('label');
            label.setAttribute("for", key);
           
            // create a checkbox
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "flt-checkbox";
            checkbox.classList.add("filter-checkbox");
            checkbox.value = key;
            checkbox.id = key;
            checkbox.checked = true;

            // place the checkbox inside a label
            label.appendChild(checkbox);
            // create text node
            label.appendChild(document.createTextNode(key));
            // add the label to the root
            filterDiv.appendChild(label);
        });


function st-filter(){
    let v = [];
    let n = [];
    let a = filterDiv.querySelectorAll(".filter-checkbox");
    a.forEach(element => {
            obj[element.id].forEach(divid => {
                document.querySelector("#" + divid).classList.remove("flt-invisible");
                if(element.checked){
                    v.push("#"+divid);
                } else {
                    n.push("#"+divid);
                }
            })
    });

    v = new Set(v);
    v = Array.from(v);

    v = Object.values(v);
    n = new Set(n);
    n = Array.from(n);

    let d = n.filter(x => !v.includes(x));

    d.forEach(x => {
        document.querySelector(x).classList.add("flt-invisible");

    })
}
