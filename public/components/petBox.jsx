// image generator with different icons based on pet mood
var Petbox = (props) => {
  // css styling for the progress bar'';;;
  var statusProps = {
    love: props.pet.love,
    status: props.pet.status,
    energy: props.pet.feed,
    health: props.pet.health,
    level: props.pet.level,
    experience: props.pet.experience,
    name: props.pet.name,
    user: props.pet.user
  }
  var bars = {
    loveBar: { width: props.pet.love/1000 * 100 + '%' },
    energyBar: { width: props.pet.feed/1000 * 100 + '%' },
    healthBar: { width: props.pet.health/1000 * 100 + '%' },
    levelBar:  { width: props.pet.level/3 * 100 + '%' },
    experienceBar: { width: props.pet.experience/5 * 100 + '%' }

  }

  return (
  <div className='petView container'>
    <div className='row'>
      <div className='pet-image-container col-sm-6'>
        <img className="pet-image img-responsive center-block" src={props.pet.img}></img>
      </div>
      <div className='stats col-sm-6'>
        <div className='stats container'>
            {/* <div className='row'>
              <b>Name:</b> {props.pet.name}
            </div>
            <div className='row'>
              <b>User:</b> {props.pet.user}
            </div> */}
            <div className='row'>
              <b>Health: {props.pet.phys}</b>
              <div className='progress'>
                  <div className="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" style={bars['healthBar']}>
                  </div>
              </div>
            </div>
            <div className='row'>
              <b>Mood: {props.pet.mood}</b>
              <div className='progress'>
                  <div className="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" style={bars['loveBar']}>
                  </div>
              </div>
            </div>
            <div className='row'>
              <b>Energy:</b>
              <div className='progress'>
                  <div className="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" style={bars['energyBar']}>
                  </div>
              </div>
            </div>
            <div className='row'>
              <b>Level:</b> {props.pet.level} / 3
              <div className='progress'>
                  <div className="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" style={bars['levelBar']}>
                  </div>
              </div>
            </div>
            <div className='row'>
              <b>Experience:</b>
              <div className='progress'>
                  <div className="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" style={bars['experienceBar']}>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

window.Petbox = Petbox;
