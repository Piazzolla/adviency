import { PresentList } from '../components/PresentList';
import { FrontPageImage } from '../components/FrontPageImage';
import { Text, Container, Row, Col, Grid } from "@nextui-org/react";

export const FrontPage = () => {
    return (
        <>
            <div className='frontPageTitle'>
                <Text h1
                    size={60}
                    css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    }}
                    weight="bold"
                > NAKATOMI CORP WISHES YOU A </Text>
                <Text h1
                    size={60}
                    css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    }}
                    weight="bold"
                > MERRY CHRISTMAS 2087
                </Text>
            </div>
            <Grid.Container  justify="center" >
                <Grid xs={12} md={6} justify="center" alignItems='flex-start' css={{ marginTop:'5em' }}>
                    <FrontPageImage />
                </Grid>
                <Grid xs={12} md={6} justify="center" alignItems='flex-start' css={{ marginTop:'15em' }}>
                    <PresentList />
                </Grid>

            </Grid.Container>
        </>
    )
}
