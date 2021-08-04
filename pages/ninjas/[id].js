
const Details = ({ninja}) => {
   
    return (
      <div className="ninja-container">
        <h2>Details Page</h2>
        <p>{ninja.name}</p>
        <p>{ninja.location}</p>
        <p>{ninja.gender}</p>
      </div>
    );
}
 
export default Details;

export async function getStaticPaths() {
  
  const res = await fetch(`http://localhost:5000/people/`, {
    method: "GET",
  });
  const data = await res.json();
  const paths = data.map(ninja =>{
  	return{
  		params:{id:ninja.id.toString()}
  	}
  });
  return {
      paths, fallback:false
  };
}

export async function getStaticProps(context){
    const { params } = context;
    const res = await fetch(`http://localhost:5000/people/${params.id}`, { method: 'GET' });
    const data = await res.json();
    return {
        props: { ninja:data}
    }
}