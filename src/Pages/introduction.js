import "../style.css";
import ButtonSweep from "../Components/Boilerplate/ButtonSweep/buttonsweep";
import IntroductionHeader from "../Components/Introduction/introductionheader.jsx";
import IntroductionDescription from "../Components/Introduction/introductiondescription";
import { Animation } from "../Components/NavigationBar/navigationbar";

export function Introduction()
{
    return (
        <div className="introduction">
            <IntroductionHeader/>
            <IntroductionDescription/>
            <ButtonSweep Content="Contact Me!" LinkURL="Contact" Function={() => { Animation("contact") }}/>
        </div>
    );
}





