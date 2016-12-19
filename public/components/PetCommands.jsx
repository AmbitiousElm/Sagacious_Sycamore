var PetCommand = (props) => (
  <div className="row">
    <img className='img-responsive col-xs-2' src={props.cmdImg.food} onClick={() => {props.executeCommand('eating')}}/>
    <img className='img-responsive col-xs-2' src={props.cmdImg.love} onClick={() => {props.executeCommand('playing')}}/>
    <img className='img-responsive col-xs-2' src={props.cmdImg.code} onClick={() => {props.executeCommand('codingButton')}}/>
    <img className='img-responsive col-xs-2' src={props.cmdImg.sleep} onClick={() => {props.executeCommand('sleeping')}}/>
    <img className='img-responsive col-xs-2' src={props.cmdImg.question} onClick={() => {props.executeCommand('question')}}/>
    <a href='/game'><img className='img-responsive col-xs-2' src='../other/img/gude_big.png' /></a>
  </div>
);

window.PetCommand = PetCommand;
