import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";
import '../App.css';
//import components
import QuestCard from "./QuestCard";
//import files
import quests_text from "../img/UI/quests_text.png";

class QuestView extends Component {
    constructor(props){
        super(props);
        //delete if not needed
    }

    //variables
    initial_height;

    render(){
        return (
            <div id="questView">
                <div style={{backgroundColor: "#D8A26F"}}>
                    <img id="questTextImg" src={quests_text} style={{height: "7%", margin: "10px"}}/>
                    <div id="questCards" style={{height: this.initial_height*0.72 + "px", overflow: "scroll"}}>
                        <QuestCard/>
                        <QuestCard/>
                        {/*<Link to="/map">Map</Link>*/}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed velit dignissim sodales ut eu sem. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Volutpat est velit egestas dui id ornare arcu odio. Eleifend donec pretium vulputate sapien nec sagittis. Nulla pharetra diam sit amet nisl. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Sit amet venenatis urna cursus eget nunc scelerisque. Dolor morbi non arcu risus quis. Nibh mauris cursus mattis molestie a iaculis at erat.

                            Interdum varius sit amet mattis vulputate enim nulla. Tempor orci eu lobortis elementum. Duis convallis convallis tellus id interdum velit laoreet id donec. Arcu non sodales neque sodales ut etiam sit. Elementum sagittis vitae et leo duis ut diam quam. Lobortis feugiat vivamus at augue eget. Eros in cursus turpis massa tincidunt. Eros in cursus turpis massa tincidunt. Amet porttitor eget dolor morbi non arcu. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Odio ut enim blandit volutpat. Eu non diam phasellus vestibulum lorem sed risus ultricies. Nulla aliquet enim tortor at.

                            Vel fringilla est ullamcorper eget. Ut ornare lectus sit amet est placerat. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Ipsum dolor sit amet consectetur adipiscing elit. Amet justo donec enim diam vulputate ut pharetra sit amet. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Adipiscing at in tellus integer feugiat scelerisque varius. Habitant morbi tristique senectus et netus et malesuada fames. Eget lorem dolor sed viverra ipsum nunc. Mauris pharetra et ultrices neque ornare aenean euismod.

                            Porttitor leo a diam sollicitudin. Commodo elit at imperdiet dui accumsan sit amet nulla. Velit dignissim sodales ut eu sem. Egestas integer eget aliquet nibh praesent. Amet consectetur adipiscing elit pellentesque. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Facilisis magna etiam tempor orci eu lobortis. Purus sit amet luctus venenatis. In ante metus dictum at. Quis commodo odio aenean sed adipiscing diam. Ultricies mi quis hendrerit dolor magna. Nullam non nisi est sit amet facilisis magna etiam. Purus in mollis nunc sed id semper risus in. Nisl nunc mi ipsum faucibus vitae. Integer malesuada nunc vel risus commodo viverra.

                            Duis ut diam quam nulla porttitor massa id neque. At volutpat diam ut venenatis tellus in metus vulputate. Lectus nulla at volutpat diam ut venenatis tellus in metus. Urna nunc id cursus metus aliquam eleifend mi in. Vitae tempus quam pellentesque nec. Erat imperdiet sed euismod nisi. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Ac ut consequat semper viverra nam libero justo laoreet sit. Ut diam quam nulla porttitor. Justo donec enim diam vulputate ut. Pulvinar pellentesque habitant morbi tristique senectus et netus. Orci a scelerisque purus semper eget duis at tellus at. Malesuada fames ac turpis egestas sed tempus urna et. Urna neque viverra justo nec. Aenean sed adipiscing diam donec adipiscing tristique. A pellentesque sit amet porttitor eget.

                            Eget gravida cum sociis natoque penatibus et. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Ornare arcu odio ut sem nulla pharetra diam sit. Quis viverra nibh cras pulvinar mattis nunc sed blandit. Tempor orci eu lobortis elementum. Integer vitae justo eget magna fermentum iaculis eu non diam. Posuere urna nec tincidunt praesent semper feugiat nibh. Vitae auctor eu augue ut lectus arcu bibendum. Varius morbi enim nunc faucibus a pellentesque. Sed adipiscing diam donec adipiscing tristique risus. Viverra aliquet eget sit amet tellus. Egestas sed tempus urna et pharetra pharetra massa. Cursus in hac habitasse platea dictumst quisque. Adipiscing tristique risus nec feugiat in. Enim nunc faucibus a pellentesque sit amet porttitor eget. Tincidunt dui ut ornare lectus sit amet. Dui faucibus in ornare quam viverra. Diam quis enim lobortis scelerisque.

                            Eget est lorem ipsum dolor sit. Morbi tincidunt ornare massa eget. Eget nunc scelerisque viverra mauris in. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Venenatis lectus magna fringilla urna. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Mi proin sed libero enim. Est sit amet facilisis magna etiam tempor orci. Elit at imperdiet dui accumsan sit amet nulla facilisi. Velit euismod in pellentesque massa placerat duis. Cras semper auctor neque vitae tempus quam pellentesque nec. Velit egestas dui id ornare arcu. At lectus urna duis convallis convallis. Dignissim suspendisse in est ante in.

                            Fames ac turpis egestas sed tempus urna. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Cras ornare arcu dui vivamus arcu felis. Eget dolor morbi non arcu risus quis. Eget nunc lobortis mattis aliquam faucibus. Magna etiam tempor orci eu lobortis elementum. Pharetra diam sit amet nisl suscipit. Vel facilisis volutpat est velit. Ut tristique et egestas quis ipsum suspendisse ultrices. Sit amet purus gravida quis blandit. Purus faucibus ornare suspendisse sed nisi lacus. Lacus luctus accumsan tortor posuere ac ut. Adipiscing tristique risus nec feugiat in fermentum posuere. Vitae proin sagittis nisl rhoncus. Massa tempor nec feugiat nisl.

                            Sit amet massa vitae tortor. Commodo odio aenean sed adipiscing diam donec adipiscing. Aliquam sem fringilla ut morbi tincidunt augue interdum. Lorem ipsum dolor sit amet. In egestas erat imperdiet sed. Sit amet consectetur adipiscing elit. Malesuada pellentesque elit eget gravida cum sociis. Accumsan sit amet nulla facilisi. Eu consequat ac felis donec. Turpis massa sed elementum tempus egestas sed. Ut tristique et egestas quis ipsum suspendisse ultrices. Arcu felis bibendum ut tristique.

                            Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Neque ornare aenean euismod elementum nisi quis eleifend. Vitae nunc sed velit dignissim. Viverra orci sagittis eu volutpat. Lorem donec massa sapien faucibus et. Odio ut sem nulla pharetra diam sit amet nisl. Turpis cursus in hac habitasse platea dictumst. Consequat mauris nunc congue nisi vitae suscipit. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Fermentum odio eu feugiat pretium nibh. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Tellus at urna condimentum mattis pellentesque id nibh. Ultrices eros in cursus turpis massa tincidunt.
                        </p>
                    </div>
                </div>
            </div>

        );
    }

    componentWillMount() {
        this.initial_height = parseInt(document.body.scrollHeight);
    }

    componentDidMount(){
        let i;
        //set questView height
        let body_height = parseInt(document.body.scrollHeight) - (2*parseInt(getComputedStyle(document.getElementById('questView'),null).getPropertyValue('border-width')));
        document.getElementById("questView").setAttribute("style", ("height: " + body_height + "px"));
    }
}

export default QuestView;
