import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import caritasPic1 from './images/caritasPic1.jpeg';
import mlfPic2 from './images/mlfPic2.jpeg';
import toofPic1 from './images/toofPic1.jpeg';
import { Autorenew } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    description: {
        margin: theme.spacing(8, 8),
        color: '#F5F5F5'
    },
    cardMedia: {
      height: 215,
      width: '100%',
      objectFit: 'cover'
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    }
  }));

const tiers = [
    {
      title: 'The Other Ones Foundation',
      websiteURLVisit: 'https://toofound.org/',
      websiteURLDonate: 'https://toofound.org/donate/',
      pictureURL: toofPic1,
      description: 'A nonprofit that offers extremely low-barrier work opportunities, case management, and humanitarian aid to people experiencing homelessness in Austin, TX.', 
      buttonTextLearn: 'Learn More',
      buttonTextDonate: 'Donate',
      buttonVariant: 'outlined',
    },
    {
      title: 'Caritas of Austin',
      websiteURLVisit: 'https://caritasofaustin.org/',
      websiteURLDonate: 'https://caritasofaustin.org/donate/give/',
      pictureURL: caritasPic1,
      description: 'Aims to prevent and end homelessness for people in Greater Austin through their proven, multi-layered approach.', 
      buttonTextLearn: 'Learn More',
      buttonTextDonate: 'Donate',
      buttonVariant: 'outlined',
    },
    {
      title: 'Mobile Loaves and Fishes',
      websiteURLVisit: 'https://mlf.org/',
      websiteURLDonate: 'https://give.mlf.org/give/138838/#!/donation/checkout',
      pictureURL: mlfPic2,
      description: 'Founded in Austin, Texas, MLF is a social outreach ministry that has been empowering communities into a lifestyle of service with the homeless since 1998.', 
      buttonTextLearn: 'Learn More',
      buttonTextDonate: 'Donate',
      buttonVariant: 'outlined',
    },
  ];

const CustomLink = (url) => {
  <Link href={url}/>
}

const KeepItWeird = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography variant="h6" align="center" component="p" className={classes.description}>
                With the recent passage of Proposition B on May 1, 2021, our city has become even less weird. To me, the "weird" in Austin is one that embraces differences, challenges norms, and pushes toward a more accepting future. With that in mind, here are some local resources doing great work to keep our city weird.
            </Typography>
            <Container maxWidth="lg" component="main">
                <Grid container spacing={5} alignItems="center" alignContent='center'>
                {tiers.map((tier) => (
                    // Enterprise card is full width at sm breakpoint
                    <Grid item key={tier.title} xs={12} sm={12} md={6} lg={4}>
                    <Card>
                        <CardHeader
                        title={tier.title}
                        subheader={tier.subheader}
                        titleTypographyProps={{ align: 'center' }}
                        subheaderTypographyProps={{ align: 'center' }}
                        className={classes.cardHeader}
                        />
                        <CardMedia
                              className={classes.cardMedia}
                              image={tier.pictureURL}
                              title={`${tier.title} image`}
                            />
                        <CardContent>
                        <ul>
                            <Typography component="li" variant="subtitle1" align="center" key={tier.title}>
                                {tier.description}
                            </Typography>
                        </ul>
                        </CardContent>
                        <CardActions>
                            <Button href={tier.websiteURLVisit} target="_blank" fullWidth variant={tier.buttonVariant} color="primary">
                              {tier.buttonTextLearn}
                            </Button>
                            <Button href={tier.websiteURLDonate} target="_blank" fullWidth variant={tier.buttonVariant} color="primary">
                              {tier.buttonTextDonate}
                            </Button>
                          {/* <Button fullWidth variant={tier.buttonVariant} color="primary">
                              {tier.buttonText}
                          </Button> */}
                        </CardActions>
                    </Card>
                    </Grid>
                ))}
                </Grid>
            </Container>
         </React.Fragment>
    );
};

export default KeepItWeird;