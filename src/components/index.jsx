function CreateSayayin (props) {
    const { name, description, imagen} = props;
    return(
        <>
     <h1>{name}</h1>
     <img style={{width: "200px", height: "200px"}} src={imagen} alt=""  />
     <p>{description}</p>
       </>
    )

    
}

export default CreateSayayin;