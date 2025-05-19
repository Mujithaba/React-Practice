
export default function Header() {
  return (
    <div>
       <p style={{alignItems:"center"}}>Home</p> 
      <header>
        <ul  style={{ display: "flex", gap: "60px", listStyle:'none'}}>
          <li>Recipes</li>
          <li>Comments</li>
        </ul>
      </header>
    </div>
  );
}
