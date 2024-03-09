import Button from "./Button";

import { btnType } from "../../../utils/btntypes";

export default function ShowMoreBtn(props: {
  action: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Button action={props.action} enabledState={true} type={btnType.showmore}>
      Show More
    </Button>
  );
}
