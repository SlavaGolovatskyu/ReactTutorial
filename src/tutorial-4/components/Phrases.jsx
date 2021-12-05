export default function Phrases({ phrases }) {
  return (
    <div className="list">
      {
        phrases.map((phrase, index) => 
          <div className='block' key={`${(phrase, index)}`}>
            <h3>{phrase}</h3>
          </div>
        )
      }
    </div>
  );
}
