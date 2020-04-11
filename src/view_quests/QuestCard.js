import React, {Component} from 'react';
import '../App.css';
import Button from "../Button";

//files
import btn_claim from "../img/UI/buttons/btn_claim.png"

class QuestCard extends Component {
    render() {
        return (
            <div className="questCard">
                <div className="questCardLeft">
                    {/*temporary for visual reference*/}
                    <div className="questCardTitle">Finish Essay</div>
                    <div className="questCardDetails">Due 27/04/20</div>
                </div>
                <div className="questCardRight"><Button init_height={this.props.initial_height} btn_src={btn_claim} btn_id="btn_claim" btn_action="card_claim" btn_size="0.055"/></div>
            </div>
        );
    }
}

export default QuestCard;
