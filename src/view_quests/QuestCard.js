import React, {Component} from 'react';
import '../App.css';
import Button from "../Button";

//files
import btn_claim from "../img/UI/buttons/btn_claim.png"
import coin from "../img/UI/difficulties/small_coin.png"

class QuestCard extends Component {
    render() {
        var diff_coins;
        switch(this.props.quest_diff){
            case "diff_trivial":
                diff_coins = 1;
                break;
            case "diff_easy":
                diff_coins = 2;
                break;
            case "diff_medium":
                diff_coins = 3;
                break;
            case "diff_hard":
                diff_coins = 4;
                break;
            default:
                console.log("Error: difficulty not recorded");
        }
        var i;
        var coins_arr = [];
        for (i=0; i < diff_coins; i++){
            coins_arr.push(<img src={coin} alt={"X"} height={this.props.initial_height*0.025}/>)
        }
        return (
            <div className="questCard">
                <div className="questCardLeft">
                    {/*read title and description from props*/}
                    <div className="questCardTitle">{this.props.quest_name}</div>
                    {/*difficulty from props and above calculations*/}
                    {coins_arr}

                    <div className="questCardDetails">{this.props.quest_details}</div>

                </div>
                <div className="questCardRight"><Button init_height={this.props.initial_height} btn_src={btn_claim} btn_id="btn_claim" btn_action="card_claim" btn_size="0.055" quest_id = {this.props.quest_id}/></div>
            </div>
        );
    }
}

export default QuestCard;
