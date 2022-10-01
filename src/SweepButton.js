import "./style.css";

export function SweepButton({ Content })
{
    return (
        <div class="introduction__contact-me-container">
           <button class="introduction__contact-me">{ Content }</button>
        </div>
    )
}