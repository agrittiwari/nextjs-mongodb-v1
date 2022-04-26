import AlertStyle from './Alerts.module.css'


export const SuccessAlert = ({msg }) =>
{
    return (
        <div className={AlertStyle.successDiv}>
            ✅  {msg}
        </div>
    )
}


 
export const ErrorAlert = ({error }) =>
{
    return (
        <div className={AlertStyle.errorDiv}>❗❗   {error}</div>
    )
}