import { forwardRef } from "react";

export const Input = forwardRef(({ error, label, ...rest}, ref) => {
    return(
        <div >
            <label className="label">{label}</label>
            <input ref={ref} {...rest}/>
            {error ? <p className="paragraph">{error.message}</p> : null}
        </div>
    );
});