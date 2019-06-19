import '../App.css';
import React,{Component} from 'react'
import DropDown from './dropDownAddProject'
class Main extends  Component
{
    validate()
    {
        let login=document.getElementById('login').value;
        let emailReg=/[A-Za-z]+\.[A-Za-z]+@(pettersonapps\.com)$/;
        let password=document.getElementById('password').value;
        let passwordReg=/[A-Za-z]+\.[A-Za-z]+@(pettersonapps\.com)$/;
        if(emailReg.test(login)===true&&passwordReg.test(password)===true)
        {
            console.log('congrats');
        }
        else
        {
            document.getElementById('login').value='';
            document.getElementById('password').value='';
        }
    }
    passVisible()
    {
        let pass=document.getElementById('password');
        if(pass.type==="password"){
            pass.type="text";
        }
        else {
            pass.type="password";
        }
    }
    render()
    {
        return(
            <div>
                <img src={require('../img/pa-logo-big.svg')}
                     className="pa_logo_big" alt='smt'/>
                <input id='login' type='text' className='Rectangle-Copy-167' placeholder='pasquale_larkin@yandex.ru'/>
                <div><input type='password' className='Rectangle-Copy-168' placeholder='Password' id='password'/><div className='divForSignIN'><img src={require('../img/ic-eye-passive.svg')}
                                                                                                            className="ic_eye_passive" alt='smt' onClick={this.passVisible.bind(this)}/></div></div>
                <div className='divForSignIN'>
                    <button className='Rectangle'  onClick={()=><DropDown/>}>SIGN IN</button>
                </div>
            </div>
        );
    }
}
export default Main;