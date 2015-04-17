var tabs = Ti.UI.createTabGroup();
var win1 = Ti.UI.createWindow({
backgroundColor: '#D2B45B'
});
var tab1 = Ti.UI.createTab({
title: 'Dan's Info',
window: win1
});
var picofme = Ti.UI.createImageView({
height: '30%',
width: '30%',
top: '15%'
});
myPic.image = '\picofme.jpg';
var view1 = Ti.UI.createView({
backgroundColor: '#CCCCCC',
top: '40%',
width: '80%',
height: '15%'
});
var name = Ti.UI.createLabel({
color: '#000000',
font: {fontSize: '25dp'},
text: 'Dan Hart',
top: '5%'
});
var school = Ti.UI.createLabel({
color: '#000000',
font: { fontSize: '20dp'},
text: 'University of Idaho',
top: '33%'
});
var major = Ti.UI.createLabel({
color: '#000000',
font: { fontSize: '15dp'},
top: '66%',
text: 'Information Systems'
});
var contactData = [{ title: 'Phone: (208)320-8497', color: '#000000'}, {title:'E-mail: hart6069@vandals.uidaho.edu', color: '#000000'}];
var contactTable = Ti.UI.createTableView({
data: contactData,
headerTitle: 'Contact Info',
backgroundColor: '#CCCCCC,
top: '65%',
width: '80%',
height: '20%'
});
var win2 =Ti.UI.createWindow({
backgroundColor: '#D2B45B'
});
var tab2 = Ti.UI.createTab({
title: 'Portfolio',
window: win2
});
var view2 = Ti.UI.createView({
backgroundColor: '#CCCCCC',
height: '80%',
width: '80%'
});
var bio = Ti.UI.createLabel({
font: {fontSize: '20dp'},
text: 'Hi, My name is Dan Hart and I am currently a student at the University of Idaho, majoring in Information Systems. I will graduate in the Fall of 2015 and am currently looking for employment after I am done with school.'
});
win1.add(name);
win1.add(school);
win1.add(major);
win1.add(view1);
win1.add(picofme);
win1.add(contactTable);
win2.add(bio);
win2.add(view2);
tabs.addTab(tab1);
tabs.addTab(tab2);
tabs.open();
