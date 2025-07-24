import { useForm } from "react-hook-form";

 function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  function Submitform(data) {
    console.log(data)
  }

  return (
    <form action="" onSubmit={handleSubmit(Submitform)} >
      <div>
        <label htmlFor="">Name</label>
        <input {...register("Name", {required:true,minLength:{value:5,"message":"atleast 5 length"}})} type="text" 
        
        />      +
        <p>{errors.Name?.message}</p>
      </div>
      <div>
        <label htmlFor="">Age</label>
        <input {...register("Age")} type="number" />
      </div>
      

      <input type="submit"/>

    </form>
    
  );
}

export default App