import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BetweenLine from '../components/BetweenLine'
import { Box, Button, Center, Text } from '@chakra-ui/react'


const Hadiths = () => {
    return (
        <>
            {/* Book name */}
            <Box
                bg={"#1F2125"}
                textAlign={"center"}
            >
                <Text
                    fontSize={{ base: "20px", md: "25px", lg: "30px" }}
                    fontFamily={"Istok Web"}
                    fontWeight={700}
                    color={"white"}
                    textDecoration={"underline"}
                    textDecorationColor={"white"}
                >
                    <span>1</span>
                    <span><i style={{ marginLeft: "10px" }} class="fa-solid fa-book"></i></span>
                    <span style={{ marginLeft: "10px" }}>REVELATION</span>
                </Text>
            </Box>
            <BetweenLine />
            {/* chapter */}
            <Box
                bg={"#242424"}
                pl={{ base: "20px", md: "18px", lg: "15px" }}
                pr={{ base: "20px", md: "18px", lg: "15px" }}
                pt={{ base: "8px", md: "12px", lg: "15px" }}
                pb={{ base: "8px", md: "12px", lg: "15px" }}
                mb={"25px"}
            >
                <Text
                    color={"white"}
                    fontSize={{ lg: "20px", md: "18px", base: "15px" }}
                    fontFamily={"Istok Web"}
                    fontWeight={700}
                >
                    CHAPTER 10
                </Text>
                <Text
                    color={"white"}
                    fontSize={{ lg: "18px", md: "18px", base: "13px" }}
                    fontFamily={"Inter"}
                // ml={"auto"}
                >
                    The Imam questioning his companions in order to test their knowledge
                </Text>
            </Box>
            {/* Arabic Hadith */}
            <Box
                bg={"#1F2125"}
                pl={{ base: "4%", md: "15%", lg: "25%" }}
                mb={{ base: "20px", md: "20px", lg: "25px" }}
            >
                <Text
                    fontFamily={"Inter"}
                    fontSize={{ lg: "25px", md: "22px", base: "15px" }}
                    fontWeight={700}
                    textAlign={"end"}
                    color={"white"}
                >
                    حَدَّثَنَا الْحُمَيْدِيُّ عَبْدُ اللَّهِ بْنُ الزُّبَيْرِ ، قَالَ : حَدَّثَنَا سُفْيَانُ ، قَالَ : حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ الْأَنْصَارِيُّ ، قَالَ : أَخْبَرَنِي مُحَمَّدُ بْنُ إِبْرَاهِيمَ التَّيْمِيُّ ، أَنَّهُ سَمِعَ عَلْقَمَةَ بْنَ وَقَّاصٍ اللَّيْثِيَّ ، يَقُولُ : سَمِعْتُ عُمَرَ بْنَ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ عَلَى الْمِنْبَرِ، قَالَ : سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، يَقُولُ : " إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا، فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ "
                </Text>
            </Box>
            {/* English Hadith */}
            <Box
                bg={"#FFF"}
                borderRadius={"0px 40px 40px 0px"}
                pl={{ base: "10px", md: "20px", lg: "30px" }}
                pr={{ base: "4%", md: "15%", lg: "25%" }}
                pt={{ base: "10px", md: "14px", lg: "18px" }}
                pb={{ base: "10px", md: "14px", lg: "18px" }}
                mb={{ base: "15px", md: "20px", lg: "25px" }}
            >
                <Text
                    color={"black"}
                    fontSize={{ lg: "20px", md: "18px", base: "15px" }}
                    fontFamily={"Istok Web"}
                    fontWeight={700}
                    mb={{ base: "10px", lg: "15px", md: "8px" }}
                >
                    Narrated 'Umar bin Al-Khattab:
                </Text>
                <Text
                    color={"black"}
                    fontSize={{ base: "13px", md: "14", lg: "15px" }}
                    fontFamily={"Inter"}
                    fontWeight={400}
                >
                    I heard Allah's Messenger (ﷺ) saying, "The reward of deeds depends upon the intentions and every person will get the reward according to what he has intended. So whoever emigrated for worldly benefits or for a woman to marry, his emigration was for what he emigrated for."
                </Text>
            </Box>
            {/* Reference and save to bookmark btn */}
            <Box>
                <Row>
                    <Col sm={12} md={6}>
                        <Box>
                            <Text
                                color={"white"}
                            >
                                <text style={{ fontFamily: "Istok Web", fontSize: { lg: "18px", md: "", base: "5px" } }}>Reference :</text>
                                <text style={{ fontFamily: "Inter", fontSize: { lg: "15px", md: "13px", base: "10px" }, fontWeight: "400" }}>Sahih al-Bukhari , Hadith 2</text>
                            </Text>
                            <Text
                                color={"white"}
                            >
                                <text style={{ fontFamily: "Istok Web", fontSize: { lg: "18px", md: "", base: "5px" } }}>In-book reference : </text>
                                <text style={{ fontFamily: "Inter", fontSize: { lg: "15px", md: "13px", base: "10px" } }}>book 1 , hadhees 2</text>
                            </Text>
                        </Box>
                    </Col>
                    {/* Save to bookmark */}
                    {/* <Col>
                        <Box
                            display="flex" justifyContent={{ base: "center", lg: "flex-end", md: "flex-end" }}
                        >
                            <Button
                                size={{ base: "sm", md: "md", lg: "lg" }}
                                bg={"#272F33"}
                                color={"white"}
                            >
                                <i style={{ marginRight: "10px" }} class="fa-regular fa-bookmark"></i>
                                SAVE TO BOOKMARK
                            </Button>
                        </Box>
                    </Col> */}
                    <BetweenLine />
                </Row>
            </Box>
        </>
    )
}

export default Hadiths