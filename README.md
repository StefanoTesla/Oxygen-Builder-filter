# A simple way to make a basic filter on your page


One page of my website can be very long, so I decided to Improve user interaction adding a simple filter that hide/show divs based on what is selected.


## Where you can use

- This filter is usable on a page, on the repeter or where you want, olso in ohter builders the most important thing is to have the possibility to add attribute to the object container div, and Oxygen is the best one for this.

- You cannot use it in paginate loop, or better, if the page is refreshed the filter is resetted to, if you refresh the content via js you need to invoke the filter function and hope it work (I didn't tested in this way).

This script basically hide the div that not contain the attribute selected, in case of multiple attribute (you can add with comma separator) the filter will show the div if one of the values is true.

**There isn't any relationship rules (or,and).**

You can use multiple value for the attribute separating by comma with resulting html like this `<div class"what you want" attributeName="Value1,Value2,Value3">`


## How to use it

This script need two block code, one custom css class, and div with attribute setted up.

# 1) Add the filter box

a costum code block where you want and past this code:

`<button type="button" onclick="st-filter()">Filter!</button>`

This is needed to fire the filter function, at the same time, in this div will be append all the checkbox to filter the data, but this is done by js after reading all the data attribute values, you can add your own costum css code to style as you want.

![filter div codeblock](https://user-images.githubusercontent.com/92517402/183067878-1686016a-3d74-4d1e-b870-4e796abe025d.png)

**Take note of the codeblock id, or rename as you want**



# 2) Add the script function

In the end of the page, or anyway after the content with the attributes you need to add another and past the code you will find on `script.js` file

## 2-1)

Replace PUT_YOUR_ATTRIBUTE_NAME (twice time) with the attribute you inserted on the div
Repalace PUT_YOUR_CODEBLOCK_ID with the filter buttom code block ID (the one you added before)


# 3) Add the class to hide unselected attributes

You can do it in many ways, in my case I added a new css file, to the rejected item will be applied the .flt-invisible class, in my case the class is simply:
`
.flt-invisible{
	display: none;
}
`

4) Save an test It
