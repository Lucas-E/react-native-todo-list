import { useState } from "react";

export function useButtonModel(){
    const [active, setActive] = useState<boolean>(false);

    function toggleActive(){
        setActive(prevState => !prevState);
    }

    return {
        active,
        toggleActive
    };
}