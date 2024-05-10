// Generate a random secret code when the component is initialized
const randomNum = Math.floor(Math.random() * 26) + 1;
const secretCode = (randomNum + 9).toString(36).toUpperCase();

console.log(secretCode);

function Output({ guess, attempts }) {
  if (!guess) return;

  let message;
  if (attempts === 0 && guess !== secretCode) {
    message = (
      <p>
        BOOOOOOOMMM...
        <br />
        YOU BLEW IT.
        <br />
        THE CORRECT CODE WAS "{secretCode}"
      </p>
    );
  } else if (guess > secretCode) {
    message = <p>EARLIER</p>;
  } else if (guess < secretCode) {
    message = <p>LATER</p>;
  } else {
    message = (
      <p>
        TICK...FZZZZ...CLICK...
        <br />
        YOU DID IT
      </p>
    );
  }

  return <div className='output container'>{message}</div>;
}

export default Output;
