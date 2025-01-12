```javascript
// pages/aboutSolution.js

export default async function About(){
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return (
    <div>
      <h1>About Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```