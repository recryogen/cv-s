import Button from "./Button";

import { btnType } from "../../../utils/btntypes";

function usersAction() : void{
    //...
} 


export default function UsersBtn(props:{enabledState: boolean}){
    return(
        <Button action={() => {
            usersAction()
          }}
          type={btnType.users}
          enabledState={props.enabledState}>
            Users
        </Button>
    )
}