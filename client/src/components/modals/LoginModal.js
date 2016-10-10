import React from "react";
import Modal from "boron/WaveModal";
import LoginPage from "../Login/LoginPage";

class LoginModal extends React.Component{
  constructor(props){
    super(props);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
    showModal(){
        this.refs.modal.show();
    }
    hideModal(){
        this.refs.modal.hide();
    }

  render(){
    return(
      <div>
        <button onClick={this.showModal}>Open</button>
        <Modal ref="modal" keyboard={this.callback}>
            <LoginPage/>
            <button onClick={this.hideModal}>Close</button>
        </Modal>
      </div>
    )
  }
}

export default LoginModal;
