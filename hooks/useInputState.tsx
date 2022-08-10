import { useState } from "react";

const useInputState = (initialValue = '') => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return [value, handleChange] as const;
}

export default useInputState;