# A simple way to make a basic filter on your page


One page of my website can be very long, so I decided to Improve user interaction adding a simple filter that hide/show divs based on what is selected.


## Where you can use

- This filter is usable on a page, on the repeter or where you want, olso in ohter builders the most important thing is to have the possibility to add attribute to the object container div, and Oxygen is the best one for this.

- You cannot use it in paginate loop, or better, if the page is refreshed the filter is resetted to, if you refresh the content via js you need to invoke the filter function and hope it work (I didn't tested in this way).

- You can use ACF costum field adding it dynamically as attribute

This script basically hide the div that not contain the attribute selected, in case of multiple attribute (you can add with comma separator) the filter will show the div if one of the values is true.

**There isn't any relationship rules (or,and).**

You can use multiple value for the attribute separating by comma with resulting html like this `<div class"what you want" attributeName="Value1,Value2,Value3">`


## How to use it

This script need two block code, one custom css class, and div with attribute setted up.

# 1) Add the filter box

A costum code block where you want and past this code:

`<button type="button" onclick="st-filter()">Filter!</button>`

This is needed to fire the filter function, in this div will be append all the checkboxs to filter the data, but this is done by js after reading all the data attribute values, you can add your own costum css code to style as you want.

![filter div codeblock](https://user-images.githubusercontent.com/92517402/183067878-1686016a-3d74-4d1e-b870-4e796abe025d.png)

**Take note of the codeblock id, or rename as you want**

note: in my case filter button is displaye before the option checkbox, if you want it before you can add a simple div with a custom id `<div class"what you want" id="filter-checkbox></div>` and use this div id in `PUT_YOUR_CODEBLOCK_ID` (see after where)

# 2) Add the script function

In the end of the page, or anyway after the content with the attributes you need to add another and past the code you will find on `script.js` file

## 2-1)

Replace `PUT_YOUR_ATTRIBUTE_NAME` (twice time) with the attribute you inserted on the div and 
repalace `PUT_YOUR_CODEBLOCK_ID` with the filter buttom code block ID (the one you added before)


# 3) Add the class to hide unselected attributes

You can do it in many ways, in my case I added a new css file, to the item that don't respect the filter will be applied the .flt-invisible class, in my case the class is simply:
`
.flt-invisible{
	display: none;
}
`
I suggest you to add new styleshett cause you can add olso the class to style the filter button and checkbox.

# 4) Add attribute to the divs you want to be filter

To add an attribute you can choose the div, go to **Advanced->Attributes** click on attribute.

![addAttributes](https://user-images.githubusercontent.com/92517402/183071290-973dc5ba-c86c-4c98-b2e5-fb2497bb9202.jpg)


# 5) Save an test It

If everything is ok, you shuld be able to see checkbox next to the button and something like this:

**All attributes selected**

![allSelected](https://user-images.githubusercontent.com/92517402/183073626-6bbe9b4b-6a03-4dde-9303-09b882812d29.jpg)

**Only bar selected**

![onlyBar](https://user-images.githubusercontent.com/92517402/183073875-b3715027-80bb-4700-9aab-a6302b9f3aac.jpg)

**Only foo selected**

![onlyFoo](https://user-images.githubusercontent.com/92517402/183074006-c2114d0c-9689-4910-ab7c-d0a3e0a4a5b7.jpg)

**No One Selected**

![noOneSelected](https://user-images.githubusercontent.com/92517402/183074132-2c76bdee-8fb5-4661-976e-264331751f75.jpg)


