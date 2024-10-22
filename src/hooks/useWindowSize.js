const { useState, useEffect } = require("react");

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,   // Initialize with current window width
        height: window.innerHeight  // Initialize with current window height
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

export default useWindowSize;
