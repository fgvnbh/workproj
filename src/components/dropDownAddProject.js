import React, {Component} from 'react'
import SingleUser from './singleUser'
class dropDown extends Component{
    constructor()
    {
        super();
        this.state={
            showMenu: false,
            showSecMenu:false,
            someobj:[{picture:'https://media.istockphoto.com/photos/icon-of-a-businessman-avatar-or-profile-pic-picture-id474001892?k=6&m=474001892&s=612x612&w=0&h=6g0M3Q3HF8_uMQpYbkM9XAAoEDym7z9leencMcC4pxo=',fullName:'rand name', department:'some dep'},{picture:'https://media.istockphoto.com/photos/icon-of-a-businessman-avatar-or-profile-pic-picture-id474001892?k=6&m=474001892&s=612x612&w=0&h=6g0M3Q3HF8_uMQpYbkM9XAAoEDym7z9leencMcC4pxo=',fullName:'rand name2', department:'some dep2'},{picture:'https://media.istockphoto.com/photos/icon-of-a-businessman-avatar-or-profile-pic-picture-id474001892?k=6&m=474001892&s=612x612&w=0&h=6g0M3Q3HF8_uMQpYbkM9XAAoEDym7z9leencMcC4pxo=',fullName:'rand name3', department:'some dep3'}],
            userlist:[]
        };
        this.showMenu=this.showMenu.bind(this);
        this.closeMenu=this.closeMenu.bind(this);
        this.showSecMenu=this.showSecMenu.bind(this);
    }
    showSecMenu(event){
        event.preventDefault();
        this.setState({showSecMenu:true},()=>{document.addEventListener('click',this.closeMenu);});
    }
    showMenu(event){
        event.preventDefault();
        this.setState({showMenu:true},()=>{document.addEventListener('click',this.closeMenu);});
    }
    pushList(smt)
    {
        this.setState(prev => ({
            userlist: [
                ...prev.userlist,smt
            ]
        }));
    }
    delItemList(smt)
    {
        this.setState(prev=>({
            userlist:[
                ...prev.userlist.filter(function (val) {
                    return JSON.stringify(val)!==JSON.stringify(smt);
                })
            ]
        }));
    }
    closeMenu(event)
    {
        if(!this.dropdownMenu.contains(event.target)&&this.dropdownMenu2?!this.dropdownMenu2.contains(event.target):!this.dropdownMenu.contains(event.target))
        this.setState({showMenu:false,showSecMenu:false},()=>{document.removeEventListener('click',this.closeMenu);});
    }
    componentDidMount(){
        this.rightprop=window.getComputedStyle(document.getElementById('dropdownbutton'),null).getPropertyValue('margin-right');
    }
    render()
    {
        return(
            <div>
                <button className='dropdownbutton' id='dropdownbutton' onClick={this.showMenu}>dropDown</button>
                {
                    this.state.showMenu ?
                        (
                            <div className='menu' id='firstmenu' ref={(element)=>{this.dropdownMenu=element;}} style={{marginRight:this.rightprop, marginLeft:'auto'}}>
                                <div className='uppercolor'><input type='text' className='Add-Project-Copy-6' placeholder='Add Project'/></div>
                                <div className='innermenu'>
                                    <input type='text' className='projtitlediv' placeholder='Project Title: '/>
                                    <input type='text' className='projnameinp' placeholder='Workload 2.0'/>
                                    <input type='text' className='addmembersinp' placeholder='Add members: '/>
                                    <img src={require('../img/ic-add-active.svg')} className='memberaddactive' alt='add' id='memberaddactive' onMouseDown={()=>{this.sectopprop=document.documentElement.clientWidth-document.getElementById('memberaddactive').getBoundingClientRect().right}} onClick={this.showSecMenu}/>
                                    <div className='userslist'>
                                        {this.state.userlist.map((user) => (
                                            <SingleUser {...user} listt={this.delItemList.bind(this)}/>
                                        ))}
                                    </div>
                                    <div className='underline'/>
                                        <input type='text' className='stepsinp' placeholder='Step 1 of 2'/>
                                        <button className='nextbutton'>Next</button>
                                </div>
                            </div>
                        ) :
                        (
                            null
                        )}

                {
                    this.state.showSecMenu ?
                        (
                            <div className='secmenu' id='secondmenu' ref={(element)=>{this.dropdownMenu2=element;}} style={{marginRight:this.sectopprop+88,marginLeft:'auto',marginTop:'-446px'}}>
                                <div className='uppercolor2'>
                                    <input type='text' className='secmenusearch' placeholder='Search...'/>
                                    <select className='departmentslist'>
                                        <option>All Departments</option>
                                        <option>IOS</option>
                                        <option>Android</option>
                                        <option>Web</option>
                                        <option>Design</option>
                                        <option>QA</option>
                                        <option>PM</option>
                                        <option>Sales</option>
                                    </select>
                                </div>

                                <div className='userslist2'>
                                    {this.state.someobj.map((user) => (
                                        <SingleUser {...user} listt={this.pushList.bind(this)}/>
                                    ))}
                                </div>
                            </div>
                        ) :
                            (
                                null
                            )}
            </div>
        )
    }
}
export default dropDown