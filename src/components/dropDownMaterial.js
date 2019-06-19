import React, {Component} from 'react'
import Popover from '@material-ui/core/Popover'
import Popper from '@material-ui/core/Popper'
class dropDown extends Component{
    constructor()
    {
        super();
        this.state={
            showMenu: false,
            showSecMenu:false,
        };
        this.showMenu=this.showMenu.bind(this);
        this.closeMenu=this.closeMenu.bind(this);
        this.showSecMenu=this.showSecMenu.bind(this);

    }
    showSecMenu(event){
        event.preventDefault();
        this.anchorEl2=event.currentTarget;
        this.setState({showSecMenu:true},()=>{document.addEventListener('click',this.closeMenu);});
    }
    showMenu(event){
        event.preventDefault();
        this.anchorEl=event.currentTarget;
        this.setState({showMenu:true},()=>{document.addEventListener('click',this.closeMenu);});
    }
    closeMenu(event)
    {
       if(!this.dropdownMenu.contains(event.target)&&!this.dropdownMenu2.contains(event.target))
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
                    <Popover
                        ref={(element)=>{this.dropdownMenu=element;}}
                        anchorEl={this.anchorEl}
                        open={this.state.showMenu}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        style={{
                            width:'400px',
                            height:'657px',
                            borderRadius: '8px',
                            position:'absolute',
                        }}
                    >
                        <div className='uppercolor'><input type='text' className='Add-Project-Copy-6' placeholder='Add Project'/></div>
                        <div className='innermenu'>
                            <input type='text' className='projtitlediv' placeholder='Project Title: '/>
                            <input type='text' className='projnameinp' placeholder='Workload 2.0'/>
                            <input type='text' className='addmembersinp' placeholder='Add members: '/>
                            <img src={require('../img/ic-add-active.svg')} className='memberaddactive' alt='add' id='memberaddactive' onClick={this.showSecMenu}/>
                            <div className='userslist'></div>
                            <div className='underline'/>
                            <input type='text' className='stepsinp' placeholder='Step 1 of 2'/>
                            <button className='nextbutton'>Next</button>
                        </div>
                    </Popover>
                    <Popper
                        style={{
                            width:'400px',
                            height:'490px',
                            backgroundColor:'#404a65',
                            right:'20px',
                            position:'absolute',
                        }}
                        open={this.state.showSecMenu}
                        placement="top-start"
                        disablePortal={true}
                        anchorEl={this.anchorEl2}
                        modifiers={{
                            flip: {
                                enabled: true,
                            },
                            preventOverflow: {
                                enabled: true,
                                boundariesElement: 'scrollParent',
                            },
                        }}
                    >
                    </Popper>
            </div>
        )
    }
}
export default dropDown