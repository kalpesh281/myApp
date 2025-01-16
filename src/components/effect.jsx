import { useEffect } from "react";

const Effect = () => {
    // const [count, setCount] = useState(0);
    useEffect(() => {
      console.log("Hello");
    }, );
    return (
        <div>
            <h1>Hello</h1>
            <button >Click me</button>
        </div>
    );  
}
export default Effect;