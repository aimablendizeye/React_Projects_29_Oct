



function OnClick ({isVisible}) {
 if(!isVisible) return null;

  return (
    <div>
        <p>This is what I was hiding from you !</p>
        <p>Did you find me?</p>
    </div>
  )
 
}

export default OnClick;