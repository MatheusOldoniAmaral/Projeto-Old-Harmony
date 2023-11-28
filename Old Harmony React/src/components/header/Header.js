import { HeaderFull} from "./HeaderFull/HeaderFull";
import { HeaderMinimal } from "./HeaderMinimal/HeaderMinimal";

const Header = ({ fullHeader }) => {

    return (
        (fullHeader) ? 
            <HeaderFull />
        :
            <HeaderMinimal />
    );
}

export { Header };