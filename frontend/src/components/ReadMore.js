import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const ReadMore = ({ text }) => {
    const [showFullText, setShowFullText] = useState(false);
    const [maxCharacters, setMaxCharacters] = useState(500);

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    useEffect(() => {
        // Update max characters based on screen size
        const updateMaxCharacters = () => {
            if (window.innerWidth < 768) {
                setMaxCharacters(200);  // Small screens
            } else {
                setMaxCharacters(500);  // Large screens
            }
        };

        // Set initial max characters
        updateMaxCharacters();

        // Listen for window resize and update max characters accordingly
        window.addEventListener("resize", updateMaxCharacters);

        return () => {
            window.removeEventListener("resize", updateMaxCharacters);
        };
    }, []);

    // Determine whether to show the full text or truncated text
    const textToShow = showFullText ? text : text.slice(0, maxCharacters);

    return (
        <div>
            <p dangerouslySetInnerHTML={{ __html: textToShow }} />
            {text.length > maxCharacters && (
                <Button
                mb={"10px"}
                    color={"white"}
                    bg={"#272F33"}
                    size={{ base: "sm", md: "md", lg: "lg" }}
                    onClick={toggleText}
                    _hover={{color:"white",bgColor:"black"}}
                >
                    {showFullText ? "Show Less" : "Read More"}
                </Button>
            )}
        </div>
    );
};

export default ReadMore;
