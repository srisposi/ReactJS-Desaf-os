
const ComponentePromesas = () => {
    const [persona, setPersona] = useState([])
    const [loading, setLoading] = useState(true)
 
   
    useEffect(() => {
        getFetch
        .then(res => {
            setPersona(res)
            setLoading(false)
        })
          
       
    }, [])

    
  console.log(personas)

  return (
      <>
         <h2>Soy componentePromesas</h2> 
          {   loading ? 
                  <h2>Cargando...</h2> 
              :                
                  personas.map(persona=> <div key={persona.id} className="card w-50 mt-5" >
                  <div className="card-header">
                      {persona.name}
                  </div>
                  <div className="card-body">
                      <img src={persona.foto} />
                      {persona.age}
                  </div>
                  <div className="card-footer">
                      <button className="btn btn-outline-primary btn-block">
                          detalle de persona
                      </button>
                  </div>
                  
                  </div>
          )  }
      </>
  )
}

export default ComponentePromesas