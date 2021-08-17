import logo from './logo.svg';
import './App.css';
import HelloSign from 'hellosign-embedded';

function App() {
  const client = new HelloSign();
  const signUrl = "https://app.hellosign.com/editor/embeddedSign?signature_id=0221db4dabbd00d3a1a4d63edcc64674&token=60539df42567b5a3a8cff8642a195490"
  const clientId = "288851c9fa9dc11ac938aa9a30f5b202"
  let window = client.open(signUrl, {
    clientId: clientId,
    skipDomainVerification: true
  });
  return (
    <div className="App">
      <h1>HelloSign Embedded Test</h1>
      <div className=''>
        {window}
      </div>
    </div>
  );
}

export default App;
