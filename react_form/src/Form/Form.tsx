import { FormEvent,ChangeEvent, useState } from 'react'
import InputUser from '../InputUser/InputUser'
import InputEmail from '../InputEmail/InputEmail'
import InputNumber from '../InputNumber/InputNumber'
import Gender from '../Gender/Gender'
import Message from '../Message/Message'
import Button from '../Button/Button'
import type { UserInput } from '../Type/type'
function Form() {
  //state  for handle multiple input
  const [userInput,setUserInput] = useState<UserInput>({username:"",useremail:"",usernumber:"",gender:"",usermessage:""});
  // if the rest of state true the form will not be submit 
  const [userTrue,setUserTrue] = useState(false);
  const [emailTrue,setEmailTrue] = useState(false);
  const [numberTrue,setNumberTrue] = useState(false);
  const [messageTrue,setMessageTrue] = useState(false);
  const [genderTrue,setGenderTrue] = useState(false);
  // for handle multiple input
  const onHandleInputs = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    let {value ,name} = e.target;
    setUserInput((prev:UserInput) => ({...prev, [name]:value}));
    
  }
  //handle the form submition
    const onFormSubmit = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      //destructring the userinput object
      let {gender,useremail,usermessage,username,usernumber} = userInput;
      // user regex
      let userRegex = /^[a-z]+\_[a-zA-Z]+[0-9]{2,5}$/;
      let matchUser = username.match(userRegex);
      if(matchUser){
        setUserTrue(false)
      }else{
        setUserTrue(true)
      }

      //email regex
      let emailRegex = /^[a-zA-Z0-9\_\.\%\+\-]+\@[a-zA-Z0-9\.\-]+\.[a-z]{2,7}$/;
      let matchEmail  =useremail.match(emailRegex); 
      if(matchEmail){
        setEmailTrue(false);
      }else{
        setEmailTrue(true);
      }

      //phone number regex
      let phoneNumRegex = /^[0-9]{11}$/;
      let matchPhoneNum = usernumber.match(phoneNumRegex);
      if(matchPhoneNum){
        setNumberTrue(false)
      }else{
        setNumberTrue(true)
      }

      //message regex
      if(usermessage !== "" && usermessage.length>10){
        setMessageTrue(false)
      }else{
        setMessageTrue(true);
      }
      //validate gender
      if(gender !== ""){
        setGenderTrue(false);
      }else{
        setGenderTrue(true);
      }

      if(gender=== "" || !matchEmail || usermessage === "" || !matchUser || !matchPhoneNum){
        // if the form was not submiting
        alert("Please fill the form");
      }else{
        // if the form has submitted
        alert("Your Form has Submitted.");
      };
    }
  return (
    <>
    <h1>Form Validation</h1>
        <form action="" className='form-container' onSubmit={ onFormSubmit}>
        <InputUser name={userInput.username} upUser={onHandleInputs} error={userTrue}/>
        <InputEmail email={userInput.useremail} upEmail={onHandleInputs} error={emailTrue}/>
        <InputNumber number={userInput.usernumber} upNumber={onHandleInputs} error={numberTrue}/>
        <Gender gender={userInput.gender} upGender={onHandleInputs} error={genderTrue} />
        <Message message={userInput.usermessage} upMessage={onHandleInputs} error={messageTrue}/>
        <Button/>
        </form>
    </>
  )
}

export default Form
