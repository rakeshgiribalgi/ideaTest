import React, { Fragment, useState, useEffect, MouseEvent } from 'react'
//import MenuButton from './MenuButton';
import { styled, alpha } from '@mui/material/styles';
import {AppBar,Box,Toolbar,IconButton,Typography,InputBase, Menu,MenuItem, Button} from '@mui/material'; 
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';  





const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      }
    },
  },
}));

function Header() {
  const [anchorEl1, setAnchorEl1] = useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };


  const [anchorEl3, setAnchorEl3] = useState<null | HTMLElement>(null);
  const open3 = Boolean(anchorEl3);
  const handleClick3 = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };
  return (
    <Fragment>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 0.02, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
            </Typography>

            <Typography variant="h6"
              noWrap
              component="div"
             sx={{ flexGrow: 0.02, display: { xs: 'none', sm: 'block' } }}
            >
              <Button
                id="basic-button"
                aria-controls={open1 ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open1 ? 'true' : undefined}
                onClick={handleClick1}
                color='inherit'
              >
                CATEGORY 1
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl1}
                open={open1}
                onClose={handleClose1}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                data-testid="Div::Result1"
              >
                <Button
                  id="basic-button"
                  aria-controls={open3 ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open3 ? 'true' : undefined}
                  onClick={handleClick3}
                  color='inherit'
                >
                  Subcat 1_1
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl3}
                  open={open3}
                  onClose={handleClose3}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                   anchorOrigin={{
                     vertical: 'bottom',
                     horizontal: 'right',
                  }}
                >
                  <MenuItem onClick={handleClose3}>News 1</MenuItem>
                  <MenuItem onClick={handleClose3}>News 4</MenuItem>
                  <MenuItem onClick={handleClose3}>News 7</MenuItem>
                </Menu> 




            
                 
              </Menu>
            </Typography>

            <Typography variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              <Button
                id="basic-button"
                aria-controls={open2 ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open2 ? 'true' : undefined}
                onClick={handleClick2}
                color='inherit'
              >
                Category 2
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl2}
                open={open2}
                onClose={handleClose2}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                data-testid="Div::Result2"
              >
                <Typography variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                <Button
                  id="basic-button"
                  aria-controls={open3 ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open3 ? 'true' : undefined}
                  onClick={handleClick3}
                  color='inherit'
                >
                  Subcat 2_1
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl3}
                  open={open3}
                  onClose={handleClose3}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                    data-testid="Div::Result3"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                >
                  <MenuItem onClick={handleClose3}>News 2</MenuItem>
                  <MenuItem onClick={handleClose3}>News 5</MenuItem>
                  <MenuItem onClick={handleClose3}>News 8</MenuItem>
                  </Menu> 
                </Typography>
                <Typography variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                <Button
                  id="basic-button"
                  aria-controls={open3 ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open3 ? 'true' : undefined}
                  onClick={handleClick3}
                  color='inherit'
                >
                  Subcat 2_2
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl3}
                  open={open3}
                  onClose={handleClose3}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                >
                  <MenuItem onClick={handleClose3}>News 3</MenuItem>
                  <MenuItem onClick={handleClose3}>News 6</MenuItem>
                  <MenuItem onClick={handleClose3}>News 9</MenuItem>
                  </Menu> 
                  </Typography>
              </Menu>
            </Typography>
             
             
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
    </Fragment>
  )
}

export default Header