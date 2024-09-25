import { useHydrated } from "remix-utils/use-hydrated";

export default function ClientOnly({ children, fallBack }) {
    const isHydrated = useHydrated();
    
    return (
        isHydrated 
        ? <>{children}</>
        : <>{fallBack}</>
    );
}