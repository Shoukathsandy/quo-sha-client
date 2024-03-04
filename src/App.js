

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import Vendor from './screen/Vendor';
import Customers from './screen/Customers';
import Product from './screen/Product';
import Quotation from './screen/Quotation';

export default function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
              <Link class="navbar-brand">Navbar</Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to={"/vendor"}>Vendor</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to={'/customers'} >customer</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to={'/product'} >Product</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link " tabindex="-1" aria-disabled="true" to={'/quotation'}>Quotation</Link>
                  </li>
                </ul>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </AppBar>
      </Box>
      <div>
        <Routes>
          <Route path='/vendor' element={<Vendor />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/product' element={<Product />} />
          <Route path='/quotation' element={<Quotation />} />

        </Routes>

      </div>

    </>
  );
}

