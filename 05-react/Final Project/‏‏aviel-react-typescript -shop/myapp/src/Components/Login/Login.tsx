

        // @ts-ignore      

//////// marko
///////john12#

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { login } from "../../Features/Slices/AuthSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const intitalState = {
    name: "",
    password: "",
    image: "",
  };
  const [values, setValues] = useState(intitalState);
  // @ts-ignore  
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const dispatch = useDispatch();

  return (
    <div className="login_form">
      <
      // @ts-ignore  
        Card className="w-96">
        <
        // @ts-ignore  
          CardHeader variant="gradient" color="blue" className="mb-4 grid h-28 place-items-center" >
          
          
          
       
          <
          // @ts-ignore  
            Typography className="welcom" variant="h3" color="white">
            Welcom
          </Typography>
        </CardHeader>
        <
        // @ts-ignore    
        CardBody className="all_input">
          <
          // @ts-ignore    
          Input className="input_name" placeholder="Name"
            label=""
            size="lg"
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
          />
          <
          // @ts-ignore    
          Input className="input_password" placeholder="Password"
            label=""
            size="lg"
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
          />

          <div className="-ml-2.5"></div>
        </CardBody>
        <
        // @ts-ignore    
        CardFooter className="pt-0">
          <
          // @ts-ignore    
          Button className="login_btn"
            variant="gradient"
            fullWidth
            onClick={() => dispatch(login(values))}
          >
            Sign In
          </Button>
          <
          // @ts-ignore    
          Typography variant="small" className="Image_is_Optional">
            Image is Optional
          </Typography>
        </CardFooter>
      </Card>

<div className="login_img">
<img className="login_img_site" src="static/media/hoodie3.b9146f93ebf7263c665c.jpg" alt="login_img" />
</div>



    </div>

  );
};



export default Login;




