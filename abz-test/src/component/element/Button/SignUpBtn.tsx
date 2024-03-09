import Button from "./Button";

import { btnType } from "../../../utils/btntypes";

function signUp() : void{
    //...
} 


export default function SingUpBtn(props:{enabledState: boolean}){
    return(
        <Button action={() => {
           signUp()
          }}
          type={btnType.signup}
          enabledState={props.enabledState}>
            Sign Up
        </Button>
    )
}