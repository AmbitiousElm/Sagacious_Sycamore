var PetCommand = (props) => (
  <div className="row center-block">
    <img className='img-responsive col-xs-2 petcommand' src={props.cmdImg.food} onClick={() => {props.executeCommand('eating')}}/>
    <img className='img-responsive col-xs-2 petcommand' src={props.cmdImg.love} onClick={() => {props.executeCommand('playing')}}/>
    <img className='img-responsive col-xs-2 petcommand' src={props.cmdImg.code} onClick={() => {props.executeCommand('codingButton')}}/>
    <img className='img-responsive col-xs-2 petcommand' src={props.cmdImg.sleep} onClick={() => {props.executeCommand('sleeping')}}/>
    <img className='img-responsive col-xs-2 petcommand' src={props.cmdImg.question} onClick={() => {props.executeCommand('question')}}/>
    <a href='/game'><img className='img-responsive col-xs-2 petcommand' src='../other/img/gude_big.png' /></a>
  </div>
);

window.PetCommand = PetCommand;
