import "./flag.css"

export default function Flag({currency}){
    return(
        <>
            <div className={`currency-flag currency-flag-xl currency-flag-${currency.toLowerCase()}`}></div>
        </>
    )
}