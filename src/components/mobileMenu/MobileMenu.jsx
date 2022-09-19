import { 
    Box,
    Image, 
    Grid,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex, 
    Divider
 } from "@chakra-ui/react";

 import Hamburger from "../../assets/icon-hamburger.svg";
 import ChevronIcon from "../../assets/icon-chevron.svg"

function MobileMenu() {

    const planetNames = [
        {
            name: 'Mercury',
            color: 'hsl(240, 6%, 54%)'
        },
        {
            name: 'Venus',
            color: 'hsl(33, 82%, 61%)'
        },
        {
            name: 'Earth',
            color: 'hsl(263, 67%, 51%)'
        },
        {
            name: 'Mars',
            color: 'hsl(10, 63%, 51%)'
        },
        {
            name: 'Jupiter',
            color: 'hsl(2, 68%, 53%)'
        },
        {
            name: 'Saturn',
            color: 'hsl(17, 73%, 46%)'
        },
        {
            name: 'Uranus',
            color: 'hsl(169, 73%, 44%)'
        },
        {
            name: 'Neptune',
            color: 'hsl(222, 87%, 56%)'
        }

    ]

  return (
    <Grid
        direction="column"
        alignItems="center"
      >
        <Menu   >
          <MenuButton display={['grid', 'none', 'none', 'none']} >
            <Image src={Hamburger} />
          </MenuButton>
          <MenuList 
            pt='1rem'
            h='100vh' 
            w='100vw'  
            bgColor='hsl(240, 67%, 8%)'
            // border='2px'
            // borderColor='red.600'
            border='none'
        >
        {
            planetNames.map((planet) => (
                <Box>
                    <MenuItem 
                        // border='none'
                        // borderColor='blue'
                        // borderBottom='2px solid hsl(240, 17%, 26%)'
                        // borderBottomWidth='80%'
                    >
                        <Flex 
                            flex='1'
                            justify='Space-between'
                            marginRight='0.75rem'
                            // border='1px'
                        >
                            <Flex  >
                                <Grid 
                                    bgColor={planet.color}
                                    mx='0.5rem'
                                    my='1rem'
                                    h='1rem'
                                    px='0.5rem'
                                    borderRadius='full'
                                ></Grid>
                                <MenuItem>{planet.name}</MenuItem>
                            </Flex>
                            <Image 
                                mt='1rem'
                                boxSize='0.75rem'
                                src={ChevronIcon} 
                                alt='Chevon Icon'
                            />
                        </Flex>
                        
                    </MenuItem>
                    <Divider  
                        w='90%'
                        m='auto' 
                        color='hsl(240, 17%, 26%)'
                    />
                </Box>
                
                )
            )
        }
          </MenuList>
        </Menu>
      </Grid>
  )
}

export default MobileMenu
