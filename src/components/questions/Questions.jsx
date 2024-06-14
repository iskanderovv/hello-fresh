import React from 'react';
import './Question.css';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'
import { Title } from '../style';

const Questions = () => {
    return (
        <div className='bg-[#F8F8F8]'>
            <div className='max-w-[1170px] mx-auto px-2 pb-4'>
                <Title className='py-4 text-center'>More questions?</Title>
                <Accordion className='max-w-[960px] mx-auto px-2 py-4 flex flex-col gap-8' allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <AccordionIcon className='chevron' />
                                <Box as='span' flex='1' textAlign='left' className='font-sourceSans font-semibold'>
                                    How does HelloFresh’s meal kit delivery service work?
                                </Box>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <AccordionIcon className='chevron' />
                                <Box as='span' flex='1' textAlign='left' className='font-sourceSans font-semibold'>
                                    Which food meal plans & recipes does HelloFresh offer?
                                </Box>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <AccordionIcon className='chevron' />
                                <Box as='span' flex='1' textAlign='left' className='font-sourceSans font-semibold'>
                                    How many times a week does HelloFresh deliver?
                                </Box>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <AccordionIcon className='chevron' />
                                <Box as='span' flex='1' textAlign='left' className='font-sourceSans font-semibold'>
                                    Does HelloFresh give nutrition & calorie information?
                                </Box>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <AccordionIcon className='chevron' />
                                <Box as='span' flex='1' textAlign='left' className='font-sourceSans font-semibold'>
                                    How do I recycle my HelloFresh box?
                                </Box>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <AccordionIcon className='chevron' />
                                <Box as='span' flex='1' textAlign='left' className='font-sourceSans font-semibold'>
                                    Why should I choose HelloFresh as my meal kit service?
                                </Box>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <AccordionIcon className='chevron' />
                                <Box as='span' flex='1' textAlign='left' className='font-sourceSans font-semibold'>
                                    How much does HelloFresh cost?
                                </Box>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <AccordionIcon className='chevron' />
                                <Box as='span' flex='1' textAlign='left' className='font-sourceSans font-semibold'>
                                    Does HelloFresh support a healthy lifestyle?
                                </Box>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <AccordionIcon className='chevron' />
                                <Box as='span' flex='1' textAlign='left' className='font-sourceSans font-semibold'>
                                    Can I skip a week of delivery?
                                </Box>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

export default Questions
