import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa"; // Іконка з react-icons

export  const CoffeeScrollUI = () => {
    const [scroll, setScroll] = useState(0);
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        setScroll(scrollPercent);
        setShowButton(scrollTop > 200);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {/* Прогрес-бар зверху */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "5px",
                    width: `${scroll}%`,
                    backgroundColor: "#6f4e37", // Кавовий колір
                    zIndex: 9999,
                    transition: "width 0.2s ease-out",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
            />

            {/* Кнопка "наверх" */}
            {showButton && (
                <button
                    onClick={scrollToTop}
                    aria-label="Повернутись нагору"
                    style={{
                        position: "fixed",
                        bottom: "2rem",
                        right: "2rem",
                        backgroundColor: "#a9745d", // Світло-кавовий
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        zIndex: 1000,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "opacity 0.3s ease-in-out",
                    }}
                >
                    <FaArrowUp />
                </button>
            )}
        </>
    );
}
