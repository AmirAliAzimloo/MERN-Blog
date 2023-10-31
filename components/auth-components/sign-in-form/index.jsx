"use client"
import { useForm } from 'react-hook-form';


const SignInComponent = () => {

   const {
      register,
      handleSubmit,
      formState: { errors },
      watch
   } = useForm({});



   return (
     <>
     SignInComponent
     </>
   );
}

export default SignInComponent;