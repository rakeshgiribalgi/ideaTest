import React, { Fragment, useEffect, useState, Suspense, lazy } from 'react'
import { Container, Box, Grid, Button, Card, CardContent, Typography, CardActions, DialogTitle, Dialog,DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import CardMedia from '@mui/material/CardMedia';

// import { useAppDispatch, useAppSelector } from '../app/hooks';
// import {
//     PostSlice,
//     addPosts,
//     fetchPosts
// } from '../features/posts/postSlice';

// const posts = useAppSelector(fetchPosts);
// const  dispatch = useAppDispatch()



const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

function CardData() {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState({
        id: '',
        userId: '',
        title: '',
        body:''
    })

    const handleClickOpen = (id: number) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json()).then((data) => setData(data))
         setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [posts, setPosts] = useState<IPost[]>([])
    const [item, setItem] = useState(3);
    const LoadMore = () => {
        setItem((prvItem) => prvItem + 3)
    }
    useEffect(() => {
        // dispatch(posts)
        //setPosts(posts)
        fetch('https://jsonplaceholder.typicode.com/posts')
         .then((res) => res.json()).then((data) => setPosts(data))
     }, []);
    return (
        <Fragment>
            <Container>
                <Box sx={{ flexGrow: 1 }} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                   }}>
                    <Grid container spacing={2} sx={{ m: 1 }}>
                        {posts.slice(0, item).map((i, index) => (
                            <Grid item xs={3} sx={{ m: 1 }} key={index}>
                                <Card sx={{ maxWidth: 350, minHeight: 200, backgroundColor: '#bdd1f0' }}>
                                     <CardMedia
                                        sx={{ height: 150 }}
                                        image='https://picsum.photos/seed/picsum/200/300' 
                                    /> 
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" style={{
                                            height: '1.8em',
                                            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
                                        }}>
                                            {i.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" style={{

                                            height: '2.5em',
                                            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
                                        }}>
                                            {i.body}
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{
                                        display:"flex",
                                        justifyContent:"flex-end",
                                        alignItems:"flex-end",
                                    }}>
                                        <Button size='small' sx={{ justifyContent: 'flex-end' }} onClick={(e) => { handleClickOpen(i.id) }} variant='contained' color='primary'>Learn More.</Button>
                                    </CardActions>
                                </Card>                                
                            </Grid>)
                        )}
                    </Grid>
                        <Button size='small' sx={{ justifyContent: 'space-between' }} onClick={LoadMore} variant='contained' color='primary'> Load More Post</Button>
                </Box>
            </Container>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby={'j'}
            >
                <DialogTitle>{data.title}</DialogTitle>
                <CardMedia
                    sx={{ height: 300 }}
                    image='https://picsum.photos/seed/picsum/200/300'
                /> 
                <DialogContent>
                    <DialogContentText id={'j'}>
                        {data.body}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>

        </Fragment>

    )
}

export default CardData