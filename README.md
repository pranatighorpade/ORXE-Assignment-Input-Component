# ORXE-Assignment-Input-Component

## Following are the steps performed to build and execute input component:
1.	npm install -g @orxe3/cli 
2.	orxe new component-workspace my-first-project 
3.	cd my-first-project 
4.	orxe generate c input
5.	orxe serve

## Following are the steps to reuse the orxe-input component in another component is as follow:

1.	npm install 
2.	npm install @my-first-project/input@0.0.3
3.	Add the orxe input as required for the differnt variation:

    --Default Input:  <orxe-input label="Username" type="string" value="" placeholder="Placeholder"> </orxe-input>

    --Active Input: <orxe-input label="Username" type="string" value="" isActive="true" placeholder="Placeholder"> </orxe-input>

    --Error Input: <orxe-input label="Username" type="string" value="" required="true" isError="true" placeholder="Placeholder"> </orxe-input>

    --FIlled Input: <orxe-input label="Username" type="string" value="Tavisca" isFilled="true" placeholder="Placeholder "> </orxe-input>

    --On Focus Input: <orxe-input label="Username" type="string" value="" isFocus="true" placeholder="Placeholder"></orxe-input>

   --Disabled Input: <orxe-input label="Username" type="string" value="" disabled="true" placeholder="Placeholder"> </orxe-input>

    --Mandatory Input: <orxe-input label="Username*" type="string" value="" placeholder="Placeholder">
    </orxe-input>

    --Readonly Input: <orxe-input label="Username" type="string" value="Tavisca" readonly="true" placeholder="Placeholder"> </orxe-input>

4.	orxe serve

## For more information kindly refer the Technical Specification document [https://github.com/pranatighorpade/ORXE-Assignment-Input-Component/blob/master/Technical-specification-document.docx]
