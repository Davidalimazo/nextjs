import Link from 'next/link';
export const getStaticProps = async() => {
    const res = await fetch('http://localhost:5000/people', {method:'GET'});
    const data = await res.json();
    return {
    props: {ninjas:data.slice(3, 10)}
}
}

const Ninjas = ({ninjas}) => {
    return (
      <div>
        <div className="ninjas">
          <h2>Ninjas Whoha!</h2>
          <p>
            {ninjas.map((ninja) => (
                <Link href={"/ninjas/" + ninja.id} ><ul className="ninj" key={ninja.id}>
            <a><li className="ninja">{ninja.name}</li></a>
              </ul>
              </Link>
            ))}
          </p>
        </div>
      </div>
    );
}
 
export default Ninjas;